"use client";

type Props = {
  className?: string;
  variant?: "light" | "dark";
};

/** Window / doorway frame – “view to the future” */
export function PortalWindow({ className = "", variant = "dark" }: Props) {
  const stroke = variant === "light" ? "white" : "#334155";
  const opacity = variant === "light" ? 0.9 : 0.85;

  return (
    <svg
      className={className}
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Outer frame */}
      <rect x="20" y="30" width="120" height="130" stroke={stroke} strokeWidth="2.5" fill="none" opacity={opacity} />
      {/* Inner “view” */}
      <rect x="40" y="55" width="80" height="90" stroke={stroke} strokeWidth="1.5" fill="none" opacity={opacity * 0.6} />
      {/* Cross / division */}
      <line x1="80" y1="55" x2="80" y2="145" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.6} />
      <line x1="40" y1="100" x2="120" y2="100" stroke={stroke} strokeWidth="1.5" opacity={opacity * 0.6} />
      {/* Arch at top */}
      <path d="M 40 55 L 40 75 Q 80 95 120 75 L 120 55" stroke={stroke} strokeWidth="1.5" fill="none" opacity={opacity * 0.7} />
    </svg>
  );
}
