# NextBites

A small recipe site built with Next.js and TypeScript. The home page renders a reusable, typed recipe card for each item in the recipe data file.

## Run locally

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Recipe data lives in `app/data/recipes.ts`; the shared navigation is in `app/components/NavBar.tsx`, and the home page is assembled in `app/page.tsx`.
