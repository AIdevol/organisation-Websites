import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export default function PartnersPage() {
  return (
    <div className="space-y-8 pt-[5px]">
      <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <AnimateIn variant="fade-in-up" className="space-y-2">
          <p className="page-intro-eyebrow">Partners & investors</p>
          <h1 className="page-title">Growing together with purpose</h1>
          <p className="page-subtitle">
            We believe the strongest partnerships are built on trust, shared
            values, and long-term alignment. We welcome strategic collaborations
            and responsible investment that enhance our ability to create
            meaningful, sustainable impact.
          </p>
        </AnimateIn>
        <AnimateIn variant="fade-in" delay={120} className="relative h-44 w-72 shrink-0 overflow-hidden rounded-xl md:mt-2 md:h-52 md:w-80">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80"
            alt="Partnership and collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 288px, 320px"
          />
        </AnimateIn>
      </header>

      <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Partnership types</h2>
        <p className="text-sm text-[#a1a1aa]">
          We work with technology providers, channel partners, consulting firms, and industry associations. Whether you want to co-deliver solutions, refer clients, integrate products, or explore joint go-to-market initiatives, we look for alignment on values, quality, and long-term commitment.
        </p>
        <ul className="grid gap-2 text-sm text-[#a1a1aa] md:grid-cols-2">
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Technology & solution partners</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Channel & referral partners</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Consulting & advisory alliances</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Industry and ecosystem collaborations</li>
        </ul>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">How it works</h2>
        <ol className="space-y-3 text-sm text-[#a1a1aa]">
          <li className="flex gap-3">
            <span className="font-bold text-[#fafafa] shrink-0">1. Connect</span>
            <span>Reach out via the Contact page with a brief on your organization and what you’re looking for. We’ll schedule an introductory conversation.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#fafafa] shrink-0">2. Align</span>
            <span>We explore fit—strategic, cultural, and operational. We’re transparent about what we can offer and what we expect from partners.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#fafafa] shrink-0">3. Execute</span>
            <span>Where there’s mutual interest, we define scope, governance, and success metrics. We move forward with clear agreements and regular check-ins.</span>
          </li>
        </ol>
      </AnimateIn>

      <section className="grid gap-6 md:grid-cols-2">
        <AnimateIn variant="fade-in-up" className="section-card hover-lift space-y-3">
        <article>
          <h2 className="text-sm font-bold uppercase tracking-widest">
            Strategic partnerships
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            We work with technology providers, industry leaders, consulting
            firms, and ecosystem partners to co-create solutions and open new
            markets. Our approach is transparent, fair, and geared towards
            mutual growth.
          </p>
          <ul className="space-y-1.5 text-sm text-[#a1a1aa]">
            <li>Shared value creation with win–win outcomes.</li>
            <li>Clear governance around roles, responsibilities, expectations.</li>
            <li>Ethical collaboration rooted in compliance and respect.</li>
          </ul>
          <a
            href="/contact"
            className="btn-secondary"
          >
            Explore partnership
          </a>
        </article>
        </AnimateIn>

        <AnimateIn variant="fade-in-up" delay={80} className="section-card hover-lift space-y-3">
        <article>
          <h2 className="text-sm font-bold uppercase tracking-widest">For investors</h2>
          <p className="text-sm text-[#a1a1aa]">
            A&D Groups offers a diversified and resilient portfolio across
            high-potential sectors. We prioritize prudent growth, strong
            governance, and risk-aware decision-making, with a long-term outlook
            over short-term speculation.
          </p>
          <ul className="space-y-1.5 text-sm text-[#a1a1aa]">
            <li>Diversified sector exposure across technology and infrastructure.</li>
            <li>Strong focus on governance, compliance, and transparency.</li>
            <li>Human-centered leadership and culture.</li>
            <li>Sustainable, purpose-driven growth strategy.</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="btn-primary"
            >
              Request investor deck
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Schedule a conversation
            </a>
          </div>
        </article>
        </AnimateIn>
      </section>
    </div>
  );
}
