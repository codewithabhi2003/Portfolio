import { Github, Linkedin, Download, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl bg-primary" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-5 blur-3xl bg-primary" />

      <div className="section-container flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <FadeIn>
            <p className="font-mono text-primary text-sm mb-4">Hi, my name is</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Abhishek Vishwakarma
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
              Full-Stack Developer
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-muted-foreground max-w-lg leading-relaxed mb-8">
              Building scalable web applications with the MERN stack. Passionate about clean code, great UX, and solving real-world problems.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/resum1.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 hover:scale-105"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="https://resume-iota-rust.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-200 hover:scale-105"
              >
                <ExternalLink size={18} />Resume
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="flex gap-5 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/codewithabhi2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-vishwakarma-47a43828b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="flex-shrink-0">
          <div className="relative group">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
              <img
                src={profilePhoto}
                alt="Abhishek Vishwakarma"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
