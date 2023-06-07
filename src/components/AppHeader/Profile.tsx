"use client";

import { Gear, User } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { parseCookies } from "nookies";

export default function Profile() {
  const [open, setOpen] = useState(false);

  const { username, email } = parseCookies();

  const options = [
    {
      label: "Uso da API",
      url: "/chat/api-usage",
    },
    // {
    //   label: "Personalizar",
    //   url: "/chat/settings/customize",
    // },
  ];

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className="h-6 w-6 flex justify-center items-center">
          <User size={24} className="text-weak hover:text-primary duration-200" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="end"
          className="radix-side-top:animate-slide-up border border-gray rounded-md z-30 radix-side-bottom:animate-slide-down bg-background-secundary w-64 py-2 mt-1"
        >
          <Link href="/chat/settings/profile" className="px-2 mb-4 flex space-x-2 group hover:bg-background-tertiary py-2 duration-200">
            <div className="w-12 h-12 relative">
              <Image
                src="/user-profile.jpg"
                alt="Profile picture"
                fill
                className="object-cover rounded-full group-hover:opacity-60 duration-200"
              />
            </div>

            <div>
              <p className="group-hover:text-primary duration-200">{username}</p>
              <span className="text-xs group-hover:text-primary duration-200">{email}</span>
            </div>
          </Link>

          {options.map(({ label, url }) => (
            <Link href={url} key={Math.random()} onClick={() => setOpen(false)}>
              <div className="text-sm w-full group hover:bg-background-tertiary duration-200 px-2 py-1 flex justify-between">
                <span className="group-hover:text-primary duration-200">{label}</span>

                <span> BETA </span>
              </div>
            </Link>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
