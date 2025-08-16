# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js 14 App Router routes (e.g., `app/(site)/schedule/page.tsx`), shared `layout.tsx`, and global styles.
- `components/`: Reusable React components (PascalCase files, colocated styles when needed).
- `content/`: Static/MDX content referenced by routes/components.
- `lib/`: Utilities, types, and helpers (group by domain; avoid deep nesting).
- `public/`: Static assets served from site root.
- `styles/`: Tailwind/global CSS; prefer utility classes in components.

## Build, Test, and Development Commands
- `npm ci`: Install exact dependencies from `package-lock.json`.
- `npm run dev`: Start local dev server at `http://localhost:3000` with HMR.
- `npm run build`: Create production build in `.next/`.
- `npm start`: Run the built app in production mode.
- `npm run lint`: Lint with Next.js/ESLint rules; fix issues before PRs.

## Coding Style & Naming Conventions
- **Language**: TypeScript; 2‑space indentation; single quotes; semicolons per ESLint/Next defaults.
- **Components**: PascalCase files (e.g., `SessionCard.tsx`). Hooks: `useThing.ts` with camelCase exports.
- **Routes**: App Router patterns (`page.tsx`, `layout.tsx`, optional `loading.tsx`, `error.tsx`).
- **Styling**: Tailwind utility-first; keep class lists readable (group by function); minimize custom CSS.
- **Imports**: Prefer absolute paths via `tsconfig` aliases; group std/lib/local.

## Testing Guidelines
- No formal suite yet. Prefer Vitest/Jest + React Testing Library for units; Playwright for E2E.
- Place tests alongside modules (e.g., `foo.test.ts`) or under `__tests__/` mirroring structure.
- Aim to cover pure helpers in `lib/` and critical page behaviors. Add `npm test` when introducing a runner.

## Commit & Pull Request Guidelines
- **Commits**: Conventional Commits (e.g., `feat(schedule): add session filters`). Keep messages imperative and scoped.
- **PRs must include**: purpose/scope; linked issues (e.g., `Closes #12`); screenshots or clips for UI changes (desktop/mobile); checklist that `npm run lint` passes and build succeeds; accessible names/labels for new UI.

## Security & Configuration Tips
- Do not commit secrets. Use `.env.local`; expose only safe values prefixed with `NEXT_PUBLIC_`.
- Validate external inputs with `zod` where applicable.
- SEO: Configure per-page metadata and `next-seo` consistently.
