import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Users, Zap } from "lucide-react";

const socialProofBadges = [
  { icon: Users, label: "1000+ Creators Joined", delay: "delay-400" },
  { icon: Sparkles, label: "AI-Powered", delay: "delay-500" },
  { icon: Shield, label: "Fair Visibility", delay: "delay-600" },
  { icon: Zap, label: "Earn While Creating", delay: "delay-700" },
];

interface HeroSectionProps {
  onJoinClick: () => void;
}

export function HeroSection({ onJoinClick }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/udaan-hero-bg.dim_1400x800.jpg"
          alt="Udaan Hero"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-udaan-bg-deep/80 via-udaan-bg-deep/70 to-udaan-bg-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-udaan-bg-deep/60 via-transparent to-udaan-bg-deep/60" />
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.62 0.22 290 / 0.4) 0%, oklch(0.58 0.2 245 / 0.2) 50%, transparent 80%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 float-slow pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.22 290) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full opacity-10 float-slow pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, oklch(0.58 0.2 245) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-headline badge */}
        <div className="initially-hidden animate-fade-in-up delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-udaan-violet/30 bg-udaan-violet/10 text-sm font-medium text-udaan-violet-light mb-8">
          <Sparkles className="w-4 h-4" />
          <span>India's First AI-Powered Creator Economy Platform</span>
        </div>

        {/* Main headline */}
        <h1 className="initially-hidden animate-fade-in-up delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.025em] leading-[1.04] mb-7">
          <span className="text-foreground">Your Content</span>
          <br />
          <span className="gradient-text">Deserves to Be Seen</span>
        </h1>

        {/* Subheadline */}
        <p className="initially-hidden animate-fade-in-up delay-300 text-lg sm:text-xl text-foreground/65 max-w-2xl mx-auto leading-relaxed mb-11">
          Udaan's AI-powered visibility engine gives every creator a fair shot—
          earn coins through real engagement and boost your content organically
          to the audience that matters.
        </p>

        {/* CTA Buttons */}
        <div className="initially-hidden animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            onClick={onJoinClick}
            size="lg"
            className="gradient-primary text-white font-bold px-8 py-4 rounded-full text-base border-0 glow-violet hover:opacity-90 transition-all duration-200 shadow-glow w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Join Early Access
          </Button>
          <Button
            onClick={onJoinClick}
            size="lg"
            variant="outline"
            className="bg-transparent text-foreground font-bold px-8 py-4 rounded-full text-base border border-udaan-violet/40 hover:border-udaan-violet hover:bg-udaan-violet/10 transition-all duration-200 w-full sm:w-auto"
          >
            Become a Founding Creator
          </Button>
        </div>

        {/* Social proof badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialProofBadges.map((badge) => (
            <div
              key={badge.label}
              className={`initially-hidden animate-fade-in-up ${badge.delay} flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80`}
            >
              <badge.icon className="w-4 h-4 text-udaan-violet-light" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-udaan-bg-deep to-transparent z-10 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-foreground/50 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-foreground/30 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 rounded-full bg-udaan-violet"
            style={{ animation: "floatSlow 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
