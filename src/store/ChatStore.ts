import { create } from "zustand";

export type ChatAgent = "user" | "system" | "assistant";

export interface ChatMessage {
  role: ChatAgent;
  content: string;
}

interface IChat {
  messages: ChatMessage[];
  chatResponse: string;

  addMessage(newMessage: ChatMessage): void;
}

export const useChatStore = create<IChat>((set, get) => ({
  messages: [],
  chatResponse: "",

  addMessage: async (newMessage: ChatMessage) => {
    const messages = get().messages;
    const sender = localStorage.getItem("Alycia@username") as string;

    set({ messages: [...messages, newMessage] });

    console.time("chat response");

    const response = await fetch("/api/response", {
      method: "POST",
      body: JSON.stringify({ messages: [...messages, newMessage], sender }),
    });

    const data = response.body;
    if (!data) return;

    if (!response.ok) {
      const { status } = response;

      console.log(`[ERROR ${status}] - ${response.statusText}`);

      throw new Error(response.statusText);
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      set((state) => ({ ...state, chatResponse: state.chatResponse + chunkValue }));
    }

    set((state) => ({ ...state, messages: [...state.messages, { role: "assistant", content: state.chatResponse }], chatResponse: "" }));

    console.timeEnd("chat response");
  },
}));
