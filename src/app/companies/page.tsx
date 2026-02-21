const companies = [
  {
    name: "A&D Technologies",
    focus: "Software Development, Product Engineering, Enterprise Solutions",
    description:
      "Designing and building secure, scalable digital solutions—from custom software and SaaS platforms to enterprise applications.",
  },
  {
    name: "A&D IT Services",
    focus: "Managed IT, Support, Infrastructure Services",
    description:
      "Providing reliable, end-to-end IT management so organizations can focus on what they do best, knowing their systems are stable and secure.",
  },
  {
    name: "A&D Cloud & DevOps",
    focus: "Cloud Architecture, DevOps Automation, CI/CD",
    description:
      "Modernizing technology foundations through cloud-native architectures, automated pipelines, and robust DevOps practices.",
  },
  {
    name: "A&D Infra",
    focus: "Construction, Infrastructure, Real Estate Projects",
    description:
      "Leading high-quality construction and infrastructure projects that prioritize safety, sustainability, and community impact.",
  },
  {
    name: "A&D Digital",
    focus: "Digital Marketing, Branding, Experience Design",
    description:
      "Partnering with brands to create meaningful online presence and measurable growth through data-driven, human-centric strategies.",
  },
  {
    name: "A&D Finance & Advisory",
    focus: "Financial Strategy, Investment, Risk & Performance Advisory",
    description:
      "Guiding businesses through financial decision-making with clarity, responsibility, and a focus on sustainable futures.",
  },
  {
    name: "A&D Consulting",
    focus: "Business Strategy, Transformation, Operations Consulting",
    description:
      "Working with organizations to rethink strategies, streamline operations, and embrace digital transformation.",
  },
  {
    name: "A&D Ventures",
    focus: "Innovation, Startups, Strategic Investments",
    description:
      "Investing in and supporting emerging ideas, entrepreneurs, and technologies aligned with our values.",
  },
  {
    name: "Mechastra",
    focus: "Robot Challenges, Hackathons, Innovation Events",
    description:
      "Runs robot challenges and hackathons that bring together engineers, students, and innovators to build, compete, and solve real-world problems with robotics and automation.",
  },
];

import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export default function CompaniesPage() {
  return (
    <div className="space-y-8 pt-[5px]">
      <AnimateIn variant="fade-in-up" className="space-y-6">
        <header className="space-y-4">
          <p className="page-intro-eyebrow">Our companies</p>
          <h1 className="page-title">The A&D Groups portfolio</h1>
          <p className="page-subtitle">
            A&D Groups oversees a portfolio of specialized companies, each
            with deep domain expertise and a shared commitment to human-centered
            values. Together, they form an integrated ecosystem capable of
            delivering end-to-end solutions across industries and geographies.
          </p>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
              alt="A&D Groups portfolio – technology and innovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </header>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest">Portfolio at a glance</h2>
        <p className="text-sm text-[#a1a1aa]">
          Our companies operate with autonomy in their markets while sharing A&D Groups&apos; governance, values, and strategic direction. This structure allows each subsidiary to stay close to its clients and innovate in its domain, while benefiting from the group&apos;s shared resources, risk management, and long-term vision.
        </p>
        <div className="grid gap-3 text-sm md:grid-cols-3">
          <div>
            <p className="font-bold text-[#fafafa]">Technology & digital</p>
            <p className="text-[#a1a1aa]">A&D Technologies, A&D IT Services, A&D Cloud & DevOps, A&D Digital</p>
          </div>
          <div>
            <p className="font-bold text-[#fafafa]">Infrastructure</p>
            <p className="text-[#a1a1aa]">A&D Infra — construction, real estate, and infrastructure projects</p>
          </div>
          <div>
            <p className="font-bold text-[#fafafa]">Advisory, ventures & events</p>
            <p className="text-[#a1a1aa]">A&D Finance & Advisory, A&D Consulting, A&D Ventures, Mechastra — robot challenges and hackathons</p>
          </div>
        </div>
      </AnimateIn>

      <section className="grid gap-4 md:grid-cols-2">
        {companies.map((company, i) => (
          <AnimateIn key={company.name} variant="fade-in-up" delay={i * 60} className="section-card hover-lift space-y-3">
          <article>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">{company.name}</h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#a1a1aa]">{company.focus}</p>
              </div>
              <span className="tag-pill">Subsidiary</span>
            </div>
            <p className="text-sm text-[#a1a1aa]">{company.description}</p>
            <p className="text-xs text-[#a1a1aa]">
              Part of the A&D Groups ecosystem—aligned on governance, values, and long-term impact.
            </p>
          </article>
          </AnimateIn>
        ))}
      </section>

      <AnimateIn variant="fade-in-up" className="section-card space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-widest">Interested in a specific company?</h2>
        <p className="text-sm text-[#a1a1aa]">
          Each of our companies has deep expertise in its sector. For service inquiries, partnerships, or collaboration opportunities tied to a specific subsidiary, reach out through our Contact page and we&apos;ll connect you with the right team.
        </p>
        <a href="/contact" className="btn-primary">
          Get in touch
        </a>
      </AnimateIn>
    </div>
  );
}
