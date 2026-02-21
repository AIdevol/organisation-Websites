"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fade-in-up" | "fade-in" | "fade-in-down" | "scale-in" | "slide-in-left";

type Props = {
  children: ReactNode;
  className?: string;
  /** Animation variant */
  variant?: Variant;
  /** Delay in ms before starting animation (e.g. for stagger) */
  delay?: number;
  /** Only animate when in view (default true). If false, animates on mount. */
  inView?: boolean;
  /** Root margin for Intersection Observer, e.g. "0px 0px -40px 0px" to trigger a bit early */
  rootMargin?: string;
  /** Tag to render (default div) */
  as?: "div" | "section" | "article" | "span";
};

export function AnimateIn({
  children,
  className = "",
  variant = "fade-in-up",
  delay = 0,
  inView = true,
  rootMargin = "0px 0px -30px 0px",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(!inView);

  useEffect(() => {
    if (!inView) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  const initialClass =
    variant === "scale-in"
      ? "opacity-0 scale-95"
      : variant === "slide-in-left"
        ? "opacity-0 -translate-x-6"
        : "opacity-0 translate-y-4";
  const variantClass =
    variant === "fade-in-up"
      ? "animate-fade-in-up"
      : variant === "fade-in-down"
        ? "animate-fade-in-down"
        : variant === "scale-in"
          ? "animate-scale-in"
          : variant === "slide-in-left"
            ? "animate-slide-in-left"
            : "animate-fade-in";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={visible ? `${variantClass} ${className}` : `${initialClass} ${className}`}
      style={delay > 0 && visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
