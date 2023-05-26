import FormLogin from "@/components/FormLogin";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";

export default function Home() {
  const cookiesStore = cookies();

  if (cookiesStore.has("username")) {
    redirect("/chat");
  }

  return (
    <main className="w-full h-[calc(100vh_-_48px)] flex justify-center items-center">
      <FormLogin />
    </main>
  );
}
