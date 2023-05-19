"use client";

import Input from "react-textarea-autosize";

import { Lightning } from "@phosphor-icons/react";
import { useChatStore } from "@/store/ChatStore";
import { useState } from "react";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  return (
    <form className="max-w-[650px] z-20 px-4 fixed bottom-6 left-1/2 -translate-x-1/2 w-full">
      <div className="flex bg-background-secundary rounded-md items-center">
        <Input
          autoFocus
          placeholder="Enviar uma mensagem"
          className="outline-none bg-transparent rounded-md w-full pl-2 py-2 resize-none text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addMessage({ content: prompt, role: "user" });
            }
          }}
        />
        <button
          onClick={() => {
            addMessage({ content: "Olá", role: "user" });
          }}
          type="button"
          className="w-9 h-9 pr-1 flex justify-center items-center"
        >
          <Lightning size={18} className="dark:text-gray-400 text-gray-600" />
        </button>
      </div>
    </form>
  );
}
