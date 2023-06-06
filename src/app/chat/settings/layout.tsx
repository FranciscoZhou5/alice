import ArrowLeft from "@/components/Icons/ArrowLeft";
import Link from "next/link";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[800px] mx-auto px-4">
      <div className="flex items-center h-10">
        <Link href="/chat" className="flex space-x-2 items-center group ">
          <ArrowLeft size={20} className="text-weak group-hover:text-primary duration-200" />
          <span className="text-sm group-hover:text-primary duration-200"> Voltar </span>
        </Link>
      </div>

      {children}
    </div>
  );
}
