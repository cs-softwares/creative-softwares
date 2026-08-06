type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="26" cy="26" r="20" fill="currentColor" opacity="0.1" />
      <circle cx="26" cy="26" r="20" fill="white" opacity="0.32" />
      <circle cx="26" cy="26" r="19.45" stroke="currentColor" strokeWidth="1.25" opacity="0.34" />
      <circle cx="26" cy="26" r="15.8" stroke="white" strokeWidth="1" opacity="0.38" />
      <path
        d="M34 18.9C32.4 16.95 29.76 15.75 26.83 15.75C21.01 15.75 16.29 20.38 16.29 26.1C16.29 31.82 21.01 36.45 26.83 36.45C29.78 36.45 32.44 35.24 34.08 33.28"
        stroke="currentColor"
        strokeWidth="2.65"
        strokeLinecap="round"
        opacity="0.94"
      />
      <path
        d="M31.1 21.8C30 20.67 28.45 19.98 26.74 19.98C23.4 19.98 20.69 22.7 20.69 26.05C20.69 29.41 23.4 32.12 26.74 32.12C28.55 32.12 30.18 31.32 31.29 30.06"
        stroke="currentColor"
        strokeWidth="1.42"
        strokeLinecap="round"
        opacity="0.44"
      />
      <path
        d="M20.16 17.8H31.54"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.34"
      />
      <circle cx="35.22" cy="18.78" r="1.42" fill="currentColor" opacity="0.74" />
    </svg>
  );
}
