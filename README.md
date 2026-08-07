# PeruinJapan

PeruinJapan is a bilingual (Japanese and English) website that promotes Peruvian culture, products, tourism, and investment opportunities in Japan. It is built with Next.js Pages Router and uses Sanity for CMS-managed content.

## Requirements

- Node.js 24.x
- Corepack, included with supported Node.js installations

The repository uses pnpm 9.15.9 and a pnpm v9 lockfile. Enable the pinned package manager before installing dependencies:

```bash
corepack enable
corepack pnpm --version
corepack pnpm install --frozen-lockfile
```

Do not move the `pnpm.overrides` entries from `package.json`; they are required for the deployment installer to reproduce the lockfile.

## Scripts

```bash
corepack pnpm dev       # Development server at http://localhost:3000
corepack pnpm lint      # ESLint for JavaScript and TypeScript files
corepack pnpm test      # Jest test suite
corepack pnpm build     # Production build and sitemap generation
corepack pnpm start     # Serve a completed production build
```

## Project structure

- `src/pages/`: Pages Router routes, including English and Japanese content.
- `src/components/`: Shared layout and interface components.
- `src/lib/` and `lib/`: Content indexes, localization helpers, and Sanity utilities.
- `schemas/`: Sanity document schema definitions.
- `public/`: Static files, images, robots, and sitemap assets.
- `__tests__/`: Jest and Testing Library tests.
- `docs/tasks/`: Repeatable editorial workflows.

## Configuration

Local secrets and service configuration belong in `.env.local` and must not be committed. Sanity configuration is in `sanity.config.ts`; its shared client settings are in `lib/sanity.*`.
