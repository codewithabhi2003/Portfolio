import { useRef } from "react";
import FadeIn from "./FadeIn";
import CodeBlock, { type CodeLine } from "./CodeBlock";
import profilePhoto from "@/assets/profile-photo.png";

const ABOUT_JSON: CodeLine[] = [
  { indent: 0, content: <>{"{"}</> },
  { indent: 1, content: <><span className="tok-key">"name"</span><span className="tok-punct">:</span> <span className="tok-string">"Abhishek Vishwakarma"</span>,</> },
  { indent: 1, content: <><span className="tok-key">"location"</span><span className="tok-punct">:</span> <span className="tok-string">"Mumbai, India"</span>,</> },
  { indent: 1, content: <><span className="tok-key">"education"</span><span className="tok-punct">:</span> <span className="tok-string">"BSc Information Technology"</span>,</> },
  { indent: 1, content: <><span className="tok-key">"college"</span><span className="tok-punct">:</span> <span className="tok-string">"L.S. Raheja College, Univ. of Mumbai"</span>,</> },
  { indent: 1, content: <><span className="tok-key">"cgpa"</span><span className="tok-punct">:</span> <span className="tok-string">"8.33 / 10"</span>,</> },
  { indent: 1, content: <><span className="tok-key">"role"</span><span className="tok-punct">:</span> <span className="tok-string">"Full-Stack Developer (MERN)"</span>,</> },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"status"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string text-primary">"open_to_opportunities"</span>
        <span className="inline-flex relative ml-2 -translate-y-px">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
      </>
    ),
  },
  { indent: 0, content: <>{"}"}</> },
];

const About = () => {
  const photoRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    const el = photoRef.current;
    if (!el) return;
    el.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <section id="about" className="section-container">
      <FadeIn>
        <span className="eyebrow">Get to know me</span>
        <h2 className="section-heading">About Me</h2>
      </FadeIn>

      <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start mt-4 min-w-0">
        <FadeIn delay={100} className="min-w-0">
          <div
            ref={photoRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative w-full max-w-[260px] mx-auto md:mx-0 aspect-[4/5] rounded-2xl overflow-hidden border border-border transition-transform duration-300 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={profilePhoto}
              alt="Abhishek Vishwakarma"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-2xl" />
          </div>
        </FadeIn>

        <div className="min-w-0">
          <FadeIn delay={160}>
            <p className="text-foreground leading-relaxed mb-4">
              I'm a{" "}
              <span className="text-primary font-medium">
                Full-Stack Developer
              </span>{" "}
              and BSc IT student who likes building things that actually run
              in production, not just in a portfolio. Frontend to database,
              I own the whole path.
            </p>
          </FadeIn>
          <FadeIn delay={220}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I enjoy building complete web applications — from frontend
              interfaces to backend APIs, databases, authentication,
              real-time communication, AI integrations, and cloud
              deployment. My experience comes from hands-on development of
              two live, deployed applications using the MERN stack.
            </p>
          </FadeIn>
          <FadeIn delay={280}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Right now I'm looking for a Full-Stack Developer role where I
              can ship production-ready features, take part in real code
              reviews, and grow inside a strong engineering team.
            </p>
          </FadeIn>

          <FadeIn delay={340} className="min-w-0">
            <CodeBlock filename="about.json" lines={ABOUT_JSON} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;

