import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { lazy, Suspense } from "react";
import FadeIn from "./FadeIn";

const HeroScene = lazy(() => import("./three/HeroScene"));

const stats = [
  { value: "2+", label: "Live Projects" },
  { value: "15+", label: "REST APIs Built" },
  { value: "2", label: "AI Integrations" },
  { value: "8.33", label: "BSc IT CGPA" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ambient glows */}
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full opacity-[0.12] blur-[120px] bg-primary pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full opacity-[0.10] blur-[120px] bg-accent pointer-events-none" />

      <div className="section-container !py-0 grid md:grid-cols-2 gap-10 items-center relative z-10 w-full">
        <div className="text-center md:text-left order-2 md:order-1">
          <FadeIn>
            <span className="eyebrow justify-center md:justify-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to full-stack roles
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.06] mb-6">
              I build web apps with{" "}
              <span className="text-gradient">real backend systems</span>{" "}
              behind them.
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed mb-8">
              MERN-stack developer from Mumbai. I ship production apps with
              real-time sockets, hybrid AI integrations, and verified payment
              flows — not just landing pages. Currently a BSc IT student,
              actively looking for a full-stack developer role.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                See the work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={16} /> Let's talk
              </a>
              <a
                href="/Abhishek%20%E2%80%93%20Associate%20Software%20Engineer.pdf"
                download
                className="btn-outline"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex items-center gap-5 justify-center md:justify-start mb-10">
              <a
                href="https://github.com/codewithabhi2003"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-vishwakarma-47a43828b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:abhishekvishwakarma1149@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={360}>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto md:mx-0 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <div className="font-display text-xl sm:text-2xl font-semibold text-heading">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="order-1 md:order-2 h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="font-mono text-xs text-muted-foreground animate-pulse-slow">
                  booting scene...
                </div>
              </div>
            }
          >
            <HeroScene />
          </Suspense>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </a>
    </section>
  );
};

export default Hero;
