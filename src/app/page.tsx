import FormLogin from "@/components/FormLogin";
import { redirect } from "next/navigation";

import { cookies } from "next/headers";

export default async function Home() {
  const cookiesStore = cookies();

  if (cookiesStore.has("username") && cookiesStore.has("email")) {
    const email = cookiesStore.get("email")?.value;
    
    if (email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      return redirect("/")
    }
    
    redirect("/chat");
  }

  return (
    <main className="w-full h-[calc(100vh_-_48px)] flex justify-center items-center px-4">
      <FormLogin />
    </main>
  );
}
