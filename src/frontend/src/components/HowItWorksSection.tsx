import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Coins, Rocket, TrendingUp, Upload } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload",
    description:
      "Create and share your content in any regional language. Our AI processes and scores your content quality.",
    color: "text-violet-400",
    bg: "bg-violet-500/15",
    border: "border-violet-500/30",
    glow: "oklch(0.62 0.22 290 / 0.3)",
  },
  {
    number: "02",
    icon: Coins,
    title: "Earn",
    description:
      "Collect coins for every real engagement — watch time, likes, shares, and comments all count toward your balance.",
    color: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/30",
    glow: "oklch(0.75 0.19 60 / 0.3)",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Boost",
    description:
      "Spend coins to organically amplify your best content to the audiences who are most likely to love it.",
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
    glow: "oklch(0.58 0.2 245 / 0.3)",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow",
    description:
      "Level up, earn badges, unlock brand partnerships. Build a real creator career that's truly yours.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/30",
    glow: "oklch(0.68 0.18 165 / 0.3)",
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Tinted surface background for visual rhythm */}
      <div className="absolute inset-0 section-tinted opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 ${isVisible ? "reveal-visible" : "initially-hidden"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-udaan-blue/30 bg-udaan-blue/10 text-xs font-bold uppercase tracking-widest text-udaan-blue-light mb-7">
            <span>How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.022em] leading-[1.07] mb-6">
            Get Started in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From your first post to your first brand deal — here's the journey
            every Udaan creator takes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px z-0">
            <div
              className="mx-auto"
              style={{
                marginLeft: "12.5%",
                marginRight: "12.5%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, oklch(0.62 0.22 290 / 0.5) 20%, oklch(0.58 0.2 245 / 0.5) 50%, oklch(0.65 0.18 220 / 0.5) 80%, transparent)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative flex flex-col items-center text-center transition-all duration-500 ${
                  isVisible ? "reveal-visible" : "initially-hidden"
                }`}
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Step circle */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1`}
                  style={{
                    boxShadow: `0 0 28px ${step.glow}, 0 4px 16px oklch(0 0 0 / 0.3)`,
                  }}
                >
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                  {/* Step number badge */}
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-udaan-bg-deep border border-udaan-violet/30 flex items-center justify-center">
                    <span className="text-xs font-bold text-udaan-violet-light">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Step label */}
                <div
                  className={`text-xs font-bold uppercase tracking-widest ${step.color} mb-2`}
                >
                  Step {step.number}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
