"use client";

type Props = {
  className?: string;
  /** Use "light" on dark backgrounds (e.g. hero), "dark" on light backgrounds */
  variant?: "light" | "dark";
};

/** Portal / gateway arch illustration – geometric, works in black or white stroke */
export function PortalIllustration({ className = "", variant = "light" }: Props) {
  const stroke = variant === "light" ? "white" : "#334155";
  const strokeOpacity = variant === "light" ? "0.9" : "0.85";

  return (
    <svg
      className={className}
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Arch / gateway */}
      <path
        d="M40 160 Q140 20 240 160"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M60 155 Q140 45 220 155"
        stroke={stroke}
        strokeOpacity={variant === "light" ? "0.5" : "0.4"}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
      />
      {/* Vertical frame lines */}
      <line x1="50" y1="160" x2="50" y2="140" stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth="2" />
      <line x1="230" y1="160" x2="230" y2="140" stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth="2" />
      {/* Ground / path */}
      <line x1="20" y1="165" x2="260" y2="165" stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth="2" />
      {/* Radial lines (portal “energy”) */}
      <line x1="140" y1="95" x2="100" y2="130" stroke={stroke} strokeOpacity={variant === "light" ? "0.4" : "0.35"} strokeWidth="1" />
      <line x1="140" y1="95" x2="180" y2="130" stroke={stroke} strokeOpacity={variant === "light" ? "0.4" : "0.35"} strokeWidth="1" />
      <line x1="140" y1="95" x2="140" y2="155" stroke={stroke} strokeOpacity={variant === "light" ? "0.4" : "0.35"} strokeWidth="1" />
    </svg>
  );
}
