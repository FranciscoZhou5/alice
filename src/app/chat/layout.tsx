import { redirect } from "next/navigation";

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  redirect("/");
}
