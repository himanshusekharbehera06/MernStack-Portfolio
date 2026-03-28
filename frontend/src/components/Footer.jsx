import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold gradient-text">{personalInfo.name}</h3>
          <p className="mt-2 text-sm text-white/60">{personalInfo.role}</p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-white/50 text-center md:text-right">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}