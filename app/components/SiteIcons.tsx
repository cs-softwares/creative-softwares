import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </BaseIcon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </BaseIcon>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 18V6" />
      <path d="m7.5 10.5 4.5-4.5 4.5 4.5" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.35 1.77.68 2.61a2 2 0 0 1-.45 2.11L8.1 9.68a16 16 0 0 0 6.22 6.22l1.24-1.24a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.61.68A2 2 0 0 1 22 16.92Z" />
    </BaseIcon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </BaseIcon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M12 3a14.5 14.5 0 0 1 0 18" />
      <path d="M12 3a14.5 14.5 0 0 0 0 18" />
    </BaseIcon>
  );
}

export function MobileIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10 5.5h4" />
      <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 8a4 4 0 1 1 .5 8Z" />
    </BaseIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </BaseIcon>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4Z" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" />
      <path d="m5 15 .9 2.9L9 19l-3.1 1.1L5 23l-.9-2.9L1 19l3.1-1.1Z" />
    </BaseIcon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.8 9.2-1.9 5.7-5.7 1.9 1.9-5.7Z" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3c2.6 1.7 5.5 2.6 8.5 2.7v5.6c0 5.2-3.3 8.3-8.5 10.7C6.8 19.6 3.5 16.5 3.5 11.3V5.7C6.5 5.6 9.4 4.7 12 3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" />
    </BaseIcon>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-4" />
    </BaseIcon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2" />
      <path d="M12 19.3v2.2" />
      <path d="m4.9 4.9 1.6 1.6" />
      <path d="m17.5 17.5 1.6 1.6" />
      <path d="M2.5 12h2.2" />
      <path d="M19.3 12h2.2" />
      <path d="m4.9 19.1 1.6-1.6" />
      <path d="m17.5 6.5 1.6-1.6" />
    </BaseIcon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 14.2A7.8 7.8 0 1 1 9.8 4 6.2 6.2 0 0 0 20 14.2Z" />
    </BaseIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect x="4.8" y="4.8" width="14.4" height="14.4" rx="2.7" fill="currentColor" />
      <circle cx="8.2" cy="9" r="1.05" fill="#fffaf6" />
      <path fill="#fffaf6" d="M7.15 10.65h2.05v5.25h-2.05z" />
      <path
        fill="#fffaf6"
        d="M10.95 10.65h1.95v.74c.42-.56 1.04-.96 2.02-.96 1.57 0 2.48 1.06 2.48 2.86v2.61h-2.05v-2.34c0-.89-.31-1.48-1.14-1.48-.77 0-1.21.52-1.21 1.48v2.34h-2.05z"
      />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 4.7a7.3 7.3 0 0 0-2.32 14.22c.36.07.48-.14.48-.33v-1.2c-1.95.4-2.37-.83-2.37-.83-.16-.4-.43-.8-.73-1.06-.25-.14-.6-.48 0-.49.56 0 1 .52 1.13.73.64 1.08 1.66.77 2.07.6.06-.47.25-.79.45-.98-1.72-.2-3.52-.86-3.52-3.8 0-.84.3-1.52.8-2.06-.08-.2-.35-.97.08-2.02 0 0 .65-.21 2.12.78a7.2 7.2 0 0 1 3.86 0c1.47-.99 2.12-.78 2.12-.78.43 1.05.16 1.82.08 2.02.5.54.8 1.22.8 2.06 0 2.95-1.8 3.6-3.53 3.8.28.23.52.67.52 1.37v2.03c0 .19.13.4.48.33A7.3 7.3 0 0 0 12 4.7Z"
      />
    </svg>
  );
}

export function XSocialIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.1 6.4 9.8 11.2M16.5 6.4 7.5 17.6"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect x="5.1" y="5.1" width="13.8" height="13.8" rx="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="3.45" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="16.45" cy="7.65" r="0.95" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="7.1" fill="currentColor" />
      <path
        fill="#fffaf6"
        d="M12.95 17.9v-4.05h1.36l.23-1.58h-1.59v-1.03c0-.46.13-.77.79-.77h.85V9.08c-.41-.07-.82-.1-1.24-.09-1.24 0-2.08.74-2.08 2.14v1.14H9.95v1.58h1.32v4.05z"
      />
    </svg>
  );
}
