<div style="text-align: center" align="center">
<img src="https://i.ibb.co/r4PFcLn/Logo-ro-z-900x900.png" alt="" width="70" />
<h1>Sterczące Uszy</h1>

<p>Strona internetowa Fundacji Sterczące Uszy - organizacji non-profit pomagającej zwierzętom w potrzebie.</p>

<a href="https://www.sterczaceuszy.pl/">sterczaceuszy.pl</a>

<br />

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Contentful](https://img.shields.io/badge/Contentful-2478CC?style=for-the-badge&logo=contentful&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<br />
</div>

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Contentful CMS via GraphQL
- Formspree forms
- Radix UI

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/non-profit-dev/sterczace-uszy.git
cd sterczace-uszy
pnpm install
```

Create `.env.local` with the required environment variables:

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=master

NEXT_PUBLIC_CONTACT_FORM_ID=
NEXT_PUBLIC_SAFE_ANIMAL_FORM_ID=
```

Run the local development server:

```bash
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev                # Start the development server
pnpm build              # Create a production build
pnpm start              # Start the production server
pnpm lint               # Run ESLint
pnpm lint:fix           # Run ESLint with auto-fixes
pnpm format             # Format files with Prettier
pnpm format:check       # Check formatting
pnpm contentful:types   # Generate Contentful TypeScript types
```

## Contentful

Content is fetched from Contentful through GraphQL queries in `lib/contentful/queries`.

```bash
pnpm contentful:types
```

Images from Contentful are served from `images.ctfassets.net`, configured in `next.config.ts`.

## Forms

Contact forms use Formspree. Set these public form IDs in `.env.local`:

- `NEXT_PUBLIC_CONTACT_FORM_ID`
- `NEXT_PUBLIC_SAFE_ANIMAL_FORM_ID`

## Code Quality

The project uses ESLint, Prettier, Husky and lint-staged. Staged TypeScript and React files are
linted and formatted automatically before commits.

## Contributing

This project is a pro bono effort. If you want to contribute, open an issue or reach out to the
maintainers before starting larger changes.
