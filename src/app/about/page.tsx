import Image from "next/image";
import { PortalWindow } from "@/components/illustrations";
import { AnimateIn } from "@/components/AnimateIn";

export default function AboutPage() {
  return (
    <div className="space-y-10 pt-[5px]">
      <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <AnimateIn variant="fade-in-up" className="space-y-2">
          <p className="page-intro-eyebrow">About us</p>
          <h1 className="page-title">A&D Groups</h1>
          <p className="page-subtitle">
            A modern, values-driven holding company built to support, grow, and
            scale high-performing businesses across technology, IT services,
            DevOps & Cloud, construction, digital marketing, finance, and
            consulting.
          </p>
        </AnimateIn>
        <AnimateIn variant="fade-in" delay={120} className="relative h-48 w-64 shrink-0 overflow-hidden rounded-xl md:mt-2 md:h-56 md:w-72">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
            alt="Modern office – A&D Groups"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 256px, 288px"
          />
        </AnimateIn>
      </header>

      {/* By the numbers */}
      <section className="grid gap-4 md:grid-cols-4">
        <div className="section-card text-center">
          <p className="text-2xl font-bold text-[#fafafa] md:text-3xl">Mission-led</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">Purpose</p>
        </div>
        <div className="section-card text-center">
          <p className="text-2xl font-bold text-[#fafafa] md:text-3xl">10</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">Core values</p>
        </div>
        <div className="section-card text-center">
          <p className="text-2xl font-bold text-[#fafafa] md:text-3xl">Global</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">Ambition</p>
        </div>
        <div className="section-card text-center">
          <p className="text-2xl font-bold text-[#fafafa] md:text-3xl">People-first</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#a1a1aa]">Leadership</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
        <div className="section-card space-y-3">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
              alt="Our team and story"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <h2 className="text-sm font-bold uppercase tracking-widest">
            Our story: from vision to collective impact
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            A&D Groups was founded with a simple yet powerful idea: to build
            a group of companies that combine corporate excellence with deep
            human values. In an era where scale and speed often come at the cost
            of trust, we chose a different path.
          </p>
          <p className="text-sm text-[#a1a1aa]">
            We brought together teams of experts in technology, infrastructure,
            and advisory services who shared our belief in integrity,
            transparency, and respect. Over time, we expanded thoughtfully into
            new sectors—always asking one question:{" "}
            <span className="italic">&ldquo;Will this create lasting value for people?&rdquo;</span>
          </p>
          <p className="text-sm text-[#a1a1aa]">
            Today, A&D Groups supports a growing family of companies, each
            committed to delivering high-quality solutions while treating
            employees, customers, and partners with fairness and dignity.
          </p>
        </div>
        <aside className="section-card space-y-4">
          <h3 className="font-bold uppercase tracking-widest">Who we are</h3>
          <p className="text-sm text-[#a1a1aa]">
            As a parent organization, we provide strategic direction, strong
            governance, and shared capabilities—while allowing each company to
            maintain its own identity, expertise, and agility. What binds us
            together is a common belief: business should improve lives.
          </p>
          <p className="text-xs italic text-[#a1a1aa]">
            &ldquo;We believe business should create value for people, not just
            numbers.&rdquo;
          </p>
        </aside>
      </section>

      {/* Our journey */}
      <section className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Our journey</h2>
        <ul className="space-y-4 text-sm text-[#a1a1aa]">
          <li className="flex gap-4">
            <span className="font-bold text-[#fafafa] shrink-0">Foundation</span>
            <span>A&D Groups was established with a clear vision: build a group where corporate excellence and human values go hand in hand. We started in technology and advisory, with a small team united by shared principles.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-[#fafafa] shrink-0">Expansion</span>
            <span>We grew thoughtfully into IT services, cloud & DevOps, construction, digital marketing, and finance. Each step was guided by one question: will this create lasting value for people?</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-[#fafafa] shrink-0">Today</span>
            <span>We are a diversified group with nine specialized companies, one governance model, and one commitment: to operate with integrity, transparency, and respect in everything we do.</span>
          </li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="section-card space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-widest">Our mission</h2>
          <p className="text-sm text-[#a1a1aa]">
            To build and support responsible, high-impact businesses that use
            innovation, integrity, and collaboration to create long-term value
            for people, organizations, and society.
          </p>
        </div>
        <div className="section-card space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-widest">Our vision</h2>
          <p className="text-sm text-[#a1a1aa]">
            To be a trusted global group recognized for human-centered
            leadership, ethical growth, and meaningful contributions across
            technology, infrastructure, and advisory sectors.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Values that guide every decision
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Integrity – We do the right thing, consistently.",
            "Honesty – Clear, open communication with our teams and partners.",
            "Empathy – We listen, understand, and respond with care.",
            "Responsibility – We own our commitments and their impact.",
            "Transparency – We share information and decisions with clarity.",
            "Innovation – We seek better, smarter, more sustainable ways.",
            "Teamwork – We win together, across companies and disciplines.",
            "Respect – Every individual's voice, time, and well-being matter.",
            "Customer satisfaction – We measure success by trust and loyalty.",
            "Long-term relationships – We prioritize enduring partnerships.",
          ].map((value) => (
            <div key={value} className="section-card text-sm text-[#a1a1aa]">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          A message from our leadership
        </h2>
        <p className="text-sm text-[#a1a1aa]">
          At A&D Groups, we believe leadership is a responsibility, not a
          title. Our role is to create an environment where talented people can
          do their best work, where clients feel genuinely supported, and where
          partners see us as true collaborators—never just vendors.
        </p>
        <p className="text-sm text-[#a1a1aa]">
          We recognize that every decision we make affects real people:
          employees building careers, customers placing their trust in us,
          communities relying on our projects. That is why integrity, empathy,
          and accountability are non-negotiable for us.
        </p>
        <p className="text-sm text-[#a1a1aa]">
          As we grow into new sectors and markets, our commitment remains
          unchanged: we will pursue innovation, scale, and performance without
          ever losing sight of the human beings at the center of our work.
        </p>
        <p className="text-sm font-bold text-[#fafafa]">
          On behalf of A&D Groups, thank you for placing your trust in us.
          We look forward to building a better future, together.
        </p>
        <p className="text-xs text-[#a1a1aa]">— Leadership Team, A&D Groups</p>
      </section>

      {/* Our commitment */}
      <section className="section-card space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">Our commitment to you</h2>
        <p className="text-sm text-[#a1a1aa]">
          We commit to treating every employee, client, and partner with fairness and respect. We will communicate openly, deliver on our promises, and hold ourselves accountable when we fall short. We will invest in our people and our capabilities so we can serve you better over time. And we will never compromise our values for short-term gain.
        </p>
        <p className="text-xs italic text-[#a1a1aa]">
          &ldquo;We believe business should create value for people, not just numbers.&rdquo; That belief shapes how we lead, how we collaborate, and how we grow.
        </p>
      </section>
    </div>
  );
}
