"use client";

import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { FormEvent, useEffect, useState } from "react";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ username: "", email: "" });

  const router = useRouter();

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (username.length === 0 || email.length === 0) {
      if (username.length === 0) {
        setTimeout(() => setError((oldState) => ({ ...oldState, username: "" })), 3000);

        setError((oldState) => ({ ...oldState, username: "Nome não deve ser vazio." }));
      }
      if (email.length === 0) {
        setTimeout(() => setError((oldState) => ({ ...oldState, email: "" })), 3000);

        setError((oldState) => ({ ...oldState, email: "Email não encontrado." }));
      }

      return;
    }

    if (username.length > 16) {
      setTimeout(() => setError((oldState) => ({ ...oldState, username: "" })), 3000);

      return setError((oldState) => ({ ...oldState, username: "Nome não ter mais que 16 letras." }));
    }
    
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))  {
      setTimeout(() => setError((oldState) => ({ ...oldState, email: "" })), 3000);
      
      setError((oldState) => ({ ...oldState, email: "Use um Email válido." }));
    }

    setCookie(null, "username", username, {
      maxAge: 10 * 30 * 24 * 60 * 60,
    });
    setCookie(null, "email", email, {
      maxAge: 10 * 30 * 24 * 60 * 60,
    });

    router.push("/chat");
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col p-4 bg-background-secundary rounded-md max-w-xs w-full">
      <div className="flex flex-col">
        <label htmlFor="username">Seu nome</label>
        <input
          id="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          className={`mt-1 bg-transparent border rounded-md border-[#353535] duration-200 focus:border-purple-500 outline-none px-2 py-2 text-sm ${
            error.username && "border-red-500 focus:border-red-500"
          }`}
          placeholder="Ex. Batman"
        />
        <span className="text-xs mt-[1px] h-5 text-red-500"> {error.username} </span>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Seu email</label>
        <input
          id="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="text"
          className={`mt-1 bg-transparent border rounded-md border-[#353535] duration-200 focus:border-purple-500 outline-none px-2 py-2 text-sm ${
            error.email && "border-red-500 focus:border-red-500"
          }`}
          placeholder="Ex. seuemail@email.com"
        />
        <span className="text-xs mt-[1px] h-5 text-red-500"> {error.email} </span>
      </div>

      <button className="bg-primary hover:bg-primary-darker duration-200 rounded-md px-2 py-2 mt-1 text-sm"> Entrar </button>
    </form>
  );
}
