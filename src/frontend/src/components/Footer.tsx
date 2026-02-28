import { SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

const footerLinks = {
  Product: ["Features", "How It Works", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Contact", "FAQ", "Privacy Policy", "Terms of Service"],
};

const socialLinks = [
  { Icon: SiInstagram, href: "#", label: "Instagram" },
  { Icon: SiX, href: "#", label: "X (Twitter)" },
  { Icon: SiYoutube, href: "#", label: "YouTube" },
  { Icon: SiLinkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <footer className="relative border-t border-udaan-violet/10 overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px gradient-line w-full" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-udaan-bg-mid/50 to-udaan-bg-deep pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/generated/udaan-logo-transparent.dim_200x200.png"
                alt="Udaan"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold tracking-tight gradient-text">
                Udaan
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs mb-6">
              India's first AI-powered social media platform where every creator
              gets a fair shot at visibility and growth.
            </p>
            <p className="text-udaan-violet-light text-sm font-semibold mb-6">
              Made for India's Next Digital Stars ✨
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-udaan-bg-surface border border-udaan-violet/15 flex items-center justify-center text-foreground/50 hover:text-udaan-violet-light hover:border-udaan-violet/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            © {year} Udaan. All rights reserved.
          </p>
          <p className="text-xs text-foreground/30">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-udaan-violet-light/60 hover:text-udaan-violet-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.62 0.22 290 / 0.5), oklch(0.58 0.2 245 / 0.5), transparent)",
        }}
      />
    </footer>
  );
}
