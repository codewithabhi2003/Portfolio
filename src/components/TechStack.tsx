import FadeIn from "./FadeIn";

type Tech = { name: string; badge: string };

const categories: { title: string; accent: string; items: Tech[] }[] = [
  {
    title: "Frontend",
    accent: "#33e0ff",
    items: [
      { name: "React", badge: "Re" },
      { name: "TypeScript", badge: "Ts" },
      { name: "JavaScript ES6+", badge: "Js" },
      { name: "Tailwind CSS", badge: "Tw" },
      { name: "Axios", badge: "Ax" },
    ],
  },
  {
    title: "Backend",
    accent: "#ff6a2c",
    items: [
      { name: "Node.js", badge: "No" },
      { name: "Express.js", badge: "Ex" },
      { name: "Socket.io", badge: "Io" },
      { name: "REST APIs", badge: "Re" },
      { name: "JWT Auth", badge: "Jwt" },
    ],
  },
  {
    title: "Database",
    accent: "#4dff9a",
    items: [
      { name: "MongoDB", badge: "Mo" },
      { name: "Mongoose ODM", badge: "Ms" },
      { name: "SQL", badge: "Sq" },
      { name: "Aggregation", badge: "Ag" },
      { name: "Indexing", badge: "Ix" },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "#8b6bff",
    items: [
      { name: "AWS", badge: "Aws" },
      { name: "Docker", badge: "Do" },
      { name: "Vercel", badge: "Ve" },
      { name: "Render", badge: "Rn" },
      { name: "GitHub Actions", badge: "Gh" },
    ],
  },
  {
    title: "AI & APIs",
    accent: "#ff6a2c",
    items: [
      { name: "Google Gemini", badge: "Ge" },
      { name: "Groq · LLaMA 3.1", badge: "Gr" },
      { name: "Postman", badge: "Po" },
      { name: "Cloudinary", badge: "Cl" },
      { name: "Razorpay", badge: "Rz" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="section-container">
      <FadeIn>
        <span className="eyebrow">Tools & technologies</span>
        <h2 className="section-heading">Tech Stack</h2>
        <p className="section-sub">
          What I actually reach for when shipping a feature end to end —
          grouped the way I think about a request: frontend, backend, data,
          infra, then AI.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 80}>
            <div className="glass-card h-full">
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.accent }}
                />
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((t) => (
                  <li key={t.name} className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 shrink-0 rounded-md flex items-center justify-center font-mono text-[10px] font-semibold"
                      style={{
                        background: `${cat.accent}1a`,
                        color: cat.accent,
                        border: `1px solid ${cat.accent}33`,
                      }}
                    >
                      {t.badge}
                    </span>
                    <span className="text-sm text-foreground">{t.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
