import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { MainNav } from "@/components/MainNav";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "A&D Groups – Building futures with integrity",
  description:
    "A diversified, human-centered corporate group spanning technology, infrastructure, digital, finance, and consulting.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] font-sans text-[#fafafa] antialiased">
        <div className="flex min-h-screen flex-col">
          <MainNav />
          <main className="flex-1">
            <div className="w-full px-4 pb-12 pt-0 md:px-6 md:pb-16 md:pt-0">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
