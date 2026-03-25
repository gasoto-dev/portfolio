export default function AiWorkflow() {
  return (
    <section id="ai-workflow" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-200 font-medium text-sm tracking-widest uppercase mb-3">Differentiator</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AI-assisted software development, for real
        </h2>
        <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mb-4">
          I run a two-agent AI development system from a Raspberry Pi 5 on my desk. Ren handles
          planning, research, and orchestration. Forge handles implementation — scoped tasks, TDD,
          PRs, code review. I set direction, review the output, and merge what ships.
        </p>
        <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mb-12">
          This isn&apos;t a demo or a hackathon project. It&apos;s a production workflow with structured
          handoff formats, tiered memory for session continuity, GitHub Issues for task tracking,
          and a growing library of skills that agents load on-demand. These are the tools it built.
        </p>

        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
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
