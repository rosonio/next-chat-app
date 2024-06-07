"use client";

import useConversation from "@/hooks/useConversation";
import { FullConversationType } from "@/types";
import clsx from "clsx";
import { UserRoundPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConversationBox from "./conversation-box";
import GroupChatModal from "./group-chat-modal";
import { User } from "@prisma/client";

interface ConversationListProps {
  initialConversations: FullConversationType[];
  users: User[];
}

const ConversationList = ({
  initialConversations,
  users,
}: ConversationListProps) => {
  const [items, setItems] = useState(initialConversations);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  return (
    <>
      <GroupChatModal
        users={users}
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
      />

      <aside
        className={clsx(
          `fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200`,
          isOpen ? "hidden" : "block w-full left-0"
        )}
      >
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">Messages</div>
            <div
              className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hove:opacity-75 transition"
              onClick={() => setIsAddOpen(true)}
            >
              <UserRoundPlus size={20} />
            </div>
          </div>
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId === item.id}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationList;
