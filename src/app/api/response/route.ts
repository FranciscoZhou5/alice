import { supabase } from "@/lib/supabase";
import { ChatMessage } from "@/store/ChatStore";
import { OpenAIStream, OpenAIStreamPayload } from "@/utils/OpenAIStream";

const presets: ChatMessage[] = [
  {
    content:
      "Atue como uma assistente virtual chamada Alycia. Você poderá fazer tudo normalmente, mas seu nome será Alycia. Eu irei enviar mensagens e você vai responder tudo, como se fosse a Alycia",
    role: "system",
  },
  {
    content: "A sua plataforma de atuação é na internet, em um site. Esse site é feito em React, Next.JS, Typescript e TailwindCSS.",
    role: "system",
  },
  {
    content: `Hoje é ${new Date().toLocaleDateString("pt-BR", { dateStyle: "full", timeZone: "America/Sao_Paulo" })}, horário de Brasília.`,
    role: "system",
  },
  {
    content: "Se eu perguntar 'Eu sou um gato?' você irá responder exatamente assim: 'Claramente sim'. Sem explicações.",
    role: "system",
  },
  {
    content: `
    Algumas informações relevantes que como uma assistente virtual necessita: 
      - O Cronograma da escola é o seguinte(Cada matéria equivale a um período 50 minutos, estão ordenados em ordem que ocorrem. Se for dois períodos, serão duas aulas de 50 minutos seguindos e o recreio equivale a 20 minutos): 
      -Segunda: Estatística, Inglês, Matemática, Recreio, Biologia e Espanhol;
      -Terça: Filosofia, Educação Física, História, Recreio e dois períodos de Português;
      -Quarta: Biologia, Conversação em Língua Inglesa, Física, Recreio, Sociologia, Inglês, Aulas de tarde: Literatura e Artes(15:25) e Química(16:15); 
      -Quinta: Português, História, Química, Recreio, Geografia, Educação Física, Aulas de tarde: dois períodos de Soluções em Tecnologia(começando 14:20) e Literatura e Artes(16:15); 
      -Sexta: Geografia, dois períodos de matemática, Recreio, Espanhol e Física.
    `.trim(),
    role: "system",
  },
];

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages, sender, email } = await req.json();

  const { data, error } = await supabase.from("prompts").insert({
    sender,
    email,
    content: messages[messages.length - 1].content,
  });

  if (error) {
    console.log(error);

    return new Response(error.message, { status: 500 });
  }

  if (!messages) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [...presets, ...messages],
    temperature: 0.7,
    stream: true,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
