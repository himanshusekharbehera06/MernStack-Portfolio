import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-dark/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-20 items-center justify-between">
        <a href="#home" className="text-xl sm:text-2xl font-bold tracking-wide">
          <span className="gradient-text">Himanshu</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="/resume/Himanshu_Sekhar_Behera_Resume.docx" className="btn-primary">
            <Download size={18} className="mr-2" />
            Resume
          </a>
        </nav>

        <button
          className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-dark/95 backdrop-blur-xl">
          <div className="section-container py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/85 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/resume/Himanshu_Sekhar_Behera_Resume.docx" className="btn-primary w-full mt-2">
              <Download size={18} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}