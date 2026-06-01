import Image from "next/image"

const FEATURED = {
  name: "AI Harness",
  tagline: "Live, interactive multi-agent AI factory",
  description:
    "Submit a feature request and watch a multi-agent AI factory build it in real time — a Planner decomposes the work, a Builder writes tests and code (TDD), a QA agent verifies in a browser and posts pass/fail, and a pull request opens at the end. Streamed live over Server-Sent Events.",
  liveHref: "https://ai-harness-mocha.vercel.app",
  sourceHref: "https://github.com/gasoto-dev/ai-harness",
  image: "/screenshots/ai-harness-console.png",
  tags: ["Next.js 16", "TypeScript", "SSE", "Multi-agent", "Live demo"],
}

const PROJECTS = [
  {
    name: "CodeLens",
    description:
      "Paste any public GitHub URL and get back a modernization score from 0–100. Analyzes TypeScript adoption, test presence, legacy dependencies, README quality, and import coupling to identify the highest-risk files to change.",
    href: "https://github.com/gasoto-ai/codelens",
    tags: ["Next.js 15", "TypeScript", "SQLite", "Octokit", "70 tests"],
  },
  {
    name: "Fish Tank Tools",
    description:
      "Multi-agent workflow dashboard with a drag-and-drop Kanban board, structured handoff generator (markdown export), live GitHub PR status panel, and persistent notes scratchpad.",
    href: "https://github.com/gasoto-ai/fish-tank-tools",
    tags: ["Next.js 15", "TypeScript", "dnd-kit", "SQLite", "39 tests"],
  },
  {
    name: "The Crate",
    description:
      "Retro vinyl record shop — browse by genre and artist, add to cart, check out with address and email, view order history. Full e-commerce flow in a single Next.js app backed by SQLite.",
    href: "https://github.com/gasoto-ai/the-crate",
    tags: ["Next.js 15", "TypeScript", "SQLite", "Tailwind", "32 tests"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Built with the system
        </h2>

        <div className="mb-6 rounded-2xl border-2 border-blue-300 ring-1 ring-blue-200 bg-white shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <a
              href={FEATURED.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-1/2 block bg-slate-900 group"
            >
              <Image
                src={FEATURED.image}
                alt="AI Harness multi-agent console showing a completed run"
                width={800}
                height={600}
                className="w-full h-56 md:h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </a>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
                  ★ Featured · Live Demo
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-2xl mb-1">{FEATURED.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-3">{FEATURED.tagline}</p>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                {FEATURED.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {FEATURED.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={FEATURED.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                >
                  Watch the factory build live ▶
                </a>
                <a
                  href={FEATURED.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  View source ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-xl p-6 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <span className="text-slate-400 group-hover:text-blue-500 transition-colors ml-2 mt-0.5">↗</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/gasoto-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            View all repos on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
