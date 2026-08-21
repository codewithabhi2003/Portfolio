import FadeIn from "./FadeIn";
import CodeBlock, { type CodeLine } from "./CodeBlock";

const ABOUT_JSON: CodeLine[] = [
  {
    indent: 0,
    content: <>{"{"}</>,
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"name"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string">
          "Abhishek Vishwakarma"
        </span>
        ,
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"location"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string">
          "Mumbai, India"
        </span>
        ,
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"education"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string">
          "BSc Information Technology"
        </span>
        ,
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"college"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string">
          "L.S. Raheja College, Univ. of Mumbai"
        </span>
        ,
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"cgpa"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string">
          "8.33 / 10"
        </span>
        ,
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"role"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string">
          "Full-Stack Developer (MERN)"
        </span>
        ,
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"focus"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string">
          "Production-ready applications"
        </span>
        ,
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="tok-key">"status"</span>
        <span className="tok-punct">:</span>{" "}
        <span className="tok-string text-primary">
          "open_to_opportunities"
        </span>

        <span className="inline-flex relative ml-2 -translate-y-px">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-60" />

          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
      </>
    ),
  },
  {
    indent: 0,
    content: <>{"}"}</>,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        section-container
        w-full
        min-w-0
        overflow-hidden
      "
    >
      {/* =========================================
          HEADER
      ========================================== */}

      <FadeIn>
        <div className="w-full min-w-0">
          <span className="eyebrow">
            Get to know me
          </span>

          <h2 className="section-heading">
            About Me
          </h2>
        </div>
      </FadeIn>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div
        className="
          mt-6
          sm:mt-8

          grid
          grid-cols-1
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]

          gap-8
          sm:gap-10
          lg:gap-16

          items-start

          w-full
          min-w-0
        "
      >
        {/* =====================================
            LEFT — ABOUT TEXT
        ====================================== */}

        <div className="w-full min-w-0">
          <FadeIn delay={100}>
            <p
              className="
                text-base
                sm:text-lg
                text-foreground
                leading-7
                sm:leading-relaxed
                mb-5
                max-w-2xl
              "
            >
              I'm a{" "}
              <span className="text-primary font-medium">
                Full-Stack Developer
              </span>{" "}
              who enjoys building applications that
              actually work beyond the frontend.
            </p>
          </FadeIn>

          <FadeIn delay={160}>
            <p
              className="
                text-sm
                sm:text-base
                text-muted-foreground
                leading-6
                sm:leading-7
                mb-5
                max-w-2xl
              "
            >
              I work across the entire development stack —
              designing interfaces, building REST APIs,
              working with databases, implementing
              authentication, real-time communication,
              AI integrations, and deploying applications
              to the cloud.
            </p>
          </FadeIn>

          <FadeIn delay={220}>
            <p
              className="
                text-sm
                sm:text-base
                text-muted-foreground
                leading-6
                sm:leading-7
                mb-7
                sm:mb-8
                max-w-2xl
              "
            >
              Most of my experience comes from building
              real projects with the{" "}
              <span className="text-foreground font-medium">
                MERN stack
              </span>
              . I care about clean UI, maintainable code,
              reliable backend systems, and turning ideas
              into products people can actually use.
            </p>
          </FadeIn>

          {/* =====================================
              AVAILABILITY
          ====================================== */}

          <FadeIn delay={280}>
            <div
              className="
                flex
                items-center
                gap-3
                min-w-0
              "
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span
                  className="
                    animate-ping
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-primary
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    h-2.5
                    w-2.5
                    bg-primary
                  "
                />
              </span>

              <span
                className="
                  text-xs
                  sm:text-sm
                  text-muted-foreground
                  leading-5
                "
              >
                Currently open to Full-Stack opportunities
              </span>
            </div>
          </FadeIn>
        </div>

        {/* =====================================
            RIGHT — CODE PROFILE
        ====================================== */}

        <FadeIn
          delay={180}
          className="
            w-full
            min-w-0
            max-w-full
          "
        >
          <div className="relative w-full min-w-0 max-w-full">
            {/* Subtle glow */}

            <div
              className="
                absolute
                -inset-4
                sm:-inset-6
                rounded-full
                bg-primary/[0.035]
                blur-3xl
                pointer-events-none
              "
            />

            {/* Code wrapper */}

            <div
              className="
                relative
                w-full
                min-w-0
                max-w-full
                overflow-hidden
              "
            >
              <CodeBlock
                filename="about.json"
                lines={ABOUT_JSON}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;