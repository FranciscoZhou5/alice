"use client";

import { useRef, useState } from "react";

import Input from "react-textarea-autosize";
import { Lightning } from "@phosphor-icons/react";
import Tippy from "@tippyjs/react";

import { useChatStore } from "@/store/ChatStore";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  const addMessage = useChatStore((state) => state.addMessage);

  function handleSendMessage() {
    if (prompt.length === 0 && containerRef) {
      containerRef.current?.classList.add("animate-shake");

      setTimeout(() => {
        containerRef.current?.classList.remove("animate-shake");
      }, 820);

      return;
    }

    addMessage({ content: prompt, role: "user" });
    setPrompt("");
  }

  return (
    <form className="max-w-[650px] z-20 px-4 fixed bottom-6 left-1/2 -translate-x-1/2 w-full">
      <div ref={containerRef} className="flex bg-background-secundary rounded-md items-center ">
        <Input
          autoFocus
          placeholder="Enviar uma mensagem"
          className="outline-none bg-transparent rounded-md w-full pl-2 py-2 resize-none text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();

              handleSendMessage();
            }
          }}
        />
        <Tippy content="Enviar" placement="top">
          <button onClick={() => handleSendMessage()} type="button" className="w-9 h-9 pr-1 flex justify-center items-center ">
            <Lightning size={18} className="dark:text-gray-400 dark:hover:text-primary duration-200 text-gray-600" />
          </button>
        </Tippy>
      </div>
    </form>
  );
}
