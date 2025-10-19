export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Square Background - Light Mode (Amber/Orange) */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="8"
        fill="#F97316"
        className="dark:hidden"
      />
      
      {/* Square Background - Dark Mode (White) */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="8"
        fill="#FFFFFF"
        className="hidden dark:block"
      />

      {/* Text - Light Mode (White) */}
      <text
        x="8"
        y="36"
        fontFamily="Poppins, sans-serif"
        fontSize="16"
        fontWeight="800"
        fill="white"
        className="dark:hidden"
      >
        cdk
      </text>

      {/* Text - Dark Mode (Black) */}
      <text
        x="8"
        y="36"
        fontFamily="Poppins, sans-serif"
        fontSize="16"
        fontWeight="800"
        fill="#000000"
        className="hidden dark:block"
      >
        cdk
      </text>
    </svg>
  )
}


