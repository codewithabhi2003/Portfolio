import { ExternalLink, Github } from "lucide-react";
import FadeIn from "./FadeIn";
import projectImg from "@/assets/project-jobportal.png";

const features = [
  "MERN Stack",
  "JWT Authentication",
  "Role-Based Access Control",
  "REST APIs",
  "MVC Architecture",
  "Cloudinary Integration",
  "Deployed on Vercel",
  "Responsive UI",
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <FadeIn>
        <h2 className="section-heading">Projects</h2>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="glass-card overflow-hidden !p-0">
          <div className="md:flex">
            <div className="md:w-1/2 overflow-hidden">
              <img
                src={projectImg}
                alt="Job Portal Application"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
              <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold mb-4">Job Portal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A full-stack MERN application enabling employers to post listings and candidates to apply through a fully integrated, responsive interface with secure authentication and role-based access.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((f) => (
                  <span key={f} className="font-mono text-xs px-2.5 py-1 rounded bg-secondary text-primary">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://jobportal-frontend-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a
                  href="https://github.com/codewithabhi2003/JOB-PORTAL"
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
    </section>
  );
};

export default Projects;
