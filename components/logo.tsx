export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* Square Background */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="8"
        fill="url(#iconGradient)"
      />

      {/* Text C and D */}
      <text
        x="8"
        y="36"
        fontFamily="Poppins, sans-serif"
        fontSize="16"
        fontWeight="800"
        fill="white"
      >
        cdk
      </text>
    </svg>
  )
}


