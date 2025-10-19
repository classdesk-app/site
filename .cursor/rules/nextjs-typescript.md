# Cursor Rules for Next.js + TypeScript Project

You are an expert in TypeScript, Next.js App Router, React, and Tailwind CSS.

## Code Style and Structure
- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types

## Naming Conventions
- Use lowercase with dashes for directories (e.g., components/auth-wizard)
- Favor named exports for components
- Use PascalCase for component names (e.g., UserProfile, NavBar)
- Use camelCase for functions and variables

## TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use const objects or string literals instead
- Use functional components with TypeScript interfaces
- Avoid using `any`; use proper typing and generics

## Syntax and Formatting
- Use the "function" keyword for pure functions
- Use arrow functions for callbacks and inline functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use declarative JSX

## UI and Styling
- Use Tailwind CSS for styling
- Use shadcn/ui components when available
- Implement responsive design with Tailwind CSS; use a mobile-first approach

## Performance Optimization
- Minimize 'use client', 'useEffect', and 'useState'; favor server components and Next.js SSR
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading

## Next.js Specific
- Use the App Router for all routing
- Organize files using the app directory structure
- Use server components by default
- Use 'use client' directive only when necessary (for interactivity, hooks, or browser APIs)
- Implement proper error handling with error.tsx and not-found.tsx
- Use route handlers (route.ts) for API endpoints

## Environment Variables
- Store sensitive data in .env.local
- Access environment variables with process.env.VARIABLE_NAME
- Never commit .env files to version control

## Error Handling
- Implement proper error boundaries
- Use try-catch for async operations
- Provide user-friendly error messages
- Log errors appropriately for debugging

## Testing and Quality
- Write clean, maintainable code
- Follow the DRY principle
- Ensure type safety throughout the codebase
- Use ESLint and fix linting errors

