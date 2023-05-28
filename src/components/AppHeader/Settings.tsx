"use client";

import { Gear } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";

export default function Settings() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="h-6 w-6 flex justify-center items-center">
          <Gear size={24} className="text-weak hover:text-normal duration-200" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="end"
          className="radix-side-top:animate-slide-up border border-gray rounded-md z-30 radix-side-bottom:animate-slide-down bg-background-secundary w-64 p-2 mt-1"
        >
          <div className=""> Olá </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
