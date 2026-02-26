# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js app (Pages Router) with Sanity CMS integration.

- `src/pages/`: route pages and content landing pages (including nested sections like `investing-in-peru/2025` and `2026`).
- `src/components/`: reusable UI components (`Banner`, `Header`, `Layout`, etc.).
- `src/lib/` and top-level `lib/`: shared helpers, Sanity clients/queries, and content indexes.
- `schemas/`: Sanity schema definitions (`documents/`, `schemaTypes.ts`).
- `public/`: static assets, images, icons, sitemap/robots files.
- `__tests__/`: Jest + Testing Library component tests.

## Build, Test, and Development Commands
Use `pnpm` (the repo recently standardized on it and includes `pnpm-lock.yaml`).

- `pnpm dev`: start local development server on `http://localhost:3000`.
- `pnpm build`: production build and generate sitemap (`next build && next-sitemap`).
- `pnpm start`: run the production server after build.
- `pnpm lint`: run Next.js ESLint checks.
- `pnpm test`: run Jest tests once.
- `pnpm test:watch`: run tests in watch mode during UI work.

## Coding Style & Naming Conventions
- TypeScript is enabled with `strict: true`; prefer `.ts/.tsx` for new code.
- Use 2-space indentation and semicolons to match the existing codebase.
- Import aliases are configured: use `@/` for `src` imports (example: `import Banner from '@/components/Banner';`).
- Follow ESLint rules in `.eslintrc.json`; `simple-import-sort` warnings should be fixed before PRs.
- Page files use descriptive kebab-case names for URLs (for example `peru-investment-seminar-tokyo-2025.tsx`).

## Testing Guidelines
- Framework: Jest (`next/jest`) with `jest-environment-jsdom` and Testing Library.
- Place tests in `__tests__/` and name them `*.test.tsx` for React components.
- Focus on render behavior, accessibility text, and critical page/component regressions.
- Run `pnpm test` and `pnpm lint` before opening a PR.

## Commit & Pull Request Guidelines
- Follow Conventional Commits, consistent with history: `feat:`, `fix:`, `chore:`.
- Keep commits scoped and descriptive (example: `fix: remove src2 prop from Banner in legacy pages`).
- PRs should include: summary, affected routes/components, test/lint status, and screenshots for UI/content page changes.

## Security & Configuration Tips
- Keep secrets in `.env.local` only; never commit credentials.
- Sanity and analytics config lives in `sanity.config.ts` and `lib/sanity.*`; review changes there carefully.
