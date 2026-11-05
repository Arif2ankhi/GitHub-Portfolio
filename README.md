# Md Arif Hossin — Developer Portfolio

A modern, responsive personal web developer portfolio for **Md Arif Hossin**, a London-based **Full-Stack Web Developer** building complete applications with **Next.js**, **TypeScript**, **Node.js / Express**, **MongoDB**, and **Better Auth**.

## ✨ Features
- **Hero Section**: Professional introduction with status badge, real tech stack, and interactive developer code card.
- **Interactive Resume (`/resume`)**: Full, ATS-friendly printable resume with Print/Save as PDF functionality.
- **Featured Projects**: Six real projects with live Vercel demos and client/server repos — StudioSpace, Wanderlust, Fit-Log, Book-Vibe, Bangla News 24, and CRUD Connect.
- **Dynamic Project Details (`/projects/:id`)**: Deep-dive pages with challenges & solutions and future roadmaps.
- **Skills Matrix**: Categorized technical stack (Frontend, Backend & Auth, Tools & Deployment) with interactive filter tabs.
- **Professional History**: Enterprise IT engineering career at Shell & BP, degrees, and CompTIA certifications.
- **Contact**: Real contact details, GitHub/LinkedIn links, and a working mailto-powered message form.
- **Modern Responsive Design**: Scroll-spy navigation, mobile drawer menu, and clean footer with back-to-top.

## 🔗 Links
- **LinkedIn**: https://www.linkedin.com/in/md-arif-hossin-9086a239/
- **GitHub**: https://github.com/Arif2ankhi
- **Email**: arif2ankhi@gmail.com

## 🛠️ Tech Stack
- **Frontend**: React 19, JavaScript (ES6+), React Router v7
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Bundler**: Vite
- **Linting**: Oxlint

## 🚀 Local Development
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start local development server
npm run dev

# Other scripts
npm run build    # production build
npm run lint     # oxlint
npm run preview  # preview production build
```

## 📦 Deployment
The production build deploys cleanly to **Vercel**, **Netlify**, or any static host. For SPA deep-link routing (`/resume`, `/projects/:id`), configure all routes to fall back to `index.html`.
