"use client";

import { useChatStore } from "@/store/ChatStore";

export default function Hero() {
  const messages = useChatStore((state) => state.messages).length;
  const addMessage = useChatStore((state) => state.addMessage);

  if (messages !== 0) return <></>;

  return (
    <div className="max-w-[900px] mx-auto flex flex-col items-center py-8 px-4 md:px-12">
      <h1 className="text-3xl font-bold"> Alice </h1>

      <div className="py-4 text-center w-full">
        <span>Perguntas frequentes</span>

        <div className="w-full py-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[`"Quais aulas eu vou ter hoje?"`, `"Como se cria um site como esse?"`, `"Eu sou um gato?"`].map((item) => (
            <button
              key={Math.random()}
              onClick={() => addMessage({ content: item.replaceAll(`"`, ""), role: "user" })}
              className="bg-background-secundary h-16 px-3 py-2 rounded-md hover:bg-background-tertiary w-full text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
