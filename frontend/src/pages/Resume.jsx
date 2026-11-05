import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/80 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">

        {/* Header Section */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                MD ARIF HOSSIN
              </h1>
              <p className="text-lg font-semibold text-blue-600 mt-1">
                Full-Stack Web Developer | Next.js · TypeScript · Node.js
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Building complete, deployed web applications — backed by 5 years of enterprise IT engineering at Shell &amp; BP.
              </p>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to Junior Full-Stack / Frontend Roles
              </span>
              <span className="text-xs text-gray-500 mt-1">London, UK — on-site, hybrid or remote</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-100">
            <a
              href="mailto:arif2ankhi@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiMail className="text-blue-600 text-base shrink-0" />
              <span className="truncate">arif2ankhi@gmail.com</span>
            </a>
            <a
              href="tel:+447576289960"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiPhone className="text-blue-600 text-base shrink-0" />
              <span>07576 289960</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 text-base shrink-0" />
              <span>London, UK</span>
            </div>
            <a
              href="https://github.com/Arif2ankhi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGithub className="text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-arif-hossin-9086a239/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGlobe className="text-blue-600 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            <strong>Full-Stack Web Developer</strong> transitioning from an accomplished <strong>5+ year IT Support Engineering career</strong> serving Shell's London head office, BP's trading floors, and enterprise environments across Microsoft 365, Active Directory, and Intune. Now building and deploying complete web applications with <strong>Next.js (App Router)</strong>, <strong>TypeScript</strong>, <strong>Node.js / Express.js</strong>, <strong>MongoDB</strong>, and <strong>Better Auth</strong> — with multiple live products on Vercel. Brings an enterprise engineer's discipline to every codebase: SLA-aware, incident-driven debugging, security-first design, and executive-level communication. Holds an MBA from the University of Sunderland. Actively exploring <strong>AI agents</strong> and modern full-stack tooling.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Frontend:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Next.js 16 (App Router, SSR/RSC), React 19, TypeScript, JavaScript (ES6+), Tailwind CSS v4, shadcn/ui, DaisyUI, HTML5/CSS3, Responsive &amp; Accessible Design.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Backend, Auth &amp; Database:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Node.js, Express.js, MongoDB (native driver &amp; Atlas), Better Auth (client + server, JWT plugin, MongoDB adapter), REST API design, JWT/session patterns.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Developer Tools &amp; Workflow:
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git &amp; GitHub, Vercel &amp; Netlify CI/CD, Postman, VS Code, npm, Chrome DevTools, environment configuration.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 rounded-lg border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">
                Enterprise IT (Professional Background):
              </span>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Windows 10/11, Microsoft 365, Active Directory, Microsoft Entra ID, Intune (MDM/MAM), ServiceNow, TCP/IP, VPN, iOS/Android support, BitLocker.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="border-l-2 border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  StudioSpace — Creative Studio Booking Marketplace
                  <span className="text-xs font-normal text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded">
                    Full-Stack
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-blue-600">
                  <a href="https://studiospace-client-xi.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Arif2ankhi/Studio-Client" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Client Repo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Arif2ankhi/Studio-Server" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Server Repo <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Better Auth, Express.js, MongoDB Atlas (native driver)
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Built a marketplace where users explore, host, and book creative studios by the hour — with category, rate, location, and popularity filtering straight from MongoDB.
                </li>
                <li>
                  Managed secure registration, login, and session persistence end-to-end with Better Auth client and server APIs.
                </li>
                <li>
                  Implemented a multi-step host listing workflow, SSR featured sections with Suspense skeletons, and dark/light theming.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Wanderlust — Travel Destination Booking Platform
                  <span className="text-xs font-normal text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded">
                    Full-Stack
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600">
                  <a href="https://wanderlust-client-nine-lake.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Arif2ankhi/Wanderlust-Client" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Client Repo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Arif2ankhi/Wanderlust-Server" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Server Repo <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech: Next.js 16, React 19 + React Compiler, TypeScript, Tailwind CSS v4, Better Auth (JWT + MongoDB adapter), Express REST API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Delivered destination browsing, bookings (create/view/cancel), and full listing management with dialog-based forms.
                </li>
                <li>
                  Protected /add-destination, /my-bookings, and detail routes via Next 16 proxy middleware with better-auth sessions.
                </li>
                <li>
                  Deployed separate client and API apps on Vercel with environment-driven configuration.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Fit-Log — Daily Workout Planner
                  <span className="text-xs font-normal text-emerald-600 font-mono bg-emerald-50 px-2 py-0.5 rounded">
                    Next.js + TypeScript
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-emerald-600">
                  <a href="https://fit-log-ebon.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Arif2ankhi/Fit-Log" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech: Next.js, TypeScript, Tailwind CSS, DaisyUI, React
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Lets users pick daily workouts, build custom plans, and manage a save-for-later list with ratings, calories index, and duration.
                </li>
                <li>
                  Smooth interaction feedback via toasts and responsive component composition.
                </li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="border-l-2 border-cyan-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  Book-Vibe · Bangla News 24 · CRUD Connect
                  <span className="text-xs font-normal text-cyan-600 font-mono bg-cyan-50 px-2 py-0.5 rounded">
                    React + TypeScript
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-semibold text-cyan-600">
                  <a href="https://book-vibe-f4u3.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Book-Vibe <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://bangla-news-24-steel.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    News 24 <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Arif2ankhi/crud-server-2026" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    CRUD API <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Tech: React, TypeScript, Tailwind CSS, Next.js, Express.js, MongoDB
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                <li>
                  Book-Vibe: book browsing and collection app with strict TypeScript typing.
                </li>
                <li>
                  Bangla News 24: responsive categorized news portal with mobile-first reading layout.
                </li>
                <li>
                  CRUD Connect: separate Express REST API and typed React client covering the full request lifecycle with MongoDB persistence.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Professional Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Professional Experience
          </h2>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  IT Support Engineer — Shell (via Hemmersbach), London
                </h3>
                <p className="text-xs text-gray-500">On-site 1st/2nd line, Tech Bar / walk-in, desk-side &amp; VIP support</p>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">Apr 2022 – Present</span>
            </div>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
              <li>Deliver face-to-face support at Shell's London head office for trade-floor and executive users; own the incident lifecycle in ServiceNow within SLA.</li>
              <li>Image, configure and deploy MacBook &amp; Windows laptops (Intune / Company Portal); support Microsoft 365, Teams, OneDrive, VPN, and mobile fleet with MFA.</li>
              <li>Keep CMDB and asset records accurate — asset tagging, inventory, secure disk wiping, hardware replacement.</li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  Trade Floor IT Support Engineer — BP, London
                </h3>
                <p className="text-xs text-gray-500">High-pressure trading environment support</p>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">Sep 2021 – Mar 2022</span>
            </div>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
              <li>Rapid desk-side support to traders and executives, prioritising time-critical incidents.</li>
              <li>Administered Active Directory accounts, OUs, permissions; supported Intune enrolment, workstation deployments, and AV.</li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  IT Helpdesk Analyst (Intern) — Twin Group, London
                </h3>
                <p className="text-xs text-gray-500">First line remote &amp; on-site support</p>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">Sep 2020 – Feb 2021</span>
            </div>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
              <li>Logged and troubleshot issues; managed AD accounts, security groups, and mailbox permissions.</li>
              <li>Implemented BitLocker encryption via Group Policy; installed endpoint protection and remote-support tooling.</li>
            </ul>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-gray-900">MBA — Master of Business Administration</h3>
                <p className="text-gray-600 text-xs sm:text-sm">University of Sunderland, UK</p>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">UK Postgraduate Degree</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-gray-900">Bachelor of Pharmacy</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Stamford University, Bangladesh</p>
              </div>
              <span className="text-xs sm:text-sm text-gray-500 font-medium sm:text-right">Science Undergraduate Degree</span>
            </div>
          </div>
        </section>

        {/* Section: Certifications & Training */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Certifications &amp; Training
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900">CompTIA A+ Core 1 (220-1001)</h4>
              <p className="text-xs text-gray-500 mt-0.5">CompTIA — Hardware, troubleshooting, networking &amp; security fundamentals</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900">ICT Systems &amp; Principles — Level 2</h4>
              <p className="text-xs text-gray-500 mt-0.5">City &amp; Guilds — UK formal ICT qualification</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900">IT Systems &amp; Networking Certificate</h4>
              <p className="text-xs text-gray-500 mt-0.5">Cerco Training — hands-on enterprise IT training</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900">Full-Stack Development Track</h4>
              <p className="text-xs text-gray-500 mt-0.5">Self-directed, ongoing — Next.js, TypeScript, Node, Express, MongoDB, Better Auth, AI agents</p>
            </div>
          </div>
        </section>

        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Soft Skills:</span>
              <p>Incident-Driven Problem Solving, SLA Management, VIP/Executive Communication, Security-First Mindset, Rapid Adoption of New Stacks, Documentation Discipline.</p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block mb-1">Languages:</span>
              <p>Bengali (Native), English (Professional Working Proficiency).</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
