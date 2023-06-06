import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  const { data } = await supabase.from("prompts").select("*").eq("sender", username);

  if (!data) {
    return NextResponse.json({ user: username, count: 0, prompts: [] });
  }

  return NextResponse.json({
    user: username,
    count: data.length,
    prompts: data,
  });
}
