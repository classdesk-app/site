export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-gray-200 dark:border-white/10 py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-white/60 text-sm">
            © 2025 Classdesk. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@classdesk.app"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              hello@classdesk.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
