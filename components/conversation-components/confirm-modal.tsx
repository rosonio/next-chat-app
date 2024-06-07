"use client";

import useConversation from "@/hooks/useConversation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useToast } from "../ui/use-toast";
import Modal from "../modal";
import { TriangleAlert } from "lucide-react";
import { DialogTitle } from "@headlessui/react";
import { Button } from "../ui/button";

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ConfirmModal = ({ onClose, isOpen }: ConfirmModalProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);

    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/conversations");
        router.refresh();
      })
      .catch(() =>
        toast({
          title: "Something went wrong",
          description:
            "Something went wrong when trying to delete the conversation. Please try again",
          variant: "destructive",
        })
      )
      .finally(() => setIsLoading(false));
  }, [conversationId, router, onClose, toast]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <TriangleAlert size={24} className="text-red-600" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <DialogTitle
            as="h3"
            className="mt-2 text-base font-semibold leading-6 text-gray-900"
          >
            Delete conversation
          </DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete the conversation? This action
              cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-2">
        <Button disabled={isLoading} variant={"destructive"} onClick={onDelete}>
          Delete
        </Button>
        <Button disabled={isLoading} variant={"outline"} onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
