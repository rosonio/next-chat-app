import Sidebar from "@/components/sidebar/sidebar";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import getSession from "../../actions/getSession";
import ConversationList from "@/components/conversation-components/conversation-list";
import getConversations from "@/app/actions/getConversations";

export default async function AuthenticatedLayout(props: PropsWithChildren) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

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
