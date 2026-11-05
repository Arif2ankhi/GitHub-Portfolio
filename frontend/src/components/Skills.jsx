import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaChrome,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { HiOutlineCode, HiOutlineServer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend & Auth", icon: HiOutlineServer },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend
  {
    name: "Next.js (App Router)",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-gray-900",
    bg: "bg-gray-50 border-gray-200",
    level: "Advanced",
    description: "Server & client components, SSR/RSC, route protection, dynamic routes, Vercel deploys",
  },
  {
    name: "React 19",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 border-cyan-100",
    level: "Proficient",
    description: "Hooks, Context API, React Compiler, component-driven architecture, state patterns",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: "Proficient",
    description: "Typed props & state, interfaces, generics, API response typing, OOP patterns",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-500",
    bg: "bg-yellow-50 border-yellow-100",
    level: "Advanced",
    description: "Async/await, modules, array methods, DOM APIs, functional patterns",
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 border-teal-100",
    level: "Advanced",
    description: "CSS-first @theme config, responsive layouts, dark mode, utility-first design",
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    level: "Advanced",
    description: "Semantic markup, accessibility, Flexbox/Grid, animations, responsive design",
  },
  {
    name: "shadcn/ui + DaisyUI",
    category: "frontend",
    icon: HiOutlineSparkles,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
    level: "Proficient",
    description: "Composable component systems, theme tokens, dialog forms, accessible primitives",
  },

  // Backend & Auth
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-500",
    bg: "bg-emerald-50 border-emerald-100",
    level: "Proficient",
    description: "Runtime fundamentals, npm ecosystem, environment configuration, deployment",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "text-gray-700",
    bg: "bg-gray-50 border-gray-200",
    level: "Proficient",
    description: "REST routing, middleware, controllers, error handling, CORS",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: SiMongodb,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    level: "Proficient",
    description: "Native driver & Atlas, collections, queries, aggregation basics, MongoDB adapter",
  },
  {
    name: "Better Auth",
    category: "backend",
    icon: FaShieldAlt,
    color: "text-rose-500",
    bg: "bg-rose-50 border-rose-100",
    level: "Proficient",
    description: "Client + server auth, sessions, JWT plugin, MongoDB adapter, route guards",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
    level: "Proficient",
    description: "Design, integration, typed requests, optimistic UI, streaming data patterns",
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
    level: "Advanced",
    description: "Branching workflows, PRs, merge conflicts, version control discipline",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    color: "text-gray-900",
    bg: "bg-gray-50 border-gray-200",
    level: "Proficient",
    description: "CI/CD auto-deploys, environment variables, custom domains, preview builds",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    level: "Proficient",
    description: "API testing, collections, header auth inspection, payload debugging",
  },
  {
    name: "AI Agents & Tooling",
    category: "tools",
    icon: FaRobot,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    level: "Learning",
    description: "Agent concepts, AI-assisted development workflows, prompt-driven tooling",
  },
  {
    name: "Chrome DevTools",
    category: "tools",
    icon: FaChrome,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: "Proficient",
    description: "DOM inspection, network tab, console debugging, performance profiling",
  },
  {
    name: "npm & VS Code",
    category: "tools",
    icon: FaNpm,
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
    level: "Proficient",
    description: "Scripts, dependency management, debugging configs, workspace workflows",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineCode className="text-blue-600 text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          The technologies, libraries, and developer tools I leverage to build fast, responsive, and delightful web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === cat.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon />
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      skill.level === "Advanced"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : skill.level === "Proficient"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-purple-50 text-purple-700 border-purple-200"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] text-gray-400 font-medium capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
