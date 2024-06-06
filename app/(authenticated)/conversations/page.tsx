"use client";

import EmptyState from "@/components/empty-state";
import useConversation from "@/hooks/useConversation";
import clsx from "clsx";

const ConversationsPage = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default ConversationsPage;
