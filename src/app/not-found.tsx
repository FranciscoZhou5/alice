"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center space-y-4">
        <p>
          Página <span className="italic">{`"${pathname}"`}</span> não encontrada.
        </p>

        <div className="relative w-96 h-72">
          <Image src="/404.jpg" alt="Not found" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
