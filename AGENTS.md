# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Digital Property Insights is a single Next.js 14 application (not a monorepo) — an AI-powered Australian real estate platform with two features: **ValuVista** (property valuation) and **RenoScope** (renovation ROI, marketing page only). It uses Google Genkit with Gemini for AI, Firebase for hosting, and Tailwind CSS + shadcn/ui for styling.

### Running the application

- **Dev server**: `npm run dev` (port 9002)
- **Lint**: `npm run lint` (uses `next lint` with ESLint 8 + `eslint-config-next@14.2.4`)
- **Type check**: `npm run typecheck` (runs `tsc --noEmit`)
- **Build**: `npm run build` — note: pre-existing unescaped-entity lint errors in several pages will cause build to fail. The dev server is unaffected.

See `README.md` for the full list of available scripts.

### Key caveats

- The `package.json` dependency versions were corrected to match the `package-lock.json` (genkit `^1.20.0`, next `14.2.4`). The original `package.json` referenced non-existent versions (`1.1.0` for genkit packages, `14.2.35` for next).
- `npm install --legacy-peer-deps` is required because `@genkit-ai/next` declares a peer dependency on `next@^15.0.0` while this project uses Next.js 14.
- ESLint must be v8 (not v9) for compatibility with Next.js 14's `next lint` command.
- `eslint-config-next` must match the Next.js version (use `14.2.4`).
- `nodemailer` and `@types/nodemailer` are required but were missing from the original `package.json`.
- The ValuVista AI feature requires a valid `GEMINI_API_KEY` (aliased as `GENKIT_API_KEY` in `.env.local`). Without it, form submissions will error — this is expected.
- `.env.local` must be created from `.env.example` before running.
- No database or Docker is needed — the app is stateless.
- No test framework is installed (Jest is referenced in legacy scripts but not in dependencies).
