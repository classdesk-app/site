export const Background = () => {
  return (
    <>
      {/* Cosmic Nebula - PatternCraft (Dark Mode) */}
      <div
        className="absolute inset-0 z-0 dark:block hidden"
        style={{
          background: `
            radial-gradient(ellipse 100% 20% at 50% 0%, rgba(123, 76, 232, 0.24), transparent 50%),
rgba(2, 6, 23, 0.63)
          `,
        }}
      />

      {/* Light Gradient Background (Light Mode) */}
      <div
        className="absolute inset-0 z-0 dark:hidden block"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          WebkitMaskImage: `
     repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </>
  )
}
