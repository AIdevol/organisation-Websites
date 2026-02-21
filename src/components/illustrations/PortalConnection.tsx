"use client";

type Props = {
  className?: string;
  variant?: "light" | "dark";
};

/** Connected nodes / network – partnership & connection */
export function PortalConnection({ className = "", variant = "dark" }: Props) {
  const stroke = variant === "light" ? "white" : "#334155";
  const opacity = variant === "light" ? 0.9 : 0.8;

  return (
    <svg
      className={className}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Central node */}
      <circle cx="100" cy="60" r="12" stroke={stroke} strokeWidth="2" fill="none" opacity={opacity} />
      {/* Outer nodes */}
      <circle cx="40" cy="35" r="8" stroke={stroke} strokeWidth="2" fill="none" opacity={opacity} />
      <circle cx="160" cy="35" r="8" stroke={stroke} strokeWidth="2" fill="none" opacity={opacity} />
      <circle cx="40" cy="85" r="8" stroke={stroke} strokeWidth="2" fill="none" opacity={opacity} />
      <circle cx="160" cy="85" r="8" stroke={stroke} strokeWidth="2" fill="none" opacity={opacity} />
      <circle cx="100" cy="20" r="6" stroke={stroke} strokeWidth="1.5" fill="none" opacity={opacity * 0.8} />
      <circle cx="100" cy="100" r="6" stroke={stroke} strokeWidth="1.5" fill="none" opacity={opacity * 0.8} />
      {/* Connection lines */}
      <line x1="100" y1="60" x2="48" y2="41" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.7} />
      <line x1="100" y1="60" x2="152" y2="41" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.7} />
      <line x1="100" y1="60" x2="48" y2="79" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.7} />
      <line x1="100" y1="60" x2="152" y2="79" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.7} />
      <line x1="100" y1="60" x2="100" y2="26" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.7} />
      <line x1="100" y1="60" x2="100" y2="94" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.7} />
    </svg>
  );
}
