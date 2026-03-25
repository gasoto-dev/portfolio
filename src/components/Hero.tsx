import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-slate-50 pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">
              Available for Leadership & Consulting
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
              George Soto
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              Technical Lead & AI Workflow Engineer
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              I build the systems that let engineering teams ship faster — then automate
              the parts that slow them down.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#ai-workflow"
                className="inline-flex items-center gap-2 border border-blue-200 hover:border-blue-400 text-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                See the AI work ↓
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-100">
              <Image
                src="/headshot.jpg"
                alt="George Soto"
                width={288}
                height={288}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="flex flex-wrap gap-8 mt-16 pt-12 border-t border-slate-200">
          {[
            { value: "8+", label: "Years engineering" },
            { value: "4", label: "Companies shipped" },
            { value: "AI", label: "Multi-agent systems" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-blue-600">{s.value}</div>
              <div className="text-slate-500 text-sm mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
