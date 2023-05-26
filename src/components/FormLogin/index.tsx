"use client";

import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import { FormEvent, useEffect, useState } from "react";

export default function FormLogin() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (username.length === 0) {
      setTimeout(() => setError(""), 3000);

      return setError("Nome não deve ser vazio.");
    }

    if (username.length > 16) {
      setTimeout(() => setError(""), 3000);

      return setError("Nome não ter mais que 16 letras.");
    }

    setCookie(null, "username", username);
    router.push("/chat");
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col p-4 bg-background-secundary rounded-md">
      <label htmlFor="username">Seu nome</label>
      <input
        id="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        type="text"
        className={`mt-2 bg-transparent border rounded-md border-[#353535] duration-200 focus:border-purple-500 outline-none px-2 py-2 text-sm ${
          error && "border-red-500 focus:border-red-500"
        }`}
        placeholder="Homer"
        // required
      />
      <span className="text-xs mt-[1px] h-5 text-red-500"> {error} </span>

      <button className="bg-primary hover:bg-primary-darker duration-200 rounded-md px-2 py-2 mt-1 text-sm"> Entrar </button>
    </form>
  );
}
