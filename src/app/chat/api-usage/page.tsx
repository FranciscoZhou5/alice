import ArrowLeft from "@/components/Icons/ArrowLeft";
import { cookies } from "next/headers";
import Link from "next/link";
import APIUsageChart from "./Chart";
import { supabase } from "@/lib/supabase";

interface Prompt {
  content: string;
  sender: string;
  created_at: string;
}

interface APIUsage {
  user: string;
  count: number;
  prompts: Prompt[];
}

async function getAPIUsage() {
  const cookiesStore = cookies();
  const username = cookiesStore.get("username")?.value;

  const { data } = await supabase.from("prompts").select("*").eq("sender", username);

  const dates = (data as Prompt[]).map(({ created_at }) => new Date(created_at));

  const countDatesByDay = dates.reduce((acc, date) => {
    const dateKey = date.toISOString().slice(0, 10);

    if (!acc[dateKey]) {
      acc[dateKey] = 0;
    }

    acc[dateKey]++;

    return acc;
  }, {} as { [x: string]: number });

  return countDatesByDay;
}

export default async function APIUsage() {
  const data = await getAPIUsage();

  return (
    <div className="max-w-[800px] mx-auto px-4">
      <div className="flex items-center h-12">
        <Link href="/chat" className="flex space-x-2 items-center group ">
          <ArrowLeft size={20} className="text-weak group-hover:text-primary duration-200" />
          <span className="text-sm group-hover:text-primary duration-200"> Voltar </span>
        </Link>
      </div>

      <main>
        <div className="rounded-md bg-background-secundary p-4">
          <h2 className="text-xl font-bold mb-8"> Uso da API </h2>

          <div className="w-full flex justify-center items-center h-32 xl:h-44">
            <APIUsageChart data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
