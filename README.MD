# Marwan Tarek — Portfolio

Personal portfolio of **Marwan Tarek Zaky**, Software Engineer (Python/FastAPI, React/TypeScript, Generative AI, C#/.NET, C++).

**Live:** https://portfolio-marwantarekzakys-projects.vercel.app/

## Stack
React 18 · Vite · Tailwind CSS · Framer Motion · Three.js (@react-three/fiber) · EmailJS · deployed on Vercel.

## Editing content
All text (experience, projects, courses, skills groups, links) lives in:
- `src/constants/index.js` — experience, projects, courses, about text, hero roles, contact details
- `src/components/Tech.jsx` — skill groups
- `public/Marwan_Tarek_Software_Engineer_CV.pdf` — the CV behind the "Download CV" buttons (replace the file to update it)

Tech logos in `src/assets/stack` come from [Devicon](https://devicon.dev) (MIT) and [Simple Icons](https://simpleicons.org) (CC0).

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in ./dist
```

Contact form environment variables (set in Vercel): `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAIL_JS_ACCESS_TOKEN`, `VITE_RECAPTCHA_SITE_KEY`.

## Deploy
Every push to `main` is deployed to production by Vercel automatically.
