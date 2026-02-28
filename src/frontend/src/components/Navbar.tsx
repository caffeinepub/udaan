import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Join", href: "#join" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2.5 group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="/assets/generated/udaan-logo-transparent.dim_200x200.png"
            alt="Udaan"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold tracking-tight gradient-text">
            Udaan
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-udaan-violet-light"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => handleNavClick("#join")}
            className="gradient-primary text-white font-semibold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity border-0"
          >
            Join Early Access
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden glass-nav border-t border-white/5 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-base font-medium text-foreground/80 hover:text-foreground py-1"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                onClick={() => handleNavClick("#join")}
                className="w-full gradient-primary text-white font-semibold rounded-full border-0"
              >
                Join Early Access
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
