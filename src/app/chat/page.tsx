import ChatMessage from "@/components/ChatMessages";
import PromptInput from "@/components/PromptInput";
import Hero from "@/components/Hero";

export default function ChatPage() {
  return (
    <main>
      <div>
        <Hero />
        <ChatMessage />
      </div>

      <PromptInput />
    </main>
  );
}
