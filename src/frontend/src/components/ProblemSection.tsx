import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Globe, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "The Algorithm Isn't Fair",
    description:
      "Big creators dominate feeds while talented newcomers stay buried. Follower count, not content quality, decides who gets seen.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    glow: "oklch(0.65 0.25 27)",
  },
  {
    icon: Award,
    title: "No Rewards for Real Engagement",
    description:
      "Hours of work, genuine likes, real shares — none of it translates into growth. Your effort disappears into a black hole of metrics.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "oklch(0.75 0.19 60)",
  },
  {
    icon: Globe,
    title: "Regional Creators Are Ignored",
    description:
      "Content in Hindi, Tamil, Bengali, or Marathi gets no platform support. India's linguistic diversity is treated as a liability.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    glow: "oklch(0.65 0.18 220)",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="problem"
      className="py-24 sm:py-32 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.62 0.22 290), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 ${isVisible ? "reveal-visible" : "initially-hidden"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-xs font-bold uppercase tracking-widest text-rose-400 mb-7">
            <span>The Problem</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.022em] leading-[1.07] text-foreground mb-6">
            Why Do Great Creators{" "}
            <span className="gradient-text-warm">Stay Hidden?</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            The creator economy is broken. Platforms reward reach over quality
            and crush new voices before they can find their audience.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`gradient-border-card glow-card p-8 overflow-hidden transition-all duration-500 ${
                isVisible ? "reveal-visible" : "initially-hidden"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Ghost index number — signature typographic accent */}
              <span className="card-index-ghost">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-2xl ${problem.bg} border ${problem.border} flex items-center justify-center mb-6`}
              >
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="relative z-10 text-foreground/60 leading-relaxed text-sm">
                {problem.description}
              </p>

              {/* Bottom glow line */}
              <div
                className="relative z-10 mt-8 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${problem.glow} 0%, transparent 100%)`,
                  opacity: 0.7,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
