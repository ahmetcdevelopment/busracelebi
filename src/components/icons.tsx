import type { SVGProps } from "react";

const paths = {
  scale: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14M12 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M5 7 2 14a3 3 0 0 0 6 0L5 7ZM19 7l-3 7a3 3 0 0 0 6 0l-3-7Z" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="6" r="2.5" />
      <circle cx="16" cy="6" r="2.5" />
      <path d="M3.5 20v-5a4.5 4.5 0 0 1 9 0v5M11.5 20v-5a4.5 4.5 0 0 1 9 0v5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2v18M12 21V8l8 2v11M2 21h20" />
      <path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 9.5V20h14V9.5M10 20v-6h4v6" />
    </>
  ),
  scroll: (
    <>
      <path d="M7 3h11a2 2 0 0 1 2 2v1h-4M7 3a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h10a2 2 0 0 0 2-2V8" />
      <path d="M9 9h7M9 13h7M9 17h4" />
    </>
  ),
  gavel: (
    <>
      <path d="m14 4 6 6M11 7l6 6M12.5 5.5l-5 5 6 6 5-5M10 13l-7 7M3 21h9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </>
  ),
  menu: <path d="M3 7h18M3 12h18M3 17h12" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12 5 5 9-10" />,
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "size-5",
  strokeWidth = 1.4,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
