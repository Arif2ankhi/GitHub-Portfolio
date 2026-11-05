# AGENTS.md

## Layout

- The repo root IS the project: `C:\Projects\GitHub Portfolio\` (contains `.git`, `README.md`, and `frontend/`). All npm commands run from `frontend/` — there is no `package.json` at the repo root, so `npm install`/`npm run *` fails there.
- The working directory path contains spaces (`GitHub Portfolio`); quote paths in shell commands.
- Single package (`frontend`): React 19 + Vite, JavaScript (not TypeScript), React Router v7.

## Commands

```bash
cd frontend
npm install
npm run dev      # Vite dev server
npm run lint     # oxlint (NOT eslint — don't add .eslintrc rules)
npm run build    # production build (use to verify changes)
```

There are no tests. Verification = `npm run lint` + `npm run build`.

## Conventions & Gotchas

- Tailwind CSS v4 via the `@tailwindcss/vite` plugin: there is no `tailwind.config.js`. Extend or customize the theme with `@theme` in `src/index.css` (which only contains `@import "tailwindcss";`) — don't create a config file.
- `src/data/projects.js` is the single source of truth for projects. Project cards on the home page and `/projects/:id` detail pages both read it. Add project images to `src/assets/projects/` and import them at the top of that file.
- Routes (`/`, `/projects/:id`, `/resume`) are defined in `src/App.jsx`; the app uses `BrowserRouter` (dev server handles history fallback).
- The home page is a long landing page built from section components (`AboutMe`, `Projects`, `Skills`, `Experience`, `Education`, `Contact`). Each has an anchor `id` (`#about`, `#projects`, `#skills`, `#experience`, `#education`, `#contact`) that `Navbar` depends on for scroll-spy and smooth scrolling — keep section ids in sync if renaming or reordering.
