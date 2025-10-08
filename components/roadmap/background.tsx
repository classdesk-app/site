export const Background = () => {
  return (
    <>
      {/* Cosmic Nebula - PatternCraft (Dark Mode Only) */}
      <div
        className="absolute inset-0 z-0 dark:block hidden"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }}
      />

      {/* Light Mode Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden block"
        style={{
          background: `
            radial-gradient(ellipse at top, #f0f9ff 0%, #ffffff 50%),
            linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)
          `,
        }}
      />
    </>
  )
}
