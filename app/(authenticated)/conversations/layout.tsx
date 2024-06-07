import Sidebar from "@/components/sidebar/sidebar";
import { PropsWithChildren } from "react";
import ConversationList from "@/components/conversation-components/conversation-list";
import getConversations from "@/app/actions/getConversations";

export default async function AuthenticatedLayout(props: PropsWithChildren) {
  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialConversations={conversations} />
        {props.children}
      </div>
    </Sidebar>
  );
}
