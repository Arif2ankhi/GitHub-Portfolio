import studiospace from "../assets/projects/studiospace.svg";
import wanderlust from "../assets/projects/wanderlust.svg";
import fitlog from "../assets/projects/fitlog.svg";
import bookvibe from "../assets/projects/bookvibe.svg";
import banglanews from "../assets/projects/banglanews.svg";
import crudConnect from "../assets/projects/crud-connect.svg";

const projects = [
  {
    id: 1,
    title: "StudioSpace — Studio Booking Marketplace",
    image: studiospace,
    category: "Full-Stack Marketplace",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "shadcn/ui",
      "Better Auth",
      "Express.js",
      "MongoDB Atlas",
    ],
    description:
      "A full-stack marketplace connecting creative professionals with studio spaces. Users can explore, filter, host, and book verified photo studios, film stages, podcast lounges, and music suites by the hour. Built with a Next.js App Router client and an Express + MongoDB Atlas API, secured with Better Auth sessions on both ends.",
    live: "https://studiospace-client-xi.vercel.app",
    github: "https://github.com/Arif2ankhi/Studio-Client",
    backend: "https://github.com/Arif2ankhi/Studio-Server",
    challenges: [
      "Building a dynamic studio explorer with real-time filtering by category, rate, location, and popularity straight from MongoDB.",
      "Designing a multi-step 'Add Studio' listing workflow for hosts with form validation and session-aware submission.",
      "Rendering featured studios server-side with React Suspense skeleton states and a graceful offline demo fallback.",
      "Managing secure registration, login, and session persistence end-to-end with Better Auth client and server APIs.",
    ],
    future: [
      "Stripe integration for real hourly payments and host payouts.",
      "Reviews, ratings, and verified-visit badges for studios.",
      "A host analytics dashboard with booking trends and revenue charts.",
    ],
  },
  {
    id: 2,
    title: "Wanderlust — Travel Booking Platform",
    image: wanderlust,
    category: "Full-Stack Travel App",
    technologies: [
      "Next.js 16",
      "React 19 + Compiler",
      "TypeScript",
      "Tailwind CSS v4",
      "Better Auth + JWT",
      "Express API",
    ],
    description:
      "A travel destination platform where users explore destinations, make bookings, and manage their own listings. The client runs on Next.js 16 with React Server Components and the React Compiler enabled; authentication uses better-auth with the JWT plugin and a MongoDB adapter, backed by a separate Express REST API deployed on Vercel.",
    live: "https://wanderlust-client-nine-lake.vercel.app",
    github: "https://github.com/Arif2ankhi/Wanderlust-Client",
    backend: "https://github.com/Arif2ankhi/Wanderlust-Server",
    challenges: [
      "Implementing route protection with Next 16 proxy middleware so /add-destination, /my-bookings, and detail pages stay private.",
      "Managing the full booking lifecycle — create, view, and cancel — across client state and the external REST API.",
      "Wiring complete listing management (add, edit, delete) through dialog-based forms with server-side persistence.",
    ],
    future: [
      "Payment flow with Stripe test API and booking confirmation emails.",
      "Host reviews and destination photo galleries.",
      "Map-based destination browsing with geosearch.",
    ],
  },
  {
    id: 3,
    title: "Fit-Log — Workout Planner",
    image: fitlog,
    category: "Fitness Web App",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React",
    ],
    description:
      "A workout planning app where users pick daily workouts, add their own plans, and manage a save-for-later list. Each workout shows ratings, descriptions, calories-burned index, and duration, with toast notifications for smooth interaction feedback. Live on Vercel.",
    live: "https://fit-log-ebon.vercel.app",
    github: "https://github.com/Arif2ankhi/Fit-Log",
    challenges: [
      "Balancing add/save/remove state transitions for workout plans without stale UI.",
      "Composing DaisyUI components with Tailwind utilities for an energetic, responsive fitness interface.",
    ],
    future: [
      "Progress tracking with weekly workout analytics.",
      "User accounts with saved history across devices.",
    ],
  },
  {
    id: 4,
    title: "Book-Vibe — Book Collection App",
    image: bookvibe,
    category: "React + TypeScript App",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "A book browsing and collection management app built with React and TypeScript. Deployed on Vercel — a clean reading-list interface focused on typing correctness and component reusability.",
    live: "https://book-vibe-f4u3.vercel.app",
    github: "https://github.com/Arif2ankhi/Book-Vibe",
    challenges: [
      "Applying strict TypeScript typing to props, state, and event handlers across the component tree.",
      "Structuring reusable card and list components for a consistent browsing experience.",
    ],
    future: [
      "Borrow/return tracking with due dates.",
      "Personal reading statistics dashboard.",
    ],
  },
  {
    id: 5,
    title: "Bangla News 24 — News Portal",
    image: banglanews,
    category: "Content Platform",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "A responsive online news portal interface presenting categorized articles in a clean, readable layout. Built with Next.js and TypeScript with a focus on content hierarchy and mobile-first reading. Live on Vercel.",
    live: "https://bangla-news-24-steel.vercel.app",
    github: "https://github.com/Arif2ankhi/Bangla-News-24",
    challenges: [
      "Designing a content hierarchy that keeps dense article grids readable on every screen size.",
      "Optimizing image-heavy layouts for fast loading on slower connections.",
    ],
    future: [
      "Live category feeds from a headless CMS.",
      "Dark mode and reader preferences.",
    ],
  },
  {
    id: 6,
    title: "CRUD Connect — Express API + Client",
    image: crudConnect,
    category: "Backend + Frontend",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "REST API",
    ],
    description:
      "A practice-driven full-stack CRUD platform: a separate Express.js REST API server paired with a typed React client. Covers the complete request lifecycle — routing, controllers, validation, and MongoDB persistence — the backbone pattern behind my larger booking apps.",
    github: "https://github.com/Arif2ankhi/crud-client-2026",
    backend: "https://github.com/Arif2ankhi/crud-server-2026",
    challenges: [
      "Structuring an Express server with clean route/controller separation and consistent error handling.",
      "Keeping client and API types in sync for safe, typed request/response handling.",
    ],
    future: [
      "Authentication layer with better-auth.",
      "Pagination, search, and sorting on list endpoints.",
    ],
  },
];

export default projects;
