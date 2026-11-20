import { useEffect, useRef, useState } from "react";
import { ArrowDown, ExternalLink, Github } from "lucide-react";
import FadeIn from "./FadeIn";
import projectIntellMeet from "@/assets/project-intellmeet.png";
import projectHermesX from "@/assets/project-hermesx.png";
import projectJobPortal from "@/assets/project-jobportal.png";
import projectReWear from "@/assets/project-rewear.png";

/* =========================================================
   DATA
========================================================= */

type Project = {
  image: string;
  alt: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  live: string;
  github?: string; // optional — the "Source" button is hidden when missing
  embed?: boolean; // default true — set false if the site blocks iframes
  accent: string;
};

const projects: Project[] = [
  {
    image: projectIntellMeet,
    alt: "IntellMeet AI meeting platform dashboard",
    label: "Live · AI meeting platform",
    title: "IntellMeet",
    tagline: "AI-powered meeting & collaboration",
    description:
      "A full-stack meeting platform with WebRTC rooms for up to 6 peers over 24 Socket.IO events, Groq Whisper transcription in English and Hindi, and Gemini translation and summaries. Hybrid RAG search fuses keyword and embedding results with Reciprocal Rank Fusion, with access control enforced inside the database query.",
    features: [
      "MERN + WebRTC",
      "Socket.IO",
      "Groq Whisper + Gemini",
      "Hybrid RAG search",
      "49 REST APIs",
      "31 test files",
    ],
    live: "https://intellmeet-zeta.vercel.app/",
    // github: "https://github.com/codewithabhi2003/<repo-name>",
    accent: "#ff6a2c",
  },

  {
    image: projectHermesX,
    alt: "HermesX customer feedback intelligence dashboard",
    label: "Live · Multi-tenant SaaS",
    title: "HermesX",
    tagline: "Customer feedback intelligence",
    description:
      "A multi-tenant Next.js 14 SaaS with Admin, Analyst and Viewer roles and tenant isolation across 25+ API endpoints. Groq classifies sentiment and themes, Cohere embeddings with pgvector power semantic search and the RAG-based Ask HermesX assistant, and CSV uploads of up to 1,000 records flow into analytics and Voice-of-Customer reports.",
    features: [
      "Next.js 14 + TypeScript",
      "PostgreSQL + pgvector",
      "Prisma",
      "Groq + Cohere",
      "NextAuth · RBAC",
      "Zod",
    ],
    live: "https://hermesx-wine.vercel.app/",
    // github: "https://github.com/codewithabhi2003/<repo-name>",
    accent: "#ff6a2c",
  },

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

const COUNT = projects.length;

/** How much scrolling (in vh) each project "costs" while the page is pinned. */
const SCROLL_PER_PROJECT = 60;

/** Pinned scroll mode only on roomy desktop screens; everything else gets the plain stacked list. */
const PIN_QUERY =
  "(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";

/** Size of the "virtual browser window" the live site renders in before being scaled down. */
const VIRTUAL_W = 1280;
const VIRTUAL_H = 720;

const pad = (n: number) => String(n).padStart(2, "0");

const hostOf = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

const usePinnedMode = () => {
  const [pinned, setPinned] = useState(
    () => typeof window !== "undefined" && window.matchMedia(PIN_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(PIN_QUERY);
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return pinned;
};

/* =========================================================
   BROWSER FRAME  (screenshot poster + live iframe)
========================================================= */

const BrowserFrame = ({
  src,
  alt,
  accent,
  live,
  embed = true,
  pinned = false,
  settled = true,
  load = true,
}: {
  src: string;
  alt: string;
  accent: string;
  live: string;
  embed?: boolean;
  pinned?: boolean;
  settled?: boolean;
  load?: boolean; // pinned mode: parent says when to start loading
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(0.4);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [mode, setMode] = useState<"live" | "shot">(() =>
    embed && typeof window !== "undefined" && window.innerWidth >= 768
      ? "live"
      : "shot"
  );

  /* Scale the 1280x720 virtual viewport to whatever width the frame has */
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / VIRTUAL_W));
    ro.observe(el);
    setScale(el.clientWidth / VIRTUAL_W);
    return () => ro.disconnect();
  }, []);

  /* Stacked mode: only load when the card nears the viewport */
  useEffect(() => {
    if (pinned) return;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pinned]);

  const shouldMount = embed && mode === "live" && (pinned ? load : inView);

  return (
    <div
      ref={rootRef}
      className={`w-full ${pinned ? "max-w-[620px] mx-auto" : ""}`}
    >
      {/* Browser header */}
      <div
        className="rounded-t-xl overflow-hidden border border-b-0"
        style={{ borderColor: `${accent}33`, background: "#0a0c12" }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />

          {/* Address bar */}
          <div className="ml-3 h-5 flex-1 min-w-0 rounded-md bg-white/[0.04] border border-white/[0.04] px-2 flex items-center">
            <span className="font-mono text-[10px] text-muted-foreground truncate">
              {hostOf(live)}
            </span>
          </div>

          {/* Live / Preview toggle */}
          {embed && (
            <div className="ml-2 flex rounded-md overflow-hidden border border-white/[0.06] font-mono text-[10px]">
              {(["live", "shot"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => {
                    setMode(m);
                    setInteractive(false);
                  }}
                  className={`px-2 py-0.5 transition-colors ${
                    mode === m
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === "live" ? "Live" : "Preview"}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 16:9 screen */}
      <div
        ref={screenRef}
        className="relative overflow-hidden border rounded-b-xl w-full aspect-video bg-background"
        style={{ borderColor: `${accent}33` }}
        onMouseLeave={() => setInteractive(false)}
      >
        {/* Screenshot — always present as poster / fallback */}
        <div
          className="absolute inset-0"
          style={
            pinned
              ? {
                  transform: settled ? "scale(1)" : "scale(1.08)",
                  transition: "transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
                }
              : undefined
          }
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Live site */}
        {shouldMount && (
          <>
            <iframe
              src={live}
              title={`${alt} — live`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 border-0 bg-white"
              style={{
                width: VIRTUAL_W,
                height: VIRTUAL_H,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                opacity: loaded ? 1 : 0,
                transition: "opacity 500ms ease",
                pointerEvents: interactive ? "auto" : "none",
              }}
            />

            {/* Click-to-interact overlay (keeps page scroll working) */}
            {!interactive && (
              <button
                type="button"
                onClick={() => setInteractive(true)}
                aria-label="Interact with live site"
                className="absolute inset-0 z-10 flex items-end justify-center pb-3 opacity-0 hover:opacity-100 focus-visible:opacity-100 transition-opacity bg-black/10"
              >
                <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-black/70 text-white border border-white/10">
                  Click to interact
                </span>
              </button>
            )}

            {/* Loading pill */}
            {!loaded && (
              <span className="absolute top-2 right-2 z-10 font-mono text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white animate-pulse">
                Loading live site…
              </span>
            )}
          </>
        )}
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
  pinned = false,
  active = true,
}: {
  project: Project;
  index: number;
  pinned?: boolean;
  active?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  /* Pinned mode: start loading the live site the first time this card is active */
  const [everActive, setEverActive] = useState(false);
  useEffect(() => {
    if (active) setEverActive(true);
  }, [active]);

  /* Mouse tilt */
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  };

  /* Reset tilt */
  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;

    el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  };

  /* A card that is scrolled away can't fire mouseleave — clear any leftover tilt */
  useEffect(() => {
    if (!active && cardRef.current) cardRef.current.style.transform = "";
  }, [active]);

  /* Staggered entrance for the text column (pinned mode only) */
  const reveal = (order: number): React.CSSProperties => {
    if (!pinned) return {};
    const delay = active ? 220 + order * 70 : 0;
    return {
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 500ms ease ${delay}ms, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    };
  };

  /* Preview slides in from the side it sits on (pinned mode only) */
  const previewStyle: React.CSSProperties = {
    background: `radial-gradient(ellipse at center, ${project.accent}12, transparent 70%)`,
    ...(pinned
      ? {
          opacity: active ? 1 : 0,
          transform: active
            ? "translateX(0)"
            : `translateX(${index % 2 === 0 ? "-28px" : "28px"})`,
          transition: `opacity 600ms ease ${active ? 100 : 0}ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${active ? 100 : 0}ms`,
        }
      : {}),
  };

  const card = (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`glass-card overflow-hidden !p-0 w-full transition-transform duration-300 ease-out ${
        pinned ? "h-full" : ""
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`md:flex items-stretch ${pinned ? "h-full" : ""} ${
          index % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* =================================================
            PROJECT PREVIEW
        ================================================= */}
        <div
          className={`md:w-[58%] flex items-center justify-center ${
            pinned ? "p-6" : "p-5 md:p-8 lg:p-10"
          }`}
          style={previewStyle}
        >
          <BrowserFrame
            src={project.image}
            alt={project.alt}
            accent={project.accent}
            live={project.live}
            embed={project.embed}
            pinned={pinned}
            settled={active}
            load={everActive}
          />
        </div>

        {/* =================================================
            PROJECT INFORMATION
        ================================================= */}
        <div
          className={`md:w-[42%] flex flex-col justify-center ${
            pinned ? "p-8" : "p-6 md:p-8 lg:p-10"
          }`}
        >
          <p
            className="font-mono text-xs mb-2"
            style={{ color: project.accent, ...reveal(0) }}
          >
            {project.label}
          </p>

          <h3
            className="font-display text-2xl md:text-3xl font-semibold mb-1"
            style={reveal(1)}
          >
            {project.title}
          </h3>

          <p
            className={`text-sm text-muted-foreground ${pinned ? "mb-4" : "mb-5"}`}
            style={reveal(2)}
          >
            {project.tagline}
          </p>

          <p
            className={`text-muted-foreground text-sm leading-relaxed ${
              pinned ? "mb-5" : "mb-6"
            }`}
            style={reveal(3)}
          >
            {project.description}
          </p>

          {/* Feature chips */}
          <div
            className={`flex flex-wrap gap-2 ${pinned ? "mb-6" : "mb-7"}`}
            style={reveal(4)}
          >
            {project.features.map((feature) => (
              <span key={feature} className="chip">
                {feature}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3" style={reveal(5)}>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2.5 !px-5 text-sm"
              >
                <Github size={16} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return pinned ? card : <FadeIn delay={index * 150}>{card}</FadeIn>;
};

/* =========================================================
   PINNED MODE — page holds still, projects change as you scroll
========================================================= */

const stageStyle = (i: number, active: number): React.CSSProperties => {
  const isActive = i === active;
  const offset = i < active ? -48 : 48; // past cards leave upward, upcoming ones wait below

  return {
    opacity: isActive ? 1 : 0,
    transform: isActive
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(0, ${offset}px, 0) scale(0.97)`,
    visibility: isActive ? "visible" : "hidden", // keeps hidden cards out of the tab order
    pointerEvents: isActive ? "auto" : "none",
    zIndex: isActive ? 10 : 0,
    transition: `opacity 600ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear ${
      isActive ? "0s" : "600ms"
    }`,
  };
};

const PinnedProjects = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = wrapRef.current;
      if (!el) return;

      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const progress = Math.min(
        1,
        Math.max(0, -el.getBoundingClientRect().top / total)
      );
      setActive(Math.min(COUNT - 1, Math.floor(progress * COUNT)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Jump to the middle of a project's scroll segment */
  const goTo = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;

    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: top + ((i + 0.5) / COUNT) * total,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ height: `${100 + COUNT * SCROLL_PER_PROJECT}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Ambient glow that drifts side to side with the layout */}
        <div
          className="absolute top-1/3 w-[30rem] h-[30rem] rounded-full bg-primary opacity-[0.08] blur-[120px] pointer-events-none"
          style={{
            left: active % 2 === 0 ? "-5%" : "55%",
            transition: "left 1000ms ease",
          }}
        />

        <div className="section-container !py-0 h-full relative z-10">
          <div className="h-full flex flex-col justify-center gap-5 pt-16">
            {/* Header + counter */}
            <div className="flex items-end justify-between gap-6 shrink-0">
              <div>
                <span className="eyebrow">Selected work</span>
                <h2 className="section-heading !mb-0">Featured Projects</h2>
              </div>

              <p className="font-mono text-sm text-muted-foreground tabular-nums pb-1">
                <span className="text-2xl font-semibold text-heading">
                  {pad(active + 1)}
                </span>
                <span className="mx-1">/</span>
                {pad(COUNT)}
              </p>
            </div>

            {/* Stage — every card is stacked here, only the active one is visible */}
            <div
              className="relative shrink-0"
              style={{
                height: "min(34rem, calc(100vh - 14.5rem))",
                minHeight: "25rem",
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className="absolute inset-0"
                  style={stageStyle(i, active)}
                >
                  <ProjectCard
                    project={project}
                    index={i}
                    pinned
                    active={i === active}
                  />
                </div>
              ))}
            </div>

            {/* Hint + progress tabs */}
            <div className="flex items-center justify-between gap-6 shrink-0">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <ArrowDown size={14} className="animate-bounce text-primary" />
                {active < COUNT - 1 ? "Scroll to explore" : "Keep scrolling to continue"}
              </div>

              <div className="flex items-center gap-3">
                {projects.map((p, i) => (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show ${p.title}`}
                    aria-current={i === active}
                    className="group w-24 text-left"
                  >
                    <span className="block h-[3px] rounded-full bg-border overflow-hidden">
                      <span
                        className="block h-full origin-left rounded-full bg-primary transition-transform duration-500"
                        style={{ transform: `scaleX(${i <= active ? 1 : 0})` }}
                      />
                    </span>
                    <span
                      className={`mt-2 block font-mono text-[11px] transition-colors ${
                        i === active
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {p.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   STACKED MODE — phones, tablets, short screens, reduced motion
========================================================= */

const StackedProjects = () => (
  <>
    <FadeIn>
      <span className="eyebrow">Selected work</span>

      <h2 className="section-heading">Featured Projects</h2>

      <p className="section-sub">
        Four production apps, all deployed and live — not Lorem-ipsum mockups.
      </p>
    </FadeIn>

    <div className="flex flex-col gap-8 mt-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </>
);

/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  const pinned = usePinnedMode();

  return (
    <section
      id="projects"
      className={pinned ? "relative" : "section-container"}
    >
      {pinned ? <PinnedProjects /> : <StackedProjects />}
    </section>
  );
};

export default Projects;