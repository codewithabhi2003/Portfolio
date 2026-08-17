import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 relative overflow-hidden">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="font-display font-bold text-lg text-heading"
            >
              Abhishek Vishwakarma
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Full-Stack MERN Developer, Mumbai
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a
              href="https://github.com/codewithabhi2003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-vishwakarma-47a43828b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:abhishekvishwakarma1149@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Abhishek Vishwakarma — built with React, Tailwind & Three.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;
