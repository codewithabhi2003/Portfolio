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
    accent: "#ff6a2c",
  },
];

/* =========================================================
   BROWSER FRAME
========================================================= */

const BrowserFrame = ({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: string;
}) => {
  return (
    <div className="w-full">
      {/* Browser header */}
      <div
        className="
          rounded-t-xl
          overflow-hidden
          border
          border-b-0
        "
        style={{
          borderColor: `${accent}33`,
          background: "#0a0c12",
        }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3">
          {/* Browser dots */}

          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />

          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />

          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />

          {/* Fake address bar */}

          <div
            className="
              ml-3
              h-5
              flex-1
              rounded-md
              bg-white/[0.04]
              border
              border-white/[0.04]
            "
          />
        </div>
      </div>

      {/* 16:9 project screenshot */}

      <div
        className="
          overflow-hidden
          border
          rounded-b-xl
          w-full
          aspect-video
          bg-background
        "
        style={{
          borderColor: `${accent}33`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="
            w-full
            h-full
            object-cover
            object-top
            transition-transform
            duration-500
            hover:scale-[1.02]
          "
          loading="lazy"
        />
      </div>
    </div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  /* -------------------------------------------------------
     Mouse tilt
  ------------------------------------------------------- */

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const el = cardRef.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `
      perspective(1200px)
      rotateY(${x * 4}deg)
      rotateX(${-y * 4}deg)
    `;
  };

  /* -------------------------------------------------------
     Reset tilt
  ------------------------------------------------------- */

  const handleLeave = () => {
    const el = cardRef.current;

    if (!el) return;

    el.style.transform = `
      perspective(1200px)
      rotateY(0deg)
      rotateX(0deg)
    `;
  };

  return (
    <FadeIn delay={index * 150}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="
          glass-card
          overflow-hidden
          !p-0
          w-full
          transition-transform
          duration-300
          ease-out
        "
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={`
            md:flex
            items-stretch
            ${
              index % 2 === 1
                ? "md:flex-row-reverse"
                : ""
            }
          `}
        >
          {/* =================================================
              PROJECT PREVIEW
          ================================================= */}

          <div
            className="
              md:w-[58%]
              flex
              items-center
              justify-center
              p-5
              md:p-8
              lg:p-10
            "
            style={{
              background: `
                radial-gradient(
                  ellipse at center,
                  ${project.accent}12,
                  transparent 70%
                )
              `,
            }}
          >
            <BrowserFrame
              src={project.image}
              alt={project.alt}
              accent={project.accent}
            />
          </div>

          {/* =================================================
              PROJECT INFORMATION
          ================================================= */}

          <div
            className="
              p-6
              md:p-8
              lg:p-10
              md:w-[42%]
              flex
              flex-col
              justify-center
            "
          >
            {/* Label */}

            <p
              className="
                font-mono
                text-xs
                mb-2
              "
              style={{
                color: project.accent,
              }}
            >
              {project.label}
            </p>

            {/* Title */}

            <h3
              className="
                font-display
                text-2xl
                md:text-3xl
                font-semibold
                mb-1
              "
            >
              {project.title}
            </h3>

            {/* Tagline */}

            <p
              className="
                text-sm
                text-muted-foreground
                mb-5
              "
            >
              {project.tagline}
            </p>

            {/* Description */}

            <p
              className="
                text-muted-foreground
                text-sm
                leading-relaxed
                mb-6
              "
            >
              {project.description}
            </p>

            {/* =================================================
                FEATURE CHIPS
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                gap-2
                mb-7
              "
            >
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="chip"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="flex flex-wrap gap-3">
              {/* Live */}

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-primary
                  !py-2.5
                  !px-5
                  text-sm
                "
              >
                <ExternalLink size={16} />
                Live Demo
              </a>

              {/* GitHub */}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-outline
                  !py-2.5
                  !px-5
                  text-sm
                "
              >
                <Github size={16} />
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-container"
    >
      {/* ===================================================
          HEADER
      =================================================== */}

      <FadeIn>
        <span className="eyebrow">
          Selected work
        </span>

        <h2 className="section-heading">
          Featured Projects
        </h2>

        <p className="section-sub">
          Two production apps, both deployed and both
          still running — not Lorem-ipsum mockups.
        </p>
      </FadeIn>

      {/* ===================================================
          PROJECT LIST
      =================================================== */}

      <div className="flex flex-col gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;