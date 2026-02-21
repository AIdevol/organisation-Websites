const sampleProjects = [
  {
    name: "Enterprise Cloud Modernization",
    sector: "Technology / IT Services",
    companies: "A&D Technologies, A&D Cloud & DevOps",
    challenge:
      "A fast-growing enterprise needed to move from legacy on‑prem systems to a secure, scalable cloud environment without disrupting operations.",
    solution:
      "We designed a phased cloud migration strategy, implemented CI/CD pipelines, and introduced modern observability and security practices.",
    impact:
      "Improved system reliability, reduced deployment times, and created a foundation for faster product innovation.",
  },
  {
    name: "Flagship Commercial Development",
    sector: "Infrastructure / Construction",
    companies: "A&D Infra",
    challenge:
      "A regional business hub required a safe, sustainable commercial space to host multiple tenants with varying requirements.",
    solution:
      "A&D Infra delivered a turnkey construction project with a focus on safety, quality, and efficient space utilization.",
    impact:
      "On-time delivery, strong tenant satisfaction, and improved local economic activity around the development.",
  },
  {
    name: "Digital Transformation & Brand Launch",
    sector: "Digital Marketing / Consulting",
    companies: "A&D Digital, A&D Consulting",
    challenge:
      "A mid-size B2B company needed a new brand identity, website, and go-to-market strategy to enter new segments.",
    solution:
      "We delivered end-to-end brand strategy, visual identity, web platform, and integrated campaign planning with clear KPIs.",
    impact:
      "Strong brand recognition, qualified lead growth, and a repeatable playbook for future campaigns.",
  },
  {
    name: "Finance & Risk Framework",
    sector: "Finance & Advisory",
    companies: "A&D Finance & Advisory",
    challenge:
      "A family-owned business sought to professionalize finance, risk, and succession planning without losing its culture.",
    solution:
      "We designed a tailored finance and governance framework, risk policies, and a phased succession plan with clear roles.",
    impact:
      "Improved decision-making, better lender relationships, and a clear path for the next generation of leadership.",
  },
];

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

const projectImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8 pt-[5px]">
      <AnimateIn variant="fade-in-up" className="space-y-6">
        <header className="space-y-4">
          <p className="page-intro-eyebrow">Our work</p>
          <h1 className="page-title">Projects & impact</h1>
          <p className="page-subtitle">
            Our portfolio spans diverse industries and geographies, but the thread
            that connects every project is our commitment to quality,
            transparency, and long-term value. We measure success not just by
            timelines and budgets, but by trust, outcomes, and the lives we
            impact.
          </p>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
              alt="Projects and impact"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </header>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest">Projects by sector</h2>
        <p className="text-sm text-[#a1a1aa]">
          Our work spans technology & IT, infrastructure & construction, digital marketing, finance & advisory, and consulting. Each project is delivered by the relevant A&D Groups company or a cross-group team when the scope requires it. Below is a selection of representative engagements—challenge, solution, and impact.
        </p>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" delay={120} className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Our approach to every project
        </h2>
        <ul className="grid gap-3 text-sm text-[#a1a1aa] md:grid-cols-2">
          <li>
            <span className="font-bold text-[#fafafa]">Listen deeply – </span>
            We begin by understanding your vision, constraints, and stakeholders.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Design thoughtfully – </span>
            We design solutions that balance innovation with practicality.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Execute transparently – </span>
            We communicate clearly, share progress, and make decisions together.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Deliver responsibly – </span>
            We focus on quality, security, compliance, and sustainability.
          </li>
          <li>
            <span className="font-bold text-[#fafafa]">Support long-term – </span>
            We stay with you beyond launch, continuously improving and evolving.
          </li>
        </ul>
      </AnimateIn>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleProjects.map((project, i) => (
          <AnimateIn key={project.name} variant="fade-in-up" delay={160 + i * 60} className="section-card hover-lift space-y-3">
          <article>
            <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={projectImages[i % projectImages.length]}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <header>
              <h2 className="text-lg font-bold text-[#fafafa]">{project.name}</h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#a1a1aa]">
                {project.sector} · {project.companies}
              </p>
            </header>
            <div className="space-y-2 text-sm text-[#a1a1aa]">
              <p>
                <span className="font-bold text-[#fafafa]">Challenge: </span>
                {project.challenge}
              </p>
              <p>
                <span className="font-bold text-[#fafafa]">Solution: </span>
                {project.solution}
              </p>
              <p>
                <span className="font-bold text-[#fafafa]">Impact: </span>
                {project.impact}
              </p>
            </div>
          </article>
          </AnimateIn>
        ))}
      </section>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">What clients say</h2>
        <blockquote className="border-l-4 border-[#71717a] pl-4 text-sm italic text-[#a1a1aa]">
          &ldquo;A&D Groups didn’t just deliver a project—they became a long-term partner. Transparency, quality, and a real commitment to our success. That’s rare.&rdquo;
        </blockquote>
        <p className="text-xs text-[#a1a1aa]">— Client, enterprise technology engagement</p>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <p className="text-sm text-[#a1a1aa]">
          Our goal is simple: to be the team you trust for your most important
          initiatives.
        </p>
        <a
          href="/contact"
          className="btn-primary"
        >
          Start a project with us
        </a>
      </AnimateIn>
    </div>
  );
}
