import FormLogin from "@/components/FormLogin";
import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const cookiesStore = cookies();

  // if (cookiesStore.has("username") && cookiesStore.has("email")) {
  //   const email = cookiesStore.get("email")?.value;

  //   if (email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
  //     redirect("/chat");
  //   }
  // }

  const { data } = await supabase.from("prompts").select("*").eq("email", cookiesStore.get("email")?.value);

  const closed = true;

  return (
    <>
      {closed ? (
        <main className="w-screen h-screen flex justify-center items-center">
          <div className="max-w-xs text-center px-2">
            <h2 className="font-bold"> Encerramento </h2>
            <p className="text-sm"> Agradeço a todo mundo que apoiou o projeto e utilizou a ferramenta 🤖. </p>

            {cookiesStore.get("email")?.value && (
              <p className="text-sm mt-2 text-weak">
                Você fez um total de <span className="text-primary">{data?.length}</span> perguntas.
              </p>
            )}

            <div className="w-16 h-[2px] mx-auto bg-background-secundary mt-6 mb-4"></div>

            <div className="flex flex-col space-y-4">
              <span className="text-sm">
                Mas não se preocupe, você pode usar o <span className="text-[#75AC9D]">ChatGPT</span> ainda.
              </span>
              <Link
                href="https://chat.openai.com/"
                className="bg-[#75AC9D] text-sm font-bold px-2 py-2 rounded-md hover:opacity-60 duration-200"
              >
                Usar ChatGPT
              </Link>

              <Link
                target="_blank"
                className="text-sm hover:text-primary hover:underline duration-200 text-weak mt-2"
                href="https://github.com/FranciscoZhou5/alice"
              >
                Ver código fonte
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <main className="w-full h-[calc(100vh_-_48px)] flex justify-center items-center px-4">
          <FormLogin />
        </main>
      )}
    </>
  );
}
