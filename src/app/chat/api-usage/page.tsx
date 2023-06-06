import ArrowLeft from "@/components/Icons/ArrowLeft";
import { cookies } from "next/headers";
import Link from "next/link";

interface APIUsage {
  user: string;
  count: number;
  prompts: {
    content: string;
    sender: string;
    createdAt: string;
  }[];
}

async function getAPIUsage(): Promise<APIUsage> {
  const cookiesStore = cookies();
  const username = cookiesStore.get("username")?.value;

  const response = await fetch(`http://localhost:3000/api/api-usage?username=${username}`);

  return response.json();
}

export default async function APIUsage() {
  const data = await getAPIUsage();

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="flex items-center h-12">
        <Link href="/chat" className="flex space-x-2 items-center group ">
          <ArrowLeft size={20} className="text-weak group-hover:text-primary duration-200" />
          <span className="text-sm group-hover:text-primary duration-200"> Voltar </span>
        </Link>
      </div>

      <main>
        <div className="rounded-md bg-background-secundary p-2">
          <h2 className="text-lg font-bold"> Uso da API </h2>

          <div className="w-full flex justify-center items-center h-16">
            <div className="text-sm text-weak text-center">
              <p> [BETA] </p>
              <p className="italic">
                prompts_count: {data.count}; username: {data.user}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
