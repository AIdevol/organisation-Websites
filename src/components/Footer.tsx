import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/partners", label: "Partners" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0a]" role="contentinfo">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="inline-flex items-baseline gap-2 transition-opacity duration-200 hover:opacity-90"
            >
              <span className="font-serif text-xl font-semibold tracking-tight text-[#fafafa]">
                A&D
              </span>
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#71717a] sm:text-sm">
                Groups
              </span>
            </Link>
            <p className="max-w-[200px] font-serif text-sm italic text-[#52525b]">
              Building futures with integrity.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-1 text-sm md:justify-center md:gap-x-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#a1a1aa] transition-colors duration-200 hover:text-[#fafafa]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact & Legal */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/contact" className="btn-primary">
              Contact
            </Link>
            <Link
              href="/legal"
              className="text-[#71717a] transition-colors duration-200 hover:text-[#a1a1aa]"
            >
              Legal
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#27272a] pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <span className="text-xs text-[#52525b]">
            © {year} A&D Groups
          </span>
          <span className="text-xs text-[#3f3f46]">
            Technology, infrastructure, digital, finance & consulting.
          </span>
        </div>
      </div>
    </footer>
  );
}
