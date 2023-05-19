import { create } from "zustand";

export type ChatAgent = "user" | "system" | "assistant";

export interface ChatMessage {
  role: ChatAgent;
  content: string;
}

interface IChat {
  messages: ChatMessage[];
  addMessage(newMessage: ChatMessage): void;
}

export const useChatStore = create<IChat>((set, get) => ({
  messages: [],
  addMessage: (newMessage: ChatMessage) => {
    const messages = get().messages;

    set({ messages: [...messages, newMessage] });
  },
}));
