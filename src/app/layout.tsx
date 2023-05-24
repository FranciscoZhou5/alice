import "../styles/globals.css";

import "tippy.js/dist/tippy.css";
import "highlight.js/styles/tokyo-night-dark.css";

import { Inter, JetBrains_Mono } from "next/font/google";
import AppHeader from "@/components/AppHeader";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--inter-font",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--jetbrains-mono-font",
});

export const metadata = {
  title: "Alycia",
  description: "IA-based chatbot",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
