import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

const bentoCards = [
  {
    href: "/about",
    title: "About",
    description: "Who we are and what we stand for",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    size: "large",
  },
  {
    href: "/companies",
    title: "Companies",
    description: "Our portfolio of businesses",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    size: "default",
  },
  {
    href: "/services",
    title: "Services",
    description: "What we offer across the group",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    size: "default",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Work and impact",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    size: "large",
  },
  {
    href: "/careers",
    title: "Careers",
    description: "Join our team",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    size: "default",
  },
  {
    href: "/insights",
    title: "Insights",
    description: "Perspectives and thought leadership",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    size: "default",
  },
  {
    href: "/partners",
    title: "Partners",
    description: "Strategic collaborations",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
    size: "default",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Start a conversation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    size: "wide",
  },
];

function BentoCard({
  href,
  title,
  description,
  image,
  size,
}: {
  href: string;
  title: string;
  description: string;
  image: string;
  size: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[200px] flex-col justify-end overflow-hidden border border-[#27272a] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#3f3f46] hover:shadow-glow-card md:min-h-[260px]"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes={size === "large" || size === "wide" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
      />
      <div className="bento-overlay" />
      <div className="relative p-5 md:p-6">
        <h2 className="font-serif text-xl font-normal text-[#fafafa] transition-transform duration-300 group-hover:translate-y-0 md:text-2xl">{title}</h2>
        <p className="mt-1 text-sm text-[#a1a1aa] transition-colors duration-300 group-hover:text-[#d4d4d8]">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#71717a] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#fafafa]">
          Enter
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Full-viewport hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,#27272a,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,#18181b/50,transparent)]" />

        <AnimateIn inView={false} variant="fade-in-up" className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#71717a]">
            Human-centered corporate group
          </p>
        </AnimateIn>
        <AnimateIn inView={false} variant="fade-in-up" delay={80} className="relative">
          <h1 className="mt-6 font-serif text-5xl font-normal tracking-tight text-[#fafafa] md:text-7xl lg:text-8xl">
            A&D Groups
          </h1>
        </AnimateIn>
        <div className="relative mt-4 h-px w-12 bg-[#3f3f46]" />
        <AnimateIn inView={false} variant="fade-in-up" delay={120} className="relative">
          <p className="mt-6 max-w-md font-serif text-lg italic text-[#a1a1aa] md:text-xl">
            Building futures with integrity.
          </p>
        </AnimateIn>
        <AnimateIn inView={false} variant="fade-in-up" delay={160} className="relative">
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#71717a]">
            A diversified holding company in technology, infrastructure, finance, digital, and consulting.
          </p>
        </AnimateIn>
        <AnimateIn inView={false} variant="fade-in-up" delay={200} className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/companies" className="btn-primary hover-lift">
            Our companies
          </Link>
          <Link href="/contact" className="btn-secondary hover-lift">
            Contact
          </Link>
        </AnimateIn>
      </section>

      {/* Bento hub */}
      <section className="px-0 md:px-0">
        <AnimateIn className="mb-6 flex items-center gap-3 px-4 md:px-6">
          <span className="h-px w-8 bg-[#3f3f46]" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#71717a]">
            Explore
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 gap-px bg-[#27272a] sm:grid-cols-2 lg:grid-cols-4">
          {bentoCards.map((card, i) => (
            <AnimateIn
              key={card.href}
              variant="fade-in-up"
              delay={i * 40}
              className={
                card.size === "large"
                  ? "bg-[#0a0a0a] sm:col-span-2"
                  : card.size === "wide"
                    ? "bg-[#0a0a0a] lg:col-span-4"
                    : "bg-[#0a0a0a]"
              }
            >
              <BentoCard {...card} />
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Statement strip */}
      <section className="mt-20 border-y border-[#27272a] py-12 md:py-16">
        <AnimateIn className="text-center">
          <p className="font-serif text-lg italic text-[#71717a] md:text-xl">
            &ldquo;We believe business should create value for people, not just numbers.&rdquo;
          </p>
        </AnimateIn>
      </section>
    </div>
  );
}
