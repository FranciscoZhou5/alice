import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  const { data } = await supabase.from("prompts").select("*").eq("sender", username);

  if (!data) {
    return NextResponse.json({ user: username, count: 0, prompts: [] });
  }

  const dates = (data as Prompt[]).map(({ created_at }) => new Date(created_at));

  const countDatesByDay = dates.reduce((acc, date) => {
    const dateKey = date.toISOString().slice(0, 10);

    if (!acc[dateKey]) {
      acc[dateKey] = 0;
    }

    acc[dateKey]++;

    return acc;
  }, {} as { [x: string]: number });

  console.log(countDatesByDay);

  return NextResponse.json({
    user: username,
    count: data.length,
    prompts: data,
  });
}
