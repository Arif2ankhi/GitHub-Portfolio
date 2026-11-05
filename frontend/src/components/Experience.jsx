import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Development Track (Self-Directed)",
    company: "Personal Projects & Deployed Apps",
    location: "Remote",
    period: "2025 – Present",
    type: "Career Transition",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    responsibilities: [
      "Built and deployed full-stack applications end-to-end: StudioSpace marketplace and Wanderlust travel platform, live on Vercel.",
      "Implemented complete authentication with Better Auth (JWT plugin, MongoDB adapter) on both client and server.",
      "Developed Express.js REST APIs with MongoDB Atlas and native driver — routing, validation, and error handling.",
      "Established a Git/GitHub workflow with separate client/server repos and continuous Vercel deployments.",
    ],
    technologies: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Better Auth", "shadcn/ui", "Vercel"],
  },
  {
    role: "IT Support Engineer",
    company: "Shell (via Hemmersbach)",
    location: "London, UK",
    period: "Apr 2022 – Present",
    type: "Enterprise IT",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    responsibilities: [
      "Deliver on-site 1st & 2nd line tech bar, walk-in and desk-side support for Shell's London head office, including VIP and trade-floor users.",
      "Own the full incident lifecycle in ServiceNow — triage, resolution, or escalation — within SLA with clear hand-over notes.",
      "Image, configure, and deploy MacBook & Windows laptops, including Intune / Company Portal enrolment and user setup.",
      "Troubleshoot Apple & Windows devices, Microsoft 365, Outlook, Teams, OneDrive, docking stations, multi-monitor and VPN issues.",
      "Support iOS/Android, MFA / GlobalProtect Authenticator and secure mobile access in line with enterprise security policy.",
      "Keep CMDB and asset records accurate — asset tagging, inventory, secure disk wiping, and hardware replacement.",
    ],
    technologies: ["ServiceNow", "Intune/MDM", "Microsoft 365", "Active Directory", "macOS", "Windows 11"],
  },
  {
    role: "Trade Floor IT Support Engineer",
    company: "BP",
    location: "London, UK",
    period: "Sep 2021 – Mar 2022",
    type: "Enterprise IT",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    responsibilities: [
      "Provided rapid desk-side support to traders and executives, prioritising time-critical incidents to minimise disruption to trading.",
      "Administered Active Directory accounts, password resets, OUs and permissions; supported Intune device enrolment.",
      "Supported workstation deployments, office moves, network cabling, docking stations, hardware installs and AV for meetings.",
      "Updated ServiceNow incidents, requests and CMDB / asset records during support, hardware refresh and software deployments.",
    ],
    technologies: ["Active Directory", "Intune/MDM", "ServiceNow", "Windows 10/11", "Networking"],
  },
  {
    role: "IT Helpdesk Analyst (Intern)",
    company: "Twin Group",
    location: "London, UK",
    period: "Sep 2020 – Feb 2021",
    type: "Enterprise IT",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    responsibilities: [
      "Delivered 1st line remote and on-site support: logged issues, troubleshot problems, and escalated to 2nd/3rd line where required.",
      "Created and managed Active Directory accounts, security groups and mailbox permissions; supported Windows application deployment.",
      "Implemented BitLocker encryption via Group Policy and installed endpoint protection and remote-support software.",
    ],
    technologies: ["Active Directory", "BitLocker", "Group Policy", "Windows", "O365"],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Builds the Whole Stack",
    desc: "Next.js + TypeScript clients, Express + MongoDB APIs, Better Auth sessions — deployed on Vercel, links you can click right now.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Enterprise Reliability",
    desc: "Five years of SLA-driven, incident-first work at Shell and BP means disciplined commits, clear documentation, and calm debugging.",
  },
  {
    icon: FaHandsHelping,
    title: "Executive-Level Communication",
    desc: "Accustomed to supporting VIPs and trade-floor users — short, precise, and jargon-free updates for any audience.",
  },
  {
    icon: FaAward,
    title: "Security-Aware by Habit",
    desc: "BitLocker, MFA, conditional access, and secure asset handling are second nature — they now inform how I design auth flows.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-blue-600 text-sm" />
          <span>Practical Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          Five years of enterprise IT at Shell &amp; BP, now building the web instead of supporting it — with deployed full-stack projects to match.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-gray-500 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <HiOutlineCalendar className="text-blue-600" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <HiOutlineCheckCircle className="text-blue-600 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-gray-400 mr-1">
                Tech:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Hire Me as a Fresher Callout Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-blue-200/80 p-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Why Bring Me Onto Your Team?
          </h3>
          <p className="text-sm text-gray-500">
            What five years in enterprise tech plus a self-driven full-stack transition bring from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-blue-50/40 border border-blue-100/60">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
