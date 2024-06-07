import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import Body from "@/components/conversation-components/body";
import Form from "@/components/conversation-components/form";
import Header from "@/components/conversation-components/header";
import EmptyState from "@/components/empty-state";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
