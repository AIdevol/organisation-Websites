import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export default function CareersPage() {
  return (
    <div className="space-y-8 pt-[5px]">
      <AnimateIn variant="fade-in-up" className="space-y-6">
        <header className="space-y-4">
          <p className="page-intro-eyebrow">Careers</p>
          <h1 className="page-title">Grow your future with A&D Groups</h1>
          <p className="page-subtitle">
            A&D Groups is more than a collection of companies—it&apos;s a community
            of people who believe in doing meaningful work with integrity and
            respect. We are always looking for individuals who are not only
            skilled, but also kind, curious, and committed to growing together.
          </p>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="Team at work – careers at A&D Groups"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </header>
      </AnimateIn>

      <section className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
        <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-3">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest">
            A place to grow, contribute, and belong
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            Our culture is built on empathy, transparency, and shared success.
            We value open communication, healthy work-life balance, and a
            genuine respect for every person&apos;s background, identity, and
            aspirations.
          </p>
          <ul className="grid gap-2 text-sm text-[#a1a1aa] md:grid-cols-2">
            <li>
              <span className="font-bold text-[#fafafa]">People-first – </span>
              We prioritize well-being, psychological safety, and fair opportunities.
            </li>
            <li>
              <span className="font-bold text-[#fafafa]">Continuous learning – </span>
              Training, mentorship, and real responsibility from day one.
            </li>
            <li>
              <span className="font-bold text-[#fafafa]">Collaborative teams – </span>
              Cross-functional work, open feedback, and shared wins.
            </li>
            <li>
              <span className="font-bold text-[#fafafa]">Ethical growth – </span>
              We refuse to compromise on integrity, no matter how high the stakes.
            </li>
          </ul>
        </div>
        </AnimateIn>
        <AnimateIn variant="fade-in-up" delay={120} className="section-card space-y-4">
        <aside>
          <h3 className="font-bold uppercase tracking-widest">Why join us?</h3>
          <ul className="space-y-2 text-sm text-[#a1a1aa]">
            <li>Diverse opportunities across multiple sectors and disciplines.</li>
            <li>Stable, long-term growth within a structured corporate group.</li>
            <li>Human-centered policies focused on fairness and flexibility.</li>
            <li>Impactful work that contributes to real businesses and lives.</li>
            <li>Inclusive environment where your ideas and identity are respected.</li>
          </ul>
          <p className="text-xs italic text-[#a1a1aa]">
            &ldquo;We believe business should create value for people, not just
            numbers—and that begins with how we treat our own teams.&rdquo;
          </p>
        </aside>
        </AnimateIn>
      </section>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Benefits & perks</h2>
        <p className="text-sm text-[#a1a1aa]">
          We invest in our people so they can do their best work and grow with us. Our benefits reflect our commitment to well-being, fairness, and long-term partnership.
        </p>
        <ul className="grid gap-2 text-sm text-[#a1a1aa] md:grid-cols-2">
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Competitive compensation and performance recognition</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Health, wellness, and mental health support</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Learning budgets and career development paths</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Flexible work arrangements where role allows</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Inclusive culture and diversity initiatives</li>
          <li className="flex gap-2"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#71717a]" /> Cross-group mobility and internal opportunities</li>
        </ul>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Sample open roles</h2>
        <h2 className="text-sm font-bold uppercase tracking-widest">Sample open roles</h2>
        <p className="text-sm text-[#a1a1aa]">
          We hire across our group companies in technology, infrastructure, digital, finance, and consulting. Roles are added regularly—below is a sample of the kinds of positions we fill.
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex flex-col gap-1 border-b border-[#27272a] pb-3">
            <span className="font-bold">Senior Software Engineer</span>
            <span className="text-[#a1a1aa]">A&D Technologies · Full-time · Remote / Hybrid</span>
          </li>
          <li className="flex flex-col gap-1 border-b border-[#27272a] pb-3">
            <span className="font-bold">Cloud & DevOps Consultant</span>
            <span className="text-[#a1a1aa]">A&D Cloud & DevOps · Full-time</span>
          </li>
          <li className="flex flex-col gap-1 border-b border-[#27272a] pb-3">
            <span className="font-bold">Project Manager – Construction</span>
            <span className="text-[#a1a1aa]">A&D Infra · Full-time</span>
          </li>
          <li className="flex flex-col gap-1 border-b border-[#27272a] pb-3">
            <span className="font-bold">Strategy & Transformation Consultant</span>
            <span className="text-[#a1a1aa]">A&D Consulting · Full-time</span>
          </li>
        </ul>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Application process</h2>
        <p className="text-sm text-[#a1a1aa]">
          We keep our process transparent and respectful of your time. Typically: application review → phone or video intro → skills/case discussion → team fit conversation → offer. We aim to move at a steady pace and to give clear feedback at each step.
        </p>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Open roles</h2>
        <p className="text-sm text-[#a1a1aa]">
          We&apos;re continuously hiring across technology, infrastructure, digital,
          finance, and consulting functions. If you don&apos;t see a role that fits
          yet, we still encourage you to reach out.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="btn-primary"
          >
            Browse open roles
          </a>
          <a
            href="/contact"
            className="btn-secondary"
          >
            Send your profile
          </a>
        </div>
      </AnimateIn>
    </div>
  );
}
