"use client";

import * as Popover from "@radix-ui/react-popover";
import { Gear } from "@phosphor-icons/react";

export default function AppHeader() {
  return (
    <header className="h-12 border-b border-gray flex justify-between items-center px-4 md:px-8 lg:px-16">
      <div></div>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="h-6 w-6 flex justify-center items-center">
              <Gear size={24} className="text-weak hover:text-normal duration-200" />
            </button>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content align="end" className="radix-side-top:animate-slide-up z-30 radix-side-bottom:animate-slide-down">
              <div className="bg-background-secundary"> Olá </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </header>
  );
}
