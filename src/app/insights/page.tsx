import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

const insightImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
];

export default function InsightsPage() {
  return (
    <div className="space-y-8 pt-[5px]">
      <AnimateIn variant="fade-in-up" className="space-y-6">
        <header className="space-y-4">
          <p className="page-intro-eyebrow">Blog & insights</p>
          <h1 className="page-title">Perspectives from A&D Groups</h1>
          <p className="page-subtitle">
            Our Insights space shares perspectives from across our group
            companies—covering technology trends, infrastructure best practices,
            digital strategies, financial insights, and leadership lessons.
          </p>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80"
              alt="Insights and thought leadership"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </header>
      </AnimateIn>

      <AnimateIn variant="fade-in-up" delay={80} className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Categories</h2>
        <p className="text-sm text-[#a1a1aa]">
          Our insights span technology, infrastructure, digital strategy, finance, leadership, and culture. We share lessons from the field, thought leadership, and practical guidance for leaders and teams.
        </p>
        <ul className="flex flex-wrap gap-2">
          {["Technology", "Infrastructure", "Digital strategy", "Finance & governance", "Leadership", "Culture & values"].map((cat) => (
            <li key={cat}>
              <span className="tag-pill">{cat}</span>
            </li>
          ))}
        </ul>
      </AnimateIn>

      <section>
        <AnimateIn variant="fade-in-up" delay={120} className="mb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest">Featured & latest</h2>
        </AnimateIn>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimateIn variant="fade-in-up" delay={160} className="section-card hover-lift space-y-2">
          <article>
            <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-lg">
              <Image src={insightImages[0]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span className="tag-pill">Technology</span>
            <h3 className="text-base font-bold text-[#fafafa]">Building secure, scalable platforms</h3>
            <p className="text-sm text-[#a1a1aa]">How we approach architecture and security in enterprise software—principles that guide A&D Technologies.</p>
            <p className="text-xs text-[#a1a1aa]">Read more →</p>
          </article>
          </AnimateIn>
          <AnimateIn variant="fade-in-up" delay={200} className="section-card hover-lift space-y-2">
          <article>
            <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-lg">
              <Image src={insightImages[1]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span className="tag-pill">Leadership</span>
            <h3 className="text-base font-bold text-[#fafafa]">Values-led growth in practice</h3>
            <p className="text-sm text-[#a1a1aa]">Why integrity and long-term thinking aren’t trade-offs—they’re the foundation of sustainable success.</p>
            <p className="text-xs text-[#a1a1aa]">Read more →</p>
          </article>
          </AnimateIn>
          <AnimateIn variant="fade-in-up" delay={240} className="section-card hover-lift space-y-2">
          <article>
            <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-lg">
              <Image src={insightImages[2]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span className="tag-pill">Infrastructure</span>
            <h3 className="text-base font-bold text-[#fafafa]">Responsible construction and community impact</h3>
            <p className="text-sm text-[#a1a1aa]">Safety, quality, and community at the heart of infrastructure projects—lessons from A&D Infra.</p>
            <p className="text-xs text-[#a1a1aa]">Read more →</p>
          </article>
          </AnimateIn>
          <AnimateIn variant="fade-in-up" delay={280} className="section-card hover-lift space-y-2">
          <article>
            <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-lg">
              <Image src={insightImages[3]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span className="tag-pill">Digital</span>
            <h3 className="text-base font-bold text-[#fafafa]">Data-driven marketing without losing the human touch</h3>
            <p className="text-sm text-[#a1a1aa]">How A&D Digital balances analytics with brand and customer experience.</p>
            <p className="text-xs text-[#a1a1aa]">Read more →</p>
          </article>
          </AnimateIn>
          <AnimateIn variant="fade-in-up" delay={320} className="section-card hover-lift space-y-2">
          <article>
            <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-lg">
              <Image src={insightImages[4]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span className="tag-pill">Finance</span>
            <h3 className="text-base font-bold text-[#fafafa]">Governance and risk in family businesses</h3>
            <p className="text-sm text-[#a1a1aa]">Practical steps for professionalizing finance and risk while preserving culture.</p>
            <p className="text-xs text-[#a1a1aa]">Read more →</p>
          </article>
          </AnimateIn>
          <AnimateIn variant="fade-in-up" delay={360} className="section-card hover-lift space-y-2">
          <article>
            <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-lg">
              <Image src={insightImages[5]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <span className="tag-pill">Consulting</span>
            <h3 className="text-base font-bold text-[#fafafa]">When to bring in external transformation partners</h3>
            <p className="text-sm text-[#a1a1aa]">Signals that it’s time for strategic support—and how to get the most from it.</p>
            <p className="text-xs text-[#a1a1aa]">Read more →</p>
          </article>
          </AnimateIn>
        </div>
      </section>

      <AnimateIn variant="fade-in-up" className="section-card space-y-4">
        <p className="text-sm text-[#a1a1aa]">
          We use this platform to contribute thoughtfully to our industries and
          to help leaders, teams, and organizations make better, more informed
          decisions. Every article reflects our belief that knowledge should be
          practical, transparent, and grounded in real human experience.
        </p>
        <a
          href="/contact"
          className="btn-primary"
        >
          Get in touch with our team
        </a>
      </AnimateIn>
    </div>
  );
}
