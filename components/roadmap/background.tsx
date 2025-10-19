export const Background = () => {
  return (
    <>
      {/* Cosmic Nebula - PatternCraft (Dark Mode Only) */}
      <div
        className="absolute inset-0 z-0 dark:block hidden"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(234, 88, 12, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(249, 115, 22, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(251, 146, 60, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(245, 158, 11, 0.08), transparent 45%),
            #000000
          `,
        }}
      />

      {/* Light Mode Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden block"
        style={{
          background: `
            radial-gradient(ellipse at top, #fff7ed 0%, #ffffff 50%),
            linear-gradient(180deg, #ffffff 0%, #fff7ed 100%)
          `,
        }}
      />
    </>
  )
}
