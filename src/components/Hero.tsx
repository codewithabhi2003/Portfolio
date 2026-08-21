import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";
import FadeIn from "./FadeIn";

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
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full opacity-[0.12] blur-[120px] bg-primary pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full opacity-[0.10] blur-[120px] bg-accent pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container !py-0 grid md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">

        {/* ================= LEFT CONTENT ================= */}
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
              <span className="text-gradient">
                real backend systems
              </span>{" "}
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

          {/* CTA buttons */}
          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">

              <a
                href="#projects"
                className="btn-primary"
              >
                See the work
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="btn-outline"
              >
                <Mail size={16} />
                Let's talk
              </a>

              <a
                href="/Abhishek%20Vishwakarma%20%E2%80%93%20Full%20Stack%20Developer.pdf"
                download="Abhishek Vishwakarma – Full Stack Developer.pdf"
                className="btn-outline"
              >
                <Download size={16} />
                Resume
              </a>

            </div>
          </FadeIn>

          {/* Social links */}
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

          {/* Stats */}
          <FadeIn delay={360}>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto md:mx-0 border-t border-border pt-6">

              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center md:text-left"
                >
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

        {/* ================= RIGHT AVATAR ================= */}
        <div className="order-1 md:order-2 relative h-[360px] sm:h-[460px] md:h-[560px] flex items-end justify-center">

          {/* Main orange glow */}
          <div
            className="
              absolute
              bottom-[8%]
              left-1/2
              -translate-x-1/2
              w-[18rem]
              h-[18rem]
              md:w-[25rem]
              md:h-[25rem]
              rounded-full
              bg-primary
              opacity-[0.16]
              blur-[100px]
              pointer-events-none
            "
          />

          {/* Decorative ring */}
          <div
            className="
              absolute
              bottom-[8%]
              left-1/2
              -translate-x-1/2
              w-[18rem]
              h-[18rem]
              md:w-[27rem]
              md:h-[27rem]
              rounded-full
              border
              border-primary/20
              pointer-events-none
            "
          />

          {/* Secondary ring */}
          <div
            className="
              absolute
              bottom-[14%]
              left-1/2
              -translate-x-1/2
              w-[14rem]
              h-[14rem]
              md:w-[21rem]
              md:h-[21rem]
              rounded-full
              border
              border-primary/10
              pointer-events-none
            "
          />

          {/* Avatar */}
          <FadeIn delay={180}>
            <div className="relative h-full flex items-end justify-center">

              <img
                src="/avtar.png"
                alt="Abhishek Vishwakarma"
                className="
                  relative
                  z-10
                  h-[350px]
                  sm:h-[450px]
                  md:h-[560px]
                  w-auto
                  max-w-none
                  object-contain
                  object-bottom
                  drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]
                "
              />

            </div>
          </FadeIn>

          {/* Floating skill card — React */}
          <div
            className="
              absolute
              top-[18%]
              left-[2%]
              md:left-[4%]
              z-20
              hidden sm:flex
              items-center gap-2
              px-4 py-3
              rounded-xl
              border border-border
              bg-background/70
              backdrop-blur-xl
              shadow-xl
              animate-[float_5s_ease-in-out_infinite]
            "
          >
            <span className="text-primary font-bold text-lg">
              ⚛
            </span>

            <div>
              <p className="text-xs font-medium">
                React
              </p>

              <p className="text-[10px] text-muted-foreground">
                Frontend
              </p>
            </div>
          </div>

          {/* Floating skill card — Node */}
          <div
            className="
              absolute
              top-[35%]
              right-[0%]
              md:right-[2%]
              z-20
              hidden sm:flex
              items-center gap-2
              px-4 py-3
              rounded-xl
              border border-border
              bg-background/70
              backdrop-blur-xl
              shadow-xl
              animate-[float_6s_ease-in-out_infinite]
            "
          >
            <span className="text-primary font-bold text-lg">
              ◉
            </span>

            <div>
              <p className="text-xs font-medium">
                Node.js
              </p>

              <p className="text-[10px] text-muted-foreground">
                Backend
              </p>
            </div>
          </div>

          {/* Floating AI card */}
          <div
            className="
              absolute
              bottom-[18%]
              right-[5%]
              md:right-[8%]
              z-20
              hidden sm:block
              px-4 py-3
              rounded-xl
              border border-primary/20
              bg-background/70
              backdrop-blur-xl
              shadow-xl
            "
          >
            <p className="text-[10px] uppercase tracking-widest text-primary font-mono">
              AI
            </p>

            <p className="text-xs font-medium mt-1">
              Gemini + Groq
            </p>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="
          hidden md:flex
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-muted-foreground
          hover:text-primary
          transition-colors
          z-10
        "
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