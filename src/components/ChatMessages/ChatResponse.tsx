import { useChatStore } from "@/store/ChatStore";
import Message from "./Message";

export default function ChatResponse() {
  const chatResponseMessage = useChatStore((state) => state.chatResponse);

  if (chatResponseMessage.length === 0) return <></>;

  return <Message content={chatResponseMessage} role="assistant" />;
}
