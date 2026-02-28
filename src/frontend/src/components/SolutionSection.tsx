import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Coins, Languages, Rocket, Trophy } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Fair Visibility Engine",
    description:
      "Our smart algorithm surfaces quality content regardless of follower count. Your best work gets seen — every time.",
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/25",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
  },
  {
    icon: Coins,
    title: "Earn Coins for Engagement",
    description:
      "Get rewarded every time someone watches, likes, shares, or comments. Real engagement = real rewards that matter.",
    gradient: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/25",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15",
  },
  {
    icon: Rocket,
    title: "Organic Content Boost",
    description:
      "Spend your earned coins to boost your content to the right audience. Organic reach, not paid ads.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/25",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
  {
    icon: Trophy,
    title: "Gamified Levels & Rewards",
    description:
      "Rise through creator levels, earn exclusive badges, and climb leaderboards. Your journey gets recognized.",
    gradient: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/25",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/15",
  },
  {
    icon: Languages,
    title: "Regional Creator Focus",
    description:
      "Full support for Hindi, Tamil, Bengali, Telugu, Marathi, and more. India's diversity is our strength.",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/25",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
];

export function SolutionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="features"
      className="py-28 sm:py-36 relative overflow-hidden section-tinted"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.22 290 / 0.3) 0%, oklch(0.58 0.2 245 / 0.15) 50%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 ${isVisible ? "reveal-visible" : "initially-hidden"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-udaan-violet/30 bg-udaan-violet/10 text-xs font-bold uppercase tracking-widest text-udaan-violet-light mb-7">
            <span>The Solution</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.022em] leading-[1.07] mb-6">
            Udaan <span className="gradient-text">Changes Everything</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Five pillars that power a completely fair, rewarding creator
            ecosystem. Built for real creators, not just big names.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
          {/* Last 2 centered */}
          <div className="sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:px-24">
            {features.slice(3).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index + 3}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
  isVisible,
}: {
  feature: (typeof features)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative p-7 rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.gradient} backdrop-blur-sm glow-card transition-all duration-500 ${
        isVisible ? "reveal-visible" : "initially-hidden"
      }`}
      style={{ animationDelay: `${0.05 + index * 0.1}s` }}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl ${feature.iconBg} border ${feature.border} flex items-center justify-center mb-5`}
      >
        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
      </div>

      <h3 className="text-lg font-bold text-foreground mb-3">
        {feature.title}
      </h3>
      <p className="text-foreground/60 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
