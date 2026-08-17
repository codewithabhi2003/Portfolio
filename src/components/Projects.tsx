import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./FadeIn";
import projectJobPortal from "@/assets/project-jobportal.png";
import projectReWear from "@/assets/project-rewear.png";

const projects = [
  {
    image: projectReWear,
    alt: "ReWear pre-loved fashion marketplace homepage",
    label: "Live · AI-powered marketplace",
    title: "ReWear",
    tagline: "Pre-loved fashion marketplace",
    description:
      "A real-time MERN marketplace with hybrid AI pricing — Groq (LLaMA 3.1) for text and Google Gemini for vision-based resale estimates, with 3-key rotation and a 2-model fallback chain for quota resilience. In-chat offer/counter-offer negotiation, Razorpay payments guarded by HMAC verification, and JWT-secured Socket.io chat.",
    features: [
      "MERN + Socket.io",
      "Groq + Gemini AI",
      "Razorpay + HMAC",
      "JWT · RBAC",
      "Cloudinary",
      "GitHub Actions CI/CD",
    ],
    live: "https://rewear-dusky.vercel.app/",
    github: "https://github.com/codewithabhi2003/rewear",
    accent: "#ff6a2c",
  },
  {
    image: projectJobPortal,
    alt: "Job Portal recruiter and job seeker dashboard",
    label: "Live · Full-stack MERN app",
    title: "Job Portal",
    tagline: "Recruiter & job-seeker platform",
    description:
      "A scalable MERN job portal with role-based access across recruiters and job seekers — 15+ REST APIs on an MVC architecture, JWT-protected routes, dynamic multi-parameter job filtering, and Cloudinary-backed resume storage with Multer validation.",
    features: [
      "MERN Stack",
      "15+ REST APIs",
      "JWT Auth · RBAC",
      "MVC Architecture",
      "Cloudinary + Multer",
      "GitHub Actions CI/CD",
    ],
    live: "https://jobportal-frontend-ten.vercel.app/",
    github: "https://github.com/codewithabhi2003/JOB-PORTAL",
    accent: "#33e0ff",
  },
];

const BrowserFrame = ({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: string;
}) => (
  <div className="w-full max-w-lg mx-auto">
    <div
      className="rounded-t-xl overflow-hidden border border-b-0"
      style={{ borderColor: `${accent}33`, background: "#0a0c12" }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>
    </div>
    <div
      className="overflow-hidden border rounded-b-xl"
      style={{ borderColor: `${accent}33`, aspectRatio: "16/10" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  </div>
);

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <FadeIn delay={index * 150}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="glass-card overflow-hidden !p-0 transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`md:flex items-stretch ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div
            className="md:w-1/2 flex items-center justify-center p-6 md:p-10"
            style={{
              background: `radial-gradient(ellipse at center, ${project.accent}12, transparent 70%)`,
            }}
          >
            <BrowserFrame
              src={project.image}
              alt={project.alt}
              accent={project.accent}
            />
          </div>

          <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-center">
            <p
              className="font-mono text-xs mb-2"
              style={{ color: project.accent }}
            >
              {project.label}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              {project.tagline}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {project.features.map((f) => (
                <span key={f} className="chip">
                  {f}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 !px-5 text-sm"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2.5 !px-5 text-sm"
              >
                <Github size={16} /> Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <FadeIn>
        <span className="eyebrow">Selected work</span>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-sub">
          Two production apps, both deployed and both still running — not
          Lorem-ipsum mockups.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
