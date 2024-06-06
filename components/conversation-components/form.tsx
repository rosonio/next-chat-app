"use client";

import useConversation from "@/hooks/useConversation";
import axios from "axios";
import { ImagePlus, Send } from "lucide-react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import MessageInput from "../form-components/message-input";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });

    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };

  const handleUploadSuccess = (response: any) => {
    axios.post("/api/messages", {
      image: response?.info?.secure_url,
      conversationId,
    });
  };

  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onSuccess={handleUploadSuccess}
        uploadPreset="dvtxpm8n"
      >
        <ImagePlus size={30} className="text-gray-600" />
      </CldUploadButton>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Please enter a message"
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-gray-600 cursor-pointer hover:bg-black transition"
        >
          <Send size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
