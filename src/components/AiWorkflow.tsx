const TOOLS = [
  {
    name: "CodeLens",
    description: "Analyzes any public GitHub repo and returns a modernization score (0–100) with findings across TypeScript adoption, test coverage, legacy dependencies, and import coupling graph.",
    href: "https://github.com/gasoto-ai/codelens",
    tags: ["Next.js", "TypeScript", "Octokit", "SQLite"],
  },
  {
    name: "Fish Tank Tools",
    description: "The workflow dashboard for the AI development system. Kanban board with drag-and-drop, structured handoff generator, live GitHub PR panel, and persistent notes scratchpad.",
    href: "https://github.com/gasoto-ai/fish-tank-tools",
    tags: ["Next.js", "TypeScript", "SQLite", "dnd-kit"],
  },
  {
    name: "The Crate",
    description: "A retro vinyl record shop built as a demo of the full e-commerce stack — product catalog, cart context, SQLite-backed checkout, and order history.",
    href: "https://github.com/gasoto-ai/the-crate",
    tags: ["Next.js", "TypeScript", "SQLite", "Tailwind"],
  },
]

export default function AiWorkflow() {
  return (
    <section id="ai-workflow" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-200 font-medium text-sm tracking-widest uppercase mb-3">Differentiator</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AI-assisted software development, for real
        </h2>
        <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mb-4">
          I run a multi-agent AI development system from a Raspberry Pi 5 on my desk. A Planning Agent handles
          research, task decomposition, and orchestration. A Builder Agent handles implementation — scoped tasks, TDD,
          PRs, code review. A QA Agent gates every PR with hard pass/fail criteria. I set direction, review the output, and merge what ships.
        </p>
        <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mb-12">
          This isn&apos;t a demo or a hackathon project. It&apos;s a production workflow with structured
          handoff formats, tiered memory for session continuity, GitHub Issues for task tracking,
          and a growing library of skills that agents load on-demand. These are the tools it built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TOOLS.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl p-6 transition-colors group"
            >
              <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-blue-200 transition-colors">
                {tool.name} ↗
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-blue-200 bg-blue-900/40 border border-blue-700/40 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
          {[
            { value: "141", label: "Tests across all repos" },
            { value: "4", label: "Repos shipped" },
            { value: "Pi 5", label: "Runs on a Raspberry Pi" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-blue-300 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
