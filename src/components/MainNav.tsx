"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/partners", label: "Partners" },
  { href: "/legal", label: "Legal" },
];

export function MainNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#27272a] bg-[#0a0a0a]/95 backdrop-blur-xl">
        <div className="flex w-full items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
          <a href="/" className="flex shrink-0 items-baseline gap-2 transition-opacity duration-200 hover:opacity-90">
            <span className="font-serif text-xl font-semibold tracking-tight text-[#fafafa]">A&D</span>
            <span className="hidden font-serif text-xs uppercase tracking-[0.2em] text-[#71717a] sm:inline md:text-sm">Groups</span>
          </a>

          <nav className="hidden shrink-0 gap-6 text-sm text-[#a1a1aa] md:flex lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors duration-200 hover:text-[#fafafa] ${isActive(link.href) ? "font-medium text-[#fafafa]" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 md:block">
            <a href="/contact" className="btn-primary">Contact</a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 text-[#a1a1aa] md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className={`block h-px w-4 bg-current transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-px w-4 bg-current transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-[#0a0a0a]/80 md:hidden" onClick={() => setOpen(false)} />
          <aside className="fixed right-0 top-0 z-50 h-full w-64 border-l border-[#27272a] bg-[#18181b] p-5 md:hidden">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#71717a]">Menu</span>
              <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="flex h-8 w-8 items-center justify-center text-[#a1a1aa] hover:text-[#fafafa]">×</button>
            </div>
            <nav className="flex flex-col gap-0">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-[#27272a] py-3 text-sm transition-colors ${isActive(link.href) ? "font-medium text-[#fafafa]" : "text-[#a1a1aa] hover:text-[#fafafa]"}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">Contact</a>
          </aside>
        </>
      )}
    </>
  );
}
