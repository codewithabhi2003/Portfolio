import {
  Code2,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  Cloud,
} from "lucide-react";
import FadeIn from "./FadeIn";

type Tech = {
  name: string;
  badge: string;
};

type Category = {
  title: string;
  icon: typeof Code2;
  items: Tech[];
};

const categories: Category[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      { name: "React", badge: "Re" },
      { name: "JavaScript ES6+", badge: "JS" },
      { name: "TypeScript", badge: "TS" },
      { name: "Tailwind CSS", badge: "TW" },
      { name: "Redux Toolkit", badge: "RT" },
      { name: "Axios", badge: "AX" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", badge: "NO" },
      { name: "Express.js", badge: "EX" },
      { name: "REST APIs", badge: "{}" },
      { name: "Socket.io", badge: "IO" },
      { name: "JWT", badge: "JWT" },
      { name: "Mongoose", badge: "MS" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      { name: "MongoDB", badge: "MO" },
      { name: "Mongoose ODM", badge: "MS" },
      { name: "Aggregation", badge: "AG" },
      { name: "Indexing", badge: "IX" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    items: [
      { name: "Git", badge: "GI" },
      { name: "GitHub", badge: "GH" },
      { name: "Docker", badge: "DO" },
      { name: "GitHub Actions", badge: "CI" },
      { name: "Vercel", badge: "VE" },
      { name: "Render", badge: "RN" },
    ],
  },
  {
    title: "AI & Integrations",
    icon: BrainCircuit,
    items: [
      { name: "Google Gemini", badge: "GE" },
      { name: "Groq · LLaMA", badge: "GR" },
      { name: "Cloudinary", badge: "CL" },
      { name: "Razorpay", badge: "RZ" },
      { name: "Postman", badge: "PO" },
    ],
  },
  {
    title: "Cloud & Services",
    icon: Cloud,
    items: [
      { name: "Vercel", badge: "VE" },
      { name: "Render", badge: "RN" },
      { name: "Cloudinary", badge: "CL" },
      { name: "Razorpay", badge: "RZ" },
      { name: "GitHub Actions", badge: "GH" },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="stack"
      className="section-container"
    >
      {/* =========================================
          HEADER
      ========================================== */}

      <FadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow justify-center">
            Tech Stack
          </span>

          <h2 className="section-heading">
            My Tech{" "}
            <span className="text-gradient">
              Stack
            </span>
          </h2>

          <p className="section-sub mx-auto">
            The technologies I actually use to build,
            integrate, deploy, and maintain full-stack
            applications.
          </p>
        </div>
      </FadeIn>

      {/* =========================================
          TECHNOLOGY GRID
      ========================================== */}

      <div
        className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          mt-10
        "
      >
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <FadeIn
              key={category.title}
              delay={index * 70}
            >
              <div
                className="
                  group
                  relative
                  h-full
                  rounded-2xl
                  border
                  border-border
                  bg-card/40
                  backdrop-blur-sm
                  p-6
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-card/60
                "
              >
                {/* Subtle orange glow */}

                <div
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-40
                    h-40
                    rounded-full
                    bg-primary/[0.06]
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                />

                {/* =====================================
                    CATEGORY HEADER
                ====================================== */}

                <div className="relative flex items-start gap-4 mb-6">
                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-full
                      flex
                      items-center
                      justify-center
                      border
                      border-primary/30
                      bg-primary/[0.08]
                      text-primary
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {category.title}
                    </h3>

                    <div className="mt-2 h-px w-9 bg-primary" />
                  </div>
                </div>

                {/* =====================================
                    TECHNOLOGY ITEMS
                ====================================== */}

                <div
                  className="
                    relative
                    grid
                    grid-cols-2
                    gap-3
                  "
                >
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        group/item
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-border/70
                        bg-background/40
                        px-3
                        py-3
                        transition-all
                        duration-200
                        hover:border-primary/25
                        hover:bg-primary/[0.04]
                      "
                    >
                      {/* Badge */}

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-primary/20
                          bg-primary/[0.08]
                          font-mono
                          text-[9px]
                          font-bold
                          text-primary
                          transition-transform
                          duration-200
                          group-hover/item:scale-105
                        "
                      >
                        {tech.badge}
                      </span>

                      {/* Name */}

                      <span className="min-w-0 text-xs text-foreground truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* =========================================
          DEVELOPER PHILOSOPHY
      ========================================== */}

      <FadeIn delay={420}>
        <div
          className="
            relative
            mt-6
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-card/40
            backdrop-blur-sm
          "
        >
          {/* Background glow */}

          <div
            className="
              absolute
              left-1/4
              top-1/2
              -translate-y-1/2
              w-72
              h-72
              rounded-full
              bg-primary/[0.04]
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              relative
              grid
              md:grid-cols-2
              divide-y
              md:divide-y-0
              md:divide-x
              divide-border
            "
          >
            {/* Code */}

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-lg
                    border
                    border-primary/30
                    bg-primary/[0.07]
                    flex
                    items-center
                    justify-center
                    text-primary
                  "
                >
                  <Code2 size={18} />
                </div>

                <div className="font-mono text-sm leading-7">
                  <div>
                    <span className="text-primary">
                      const
                    </span>{" "}
                    <span className="text-foreground">
                      developer
                    </span>{" "}
                    = {"{"}
                  </div>

                  <div className="pl-4">
                    <span className="text-muted-foreground">
                      mindset:
                    </span>{" "}
                    <span className="text-primary">
                      "build useful things"
                    </span>
                    ,
                  </div>

                  <div className="pl-4">
                    <span className="text-muted-foreground">
                      focus:
                    </span>{" "}
                    <span className="text-primary">
                      "clean code"
                    </span>
                    ,
                  </div>

                  <div className="pl-4">
                    <span className="text-muted-foreground">
                      goal:
                    </span>{" "}
                    <span className="text-primary">
                      "solve real problems"
                    </span>
                  </div>

                  <div>
                    {"}"}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}

            <div className="p-6 sm:p-8 flex items-center">
              <div>
                <span className="block text-4xl leading-none text-primary mb-2">
                  “
                </span>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  I don't just use technologies.
                  <br />

                  I use the{" "}
                  <span className="text-primary font-medium">
                    right tools
                  </span>{" "}
                  for the{" "}
                  <span className="text-foreground">
                    right problems.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default TechStack;