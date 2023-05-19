import ChatMessage from "@/components/ChatMessages";
import PromptInput from "@/components/PromptInput";

export default function ChatPage() {
  return (
    <div>
      <div>
        <ChatMessage />
      </div>

      <PromptInput />
    </div>
  );
}
