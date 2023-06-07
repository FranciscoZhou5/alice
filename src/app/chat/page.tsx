import ChatMessage from "@/components/ChatMessages";
import PromptInput from "@/components/PromptInput";
import Hero from "@/components/Hero";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function ChatPage() {
  const cookiesStore = cookies();

  if (!cookiesStore.has("username") && !cookiesStore.has("email")) {
    redirect("/");
  }

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
