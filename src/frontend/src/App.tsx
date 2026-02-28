import { Toaster } from "@/components/ui/sonner";
import { BenefitsSection } from "./components/BenefitsSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { Navbar } from "./components/Navbar";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { WaitlistSection } from "./components/WaitlistSection";

/** Thin gradient rule that creates visual breathing between sections */
function SectionBreak() {
  return (
    <div className="px-8 sm:px-16 lg:px-32">
      <div className="section-divider" />
    </div>
  );
}

function App() {
  const scrollToJoin = () => {
    const el = document.getElementById("join");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-udaan-bg-deep text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection onJoinClick={scrollToJoin} />
        <SectionBreak />
        <ProblemSection />
        <SolutionSection />
        <SectionBreak />
        <HowItWorksSection />
        <SectionBreak />
        <BenefitsSection />
        <SectionBreak />
        <WaitlistSection />
      </main>

      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}

export default App;
