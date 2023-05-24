"use client";

import { memo } from "react";

import { useChatStore } from "@/store/ChatStore";

import Message from "./Message";
import ChatResponse from "./ChatResponse";

function ChatMessage() {
  const messages = useChatStore((state) => state.messages);

  return (
    <>
      {messages.map(({ content, role }) => (
        <Message key={Math.random()} content={content} role={role} />
      ))}

      <ChatResponse />

      <div className="h-32"></div>
    </>
  );
}

export default memo(ChatMessage);
