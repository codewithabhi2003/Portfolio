import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./FadeIn";
import projectJobPortal from "@/assets/project-jobportal.png";
import projectReWear from "@/assets/project-rewear.png";

const projects = [
  {
    image: projectReWear,
    alt: "ReWear Fashion Marketplace",
    label: "Featured Project",
    title: "ReWear – AI Fashion Marketplace",
    description:
      "A production-grade MERN marketplace with hybrid AI integration — Groq (LLaMA 3.1) for text and Google Gemini for vision-based resale price estimation. Features real-time Socket.io chat, in-chat price negotiation engine, Razorpay payments with HMAC verification, and role-based access control.",
    features: [
      "MERN Stack",
      "Groq + Gemini AI",
      "Socket.io Real-Time",
      "Razorpay + HMAC",
      "JWT Authentication",
      "RBAC",
      "Cloudinary",
      "GitHub Actions CI/CD",
    ],
    live: "https://rewear-dusky.vercel.app/",
    github: "https://github.com/codewithabhi2003/rewear",
    reverse: false,
  },
  {
    image: projectJobPortal,
    alt: "Job Portal Application",
    label: "Full Stack Project",
    title: "Job Portal",
    description:
      "A full-stack MERN application with RBAC across 2 roles (Recruiter, Job Seeker) — 15+ RESTful APIs on MVC architecture with JWT authentication, dynamic job filtering, Cloudinary resume storage, recruiter dashboard with real-time stats, and CI/CD via GitHub Actions.",
    features: [
      "MERN Stack",
      "JWT Authentication",
      "Role-Based Access Control",
      "15+ REST APIs",
      "MVC Architecture",
      "Cloudinary",
      "GitHub Actions CI/CD",
      "Responsive UI",
    ],
    live: "https://jobportal-frontend-ten.vercel.app/",
    github: "https://github.com/codewithabhi2003/JOB-PORTAL",
    reverse: true,
  },
];

// Laptop frame wrapper component
const LaptopFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full flex items-center justify-center p-4 md:p-6">
    {/* Laptop outer body */}
    <div className="relative w-full max-w-lg">
      {/* Screen bezel */}
      <div
        className="relative w-full rounded-t-xl overflow-hidden"
        style={{
          background: "#1a1a1a",
          padding: "10px 10px 0 10px",
          boxShadow: "0 0 0 2px #333, 0 -2px 8px rgba(0,0,0,0.5)",
        }}
      >
        {/* Camera dot */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{ background: "#444", zIndex: 10 }}
        />
        {/* Screen content */}
        <div
          className="w-full overflow-hidden rounded-t-lg"
          style={{ aspectRatio: "16/10", background: "#000" }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      {/* Laptop base / hinge */}
      <div
        style={{
          background: "linear-gradient(to bottom, #2a2a2a, #1f1f1f)",
          height: "12px",
          borderRadius: "0 0 4px 4px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
        }}
      />

      {/* Laptop bottom / trackpad area */}
      <div
        style={{
          background: "linear-gradient(to bottom, #222, #1a1a1a)",
          height: "28px",
          borderRadius: "0 0 12px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        }}
      >
        {/* Trackpad */}
        <div
          style={{
            width: "60px",
            height: "12px",
            background: "#2e2e2e",
            borderRadius: "4px",
            border: "1px solid #3a3a3a",
          }}
        />
      </div>

      {/* Bottom shadow */}
      <div
        style={{
          height: "6px",
          background: "rgba(0,0,0,0.15)",
          borderRadius: "50%",
          filter: "blur(6px)",
          marginTop: "4px",
          width: "90%",
          marginLeft: "5%",
        }}
      />
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <FadeIn>
        <h2 className="section-heading">Projects</h2>
      </FadeIn>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 150}>
            <div className="glass-card overflow-hidden !p-0">
              <div
                className={`md:flex items-center ${
                  project.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Laptop frame side */}
                <div className="md:w-1/2 bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center">
                  <LaptopFrame src={project.image} alt={project.alt} />
                </div>

                {/* Content side */}
                <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                  <p className="font-mono text-primary text-sm mb-2">
                    {project.label}
                  </p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-secondary text-primary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;