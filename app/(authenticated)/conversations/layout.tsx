import Sidebar from "@/components/sidebar/sidebar";
import { PropsWithChildren } from "react";
import ConversationList from "@/components/conversation-components/conversation-list";
import getConversations from "@/app/actions/getConversations";
import getUsers from "@/app/actions/getUsers";

export default async function AuthenticatedLayout(props: PropsWithChildren) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialConversations={conversations} />
        {props.children}
      </div>
    </Sidebar>
  );
}
