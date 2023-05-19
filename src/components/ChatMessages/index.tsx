"use client";

import { useChatStore } from "@/store/ChatStore";

export default function ChatMessage() {
  const messages = useChatStore((state) => state.messages);

  return (
    <div>
      {messages.map((msg) => (
        <div key={Math.random()}>{msg.content}</div>
      ))}
    </div>
  );
}
