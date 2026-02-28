import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DollarSign, Star, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Grow Your Audience",
    description:
      "Reach genuine followers who actually care about your content. Build a real community, not just inflated numbers. Our AI matches your content to people who love your niche.",
    highlight: "Real Followers, Not Bots",
    color: "text-violet-400",
    iconBg: "bg-violet-500/15",
    iconBorder: "border-violet-500/25",
  },
  {
    icon: Star,
    title: "Get Recognized",
    description:
      "Earn exclusive badges, climb creator leaderboards, and unlock special ranks that showcase your growth journey. Your effort gets seen and celebrated.",
    highlight: "Badges & Leaderboards",
    color: "text-amber-400",
    iconBg: "bg-amber-500/15",
    iconBorder: "border-amber-500/25",
  },
  {
    icon: DollarSign,
    title: "Monetize Your Passion",
    description:
      "Coins, content boosts, and future brand deal opportunities for top creators. Turn your creativity into a real income stream.",
    highlight: "Creator Economy",
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-500/25",
  },
];

const stats = [
  { value: "10,000+", label: "Beta Spots" },
  { value: "5+", label: "Regional Languages" },
  { value: "AI-Powered", label: "Visibility Engine" },
  { value: "100%", label: "Fair Algorithm" },
];

export function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section
      id="benefits"
      className="py-24 sm:py-32 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 ${isVisible ? "reveal-visible" : "initially-hidden"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-7">
            <span>Creator Benefits</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.022em] leading-[1.07] mb-6">
            Built for India's{" "}
            <span className="gradient-text">Next Creator Wave</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Whether you're a student in Patna or a micro-influencer in
            Coimbatore — Udaan is your launchpad.
          </p>
        </div>

        {/* Benefits cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative p-8 rounded-2xl gradient-border-card glow-card transition-all duration-500 ${
                isVisible ? "reveal-visible" : "initially-hidden"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${benefit.iconBg} border ${benefit.iconBorder} flex items-center justify-center mb-6`}
              >
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>

              {/* Highlight badge */}
              <div
                className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${benefit.iconBg} ${benefit.color} mb-4`}
              >
                {benefit.highlight}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`relative p-8 sm:p-10 rounded-2xl overflow-hidden ${statsVisible ? "reveal-visible" : "initially-hidden"}`}
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.018 285 / 0.9), oklch(0.15 0.025 285 / 0.9))",
            border: "1px solid oklch(0.62 0.22 290 / 0.2)",
            boxShadow:
              "0 0 60px oklch(0.62 0.22 290 / 0.1), 0 0 120px oklch(0.58 0.2 245 / 0.05)",
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.22 290 / 0.15) 0%, transparent 50%, oklch(0.58 0.2 245 / 0.15) 100%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
