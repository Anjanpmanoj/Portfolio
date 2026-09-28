# Anjan P Manoj - Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS.

Based on [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) by Naman Barkiya (MIT License, see `LICENSE`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where to edit things

| What | File |
| --- | --- |
| Name, tagline, location, email, social links | `config/site.ts` |
| Projects (add GitHub / live links here) | `config/projects.ts` |
| Skills | `config/skills.ts` |
| Education, certifications, activities | `config/education.ts` |
| Nav links | `config/routes.ts` |
| Resume PDF | replace `public/Anjan_Manoj_Resume.pdf` (keep the file name) |
| Profile photo | save a square image as `public/profile.jpg` (initials show until then) |

To show a GitHub or live-demo icon on a project page, add `githubLink` and/or `websiteLink` to that project in `config/projects.ts`.

## Deploy (Vercel)

1. Push this folder to a GitHub repo and import it on [vercel.com](https://vercel.com).
2. Add the env variable `NEXT_PUBLIC_SITE_URL` with your final URL (see `.env.example`).
3. Optional: add `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` to enable Google Analytics.
