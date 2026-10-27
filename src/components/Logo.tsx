export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="INKLUEM"
    >
      <defs>
        <linearGradient id="logo-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8CC4F7" />
          <stop offset="1" stopColor="#5B9BEA" />
        </linearGradient>
        <linearGradient id="logo-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C4B8F6" />
          <stop offset="1" stopColor="#9482E6" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="12" r="6.5" fill="#9EE0EA" />
      <circle cx="32" cy="12" r="6.5" fill="#B9D8F6" />
      <path
        d="M3 44V33c0-6 4-10 10-10 6 0 10 4 11 10v11z"
        fill="url(#logo-a)"
      />
      <path
        d="M45 44V33c0-6-4-10-10-10-6 0-10 4-11 10v11z"
        fill="url(#logo-b)"
      />
      <path
        d="M18 44v-6a6 6 0 0 1 12 0v6z"
        fill="var(--background)"
      />
    </svg>
  );
}
