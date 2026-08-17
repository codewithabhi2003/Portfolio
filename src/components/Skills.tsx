import {
  Network,
  DatabaseZap,
  Radio,
  Sparkles,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import FadeIn from "./FadeIn";

const expertise = [
  {
    icon: Network,
    title: "API Development",
    desc: "RESTful APIs and MVC architecture — 15+ endpoints designed, documented, and tested in Postman across roles.",
  },
  {
    icon: DatabaseZap,
    title: "Database Engineering",
    desc: "MongoDB with Mongoose — aggregation pipelines, indexing, and atomic operations to avoid inconsistent states.",
  },
  {
    icon: Radio,
    title: "Real-time Systems",
    desc: "Socket.io with JWT handshake middleware — live chat, negotiation flows, and state that stays in sync.",
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    desc: "Groq (LLaMA 3.1) and Gemini Vision, chained with fallback logic so a single quota limit never breaks the app.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    desc: "JWT, RBAC, bcrypt, and HMAC signature verification on every checkout and protected route.",
  },
  {
    icon: Rocket,
    title: "Deployment & DevOps",
    desc: "GitHub Actions CI pushing to Vercel and Render, with keep-alive workflows so cold starts don't hurt UX.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <FadeIn>
        <span className="eyebrow">Core expertise</span>
        <h2 className="section-heading">What I'm Good At</h2>
        <p className="section-sub">
          Six areas I keep coming back to on every project, from ReWear's
          negotiation engine to Job Portal's role-based dashboards.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {expertise.map((item, i) => (
          <FadeIn key={item.title} delay={i * 80}>
            <div className="glass-card h-full">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                <item.icon size={18} />
              </div>
              <h3 className="font-display font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
