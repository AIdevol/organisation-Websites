import Image from "next/image";
import { PortalConnection } from "@/components/illustrations";
import { AnimateIn } from "@/components/AnimateIn";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <AnimateIn variant="fade-in-up" className="space-y-2">
          <p className="page-intro-eyebrow">Contact</p>
          <h1 className="page-title">Let&apos;s start a conversation</h1>
          <p className="page-subtitle">
            Whether you are exploring a strategic partnership, seeking services
            from one of our companies, or interested in investing, we would be
            honored to connect.
          </p>
        </AnimateIn>
        <AnimateIn variant="fade-in" delay={120} className="relative h-40 w-56 shrink-0 overflow-hidden rounded-xl md:mt-2 md:h-48 md:w-64">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
            alt="Get in touch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 224px, 256px"
          />
        </AnimateIn>
      </header>

      <section className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
        <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-4">
        <form>
          <h2 className="text-sm font-bold uppercase tracking-widest">
            Business & partnership inquiries
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            Share a brief overview of your requirements, timelines, and
            objectives. Our team will connect you with the right experts within
            A&D Groups.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-[#a1a1aa]">Name</label>
              <input
                className="w-full rounded-lg border border-[#27272a] bg-[#18181b] px-3 py-2 text-sm text-[#fafafa] outline-none transition-colors placeholder:text-[#52525b] focus:border-[#71717a] focus:ring-2 focus:ring-[#71717a]/30"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-[#a1a1aa]">Company</label>
              <input
                className="w-full rounded-lg border border-[#27272a] bg-[#18181b] px-3 py-2 text-sm text-[#fafafa] outline-none transition-colors placeholder:text-[#52525b] focus:border-[#71717a] focus:ring-2 focus:ring-[#71717a]/30"
                placeholder="Organization name"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-[#a1a1aa]">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-[#27272a] bg-[#18181b] px-3 py-2 text-sm text-[#fafafa] outline-none transition-colors placeholder:text-[#52525b] focus:border-[#71717a] focus:ring-2 focus:ring-[#71717a]/30"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-[#a1a1aa]">Area of interest</label>
            <select className="w-full rounded-lg border border-[#27272a] bg-[#18181b] px-3 py-2 text-sm text-[#fafafa] outline-none transition-colors placeholder:text-[#52525b] focus:border-[#71717a] focus:ring-2 focus:ring-[#71717a]/30">
              <option>Technology / Software</option>
              <option>IT Services / Cloud / DevOps</option>
              <option>Construction / Infrastructure</option>
              <option>Digital Marketing</option>
              <option>Finance & Advisory</option>
              <option>Consulting</option>
              <option>Investment / Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-widest text-[#a1a1aa]">Message / project overview</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-[#27272a] bg-[#18181b] px-3 py-2 text-sm text-[#fafafa] outline-none transition-colors placeholder:text-[#52525b] focus:border-[#71717a] focus:ring-2 focus:ring-[#71717a]/30"
              placeholder="Tell us about your goals, context, and timelines."
            />
          </div>
          <button
            type="button"
            className="btn-primary"
          >
            Submit inquiry
          </button>
        </form>
        </AnimateIn>

        <AnimateIn variant="fade-in-up" delay={120} className="section-card space-y-4">
        <aside>
          <div className="flex justify-center">
            <PortalConnection className="h-16 w-28" variant="dark" />
          </div>
          <h2 className="text-sm font-bold uppercase tracking-widest">
            Support & general questions
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            If you are an existing client, partner, or employee and need
            support, please include your reference details or company contact
            so we can respond quickly and accurately.
          </p>
          <p className="text-xs italic text-[#a1a1aa]">
            We read every message carefully and aim to respond within a
            reasonable timeframe—because your trust and time truly matter to us.
          </p>
        </aside>
        </AnimateIn>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest">Office locations</h2>
          <p className="text-sm text-[#a1a1aa]">
            A&D Groups and its companies operate across multiple regions. For general inquiries, use the form above—we’ll route your message to the right team. For location-specific visits or meetings, mention your preference in your message and we’ll coordinate accordingly.
          </p>
        </div>
        </AnimateIn>
        <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-4">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest">Response commitment</h2>
          <p className="text-sm text-[#a1a1aa]">
            We aim to acknowledge all inquiries within one business day and to provide a substantive response or next step within three to five business days, depending on the complexity of your request. Urgent matters can be noted in the message field.
          </p>
        </div>
        </AnimateIn>
      </section>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Quick links by interest</h2>
        <ul className="grid gap-2 text-sm md:grid-cols-2">
          <li><a href="/companies" className="font-medium text-[#fafafa] underline-offset-4 hover:underline">Our companies</a> — Explore our portfolio of subsidiaries</li>
          <li><a href="/services" className="font-medium text-[#fafafa] underline-offset-4 hover:underline">Services</a> — What we offer across the group</li>
          <li><a href="/projects" className="font-medium text-[#fafafa] underline-offset-4 hover:underline">Projects</a> — Selected work and impact</li>
          <li><a href="/partners" className="font-medium text-[#fafafa] underline-offset-4 hover:underline">Partners & investors</a> — Partnership and investment inquiries</li>
          <li><a href="/careers" className="font-medium text-[#fafafa] underline-offset-4 hover:underline">Careers</a> — Join our team</li>
          <li><a href="/legal" className="font-medium text-[#fafafa] underline-offset-4 hover:underline">Legal</a> — Privacy and terms</li>
        </ul>
      </AnimateIn>
    </div>
  );
}
