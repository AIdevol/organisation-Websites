"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { services } from "./data";

function ServicesContent() {
  return (
    <div className="space-y-8 pt-[5px]">
      <AnimateIn variant="fade-in-up" className="space-y-6">
        <header className="space-y-4">
          <p className="page-intro-eyebrow">What we do</p>
          <h1 className="page-title">Group-wide services</h1>
          <p className="page-subtitle">
            Through our group companies, A&D Groups delivers a broad spectrum
            of services designed to support organizations at every stage of their
            journey—from strategy and design to execution and long-term support.
            Our approach is collaborative, transparent, and always centered on
            real human needs.
          </p>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80"
              alt="Collaboration and services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </header>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">How we work</h2>
        <p className="text-sm text-[#a1a1aa]">
          Whether you need a single service or a combination across our group, we follow a consistent approach: we listen first, design with your context in mind, execute with transparency, and support you beyond delivery.
        </p>
        <ol className="grid gap-3 text-sm text-[#a1a1aa] md:grid-cols-2">
          <li className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fafafa] text-xs font-bold text-[#0a0a0a]">1</span>
            <span><strong className="text-[#fafafa]">Discover & align:</strong> We understand your goals, constraints, and success criteria before proposing any solution.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fafafa] text-xs font-bold text-[#0a0a0a]">2</span>
            <span><strong className="text-[#fafafa]">Design & plan:</strong> We design approaches that fit your context—no one-size-fits-all. Clear scope, timeline, and governance.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fafafa] text-xs font-bold text-[#0a0a0a]">3</span>
            <span><strong className="text-[#fafafa]">Execute & communicate:</strong> We deliver with regular updates, clear ownership, and no surprises. Quality and compliance are non-negotiable.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fafafa] text-xs font-bold text-[#0a0a0a]">4</span>
            <span><strong className="text-[#fafafa]">Support & evolve:</strong> We stay with you—maintenance, optimization, and continuous improvement so value compounds over time.</span>
          </li>
        </ol>
      </AnimateIn>

      <section className="grid gap-4 md:grid-cols-2">
        {services.map((service, i) => (
          <AnimateIn key={service.category} variant="fade-in-up" delay={100 + i * 50} className="section-card hover-lift space-y-3">
            <article>
              <h2 className="text-sm font-bold uppercase tracking-widest">
                {service.category}
              </h2>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-[#71717a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </AnimateIn>
        ))}
      </section>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Why work with us</h2>
        <ul className="grid gap-2 text-sm text-[#a1a1aa] md:grid-cols-2">
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /><span><strong className="text-[#fafafa]">Single relationship, multiple capabilities:</strong> Access technology, infrastructure, digital, finance, and consulting through one coordinated engagement.</span></li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /><span><strong className="text-[#fafafa]">Values-aligned delivery:</strong> We don't cut corners. Quality, transparency, and fairness are built into how we work.</span></li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /><span><strong className="text-[#fafafa]">Long-term partnership:</strong> We're invested in your success over years, not just project cycles.</span></li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /><span><strong className="text-[#fafafa]">Governance you can trust:</strong> Strong oversight, clear accountability, and ethical standards across all our companies.</span></li>
        </ul>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <p className="text-sm text-[#a1a1aa]">
          Every service we deliver is grounded in one simple promise: we will
          treat your business, your people, and your customers with the same
          care and respect as our own.
        </p>
        <a
          href="/contact"
          className="btn-primary"
        >
          Discuss your needs
        </a>
      </AnimateIn>
    </div>
  );
}

export default function ServicesPage() {
  return <ServicesContent />;
}
