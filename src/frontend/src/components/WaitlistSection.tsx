import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetTotalSignups, useSubmitEntry } from "@/hooks/useQueries";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  AlertCircle,
  CheckCircle,
  Flame,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useCallback, useState } from "react";

const TOTAL_BETA_SPOTS = 1000;

const creatorTypes = [
  "Student",
  "Micro-Influencer",
  "Content Creator",
  "Photographer",
  "Musician",
  "Comedian",
  "Other",
];

function launchConfetti() {
  const colors = [
    "#7c3aed",
    "#4f46e5",
    "#0ea5e9",
    "#10b981",
    "#f59e0b",
    "#ec4899",
  ];
  const particles = 60;

  for (let i = 0; i < particles; i++) {
    const el = document.createElement("div");
    el.className = "confetti-particle";
    const size = Math.random() * 8 + 4;
    el.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -20px;
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      animation-duration: ${Math.random() * 2 + 2}s;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

export function WaitlistSection() {
  const { ref, isVisible } = useScrollReveal();
  const { data: totalSignups } = useGetTotalSignups();
  const submitEntry = useSubmitEntry();

  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    creatorType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const signedUp = totalSignups ? Number(totalSignups) : 0;
  const spotsRemaining = Math.max(0, TOTAL_BETA_SPOTS - signedUp);
  const percentFull = Math.min(100, (signedUp / TOTAL_BETA_SPOTS) * 100);

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!form.city.trim()) errs.city = "City is required";
    if (!form.creatorType) errs.creatorType = "Please select a creator type";
    return errs;
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    try {
      await submitEntry.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        city: form.city.trim(),
        creatorType: form.creatorType,
      });
      setIsSuccess(true);
      launchConfetti();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (
        msg.toLowerCase().includes("duplicate") ||
        msg.toLowerCase().includes("already")
      ) {
        setSubmitError(
          "This email has already been registered. You're on the list!",
        );
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section
      id="join"
      className="py-24 sm:py-32 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background — stronger centred violet glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, oklch(0.62 0.22 290 / 0.11) 0%, oklch(0.58 0.2 245 / 0.05) 55%, transparent 75%)",
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-10 ${isVisible ? "reveal-visible" : "initially-hidden"}`}
        >
          {/* Scarcity badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full scarcity-badge text-amber-300 text-sm font-bold mb-6 animate-pulse-glow">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Limited Beta Access – Only First 1000 Creators</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.022em] leading-[1.07] mb-6">
            Claim Your <span className="gradient-text">Founding Spot</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            Be among the first creators to experience Udaan. Early access
            members get exclusive founding badges and bonus coins.
          </p>
        </div>

        {/* Live counter */}
        <div
          className={`mb-8 p-5 rounded-2xl gradient-border-card ${isVisible ? "reveal-visible" : "initially-hidden"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                {signedUp > 0 ? (
                  <>
                    <span className="font-bold text-foreground">
                      {signedUp.toLocaleString("en-IN")}
                    </span>{" "}
                    creators already joined
                  </>
                ) : (
                  "Be among the first to join"
                )}
              </span>
            </div>
            <span className="text-sm font-bold text-udaan-violet-light">
              {spotsRemaining > 0
                ? `${spotsRemaining.toLocaleString("en-IN")} spots left`
                : "All spots claimed!"}
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-udaan-bg-surface overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${Math.max(3, percentFull)}%`,
                background:
                  "linear-gradient(90deg, oklch(0.62 0.22 290), oklch(0.58 0.2 245))",
              }}
            />
          </div>
        </div>

        {/* Form card */}
        <div
          className={`p-8 sm:p-10 rounded-2xl gradient-border-card ${isVisible ? "reveal-visible" : "initially-hidden"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {isSuccess ? (
            <SuccessState name={form.name} />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="udaan-input"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="rahul@gmail.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="udaan-input"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="text-sm font-medium text-foreground/80"
                  >
                    City
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Patna, Lucknow, Coimbatore..."
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="udaan-input"
                    autoComplete="address-level2"
                  />
                  {errors.city && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Creator Type */}
                <div className="space-y-2">
                  <Label
                    htmlFor="creatorType"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Creator Type
                  </Label>
                  <Select
                    value={form.creatorType}
                    onValueChange={(val) => handleChange("creatorType", val)}
                  >
                    <SelectTrigger
                      id="creatorType"
                      className="udaan-input w-full"
                    >
                      <SelectValue placeholder="What type of creator are you?" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-udaan-violet/20">
                      {creatorTypes.map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          className="text-foreground/80 focus:text-foreground focus:bg-udaan-violet/10"
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.creatorType && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.creatorType}
                    </p>
                  )}
                </div>

                {/* Submit error */}
                {submitError && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={submitEntry.isPending}
                  className="w-full gradient-primary text-white font-bold py-4 rounded-xl text-base border-0 glow-violet hover:opacity-90 transition-all duration-200 mt-2"
                >
                  {submitEntry.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Claiming your spot...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Claim Your Spot
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-foreground/40">
                  By joining, you agree to receive updates about Udaan's launch.
                  No spam, ever.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SuccessState({ name }: { name: string }) {
  const firstName = name.split(" ")[0];

  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-emerald-400" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3">
        You're in, {firstName}! 🎉
      </h3>
      <p className="text-foreground/60 leading-relaxed mb-6">
        Welcome to the Udaan founding creator family. We'll notify you the
        moment beta access opens. Get ready to take flight!
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {["Founding Creator Badge", "500 Bonus Coins", "Early Access"].map(
          (perk) => (
            <div
              key={perk}
              className="px-4 py-1.5 rounded-full bg-udaan-violet/15 border border-udaan-violet/30 text-udaan-violet-light text-sm font-medium"
            >
              ✓ {perk}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
