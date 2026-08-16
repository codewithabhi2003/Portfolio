import {
  Compass,
  PenTool,
  Code2,
  FlaskConical,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Plan",
    desc: "Architecture and data modeling before a single component gets written.",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    desc: "API contracts and UI/UX flow, so frontend and backend agree upfront.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Develop",
    desc: "Clean, typed code following REST and MVC best practices.",
  },
  {
    n: "04",
    icon: FlaskConical,
    title: "Test",
    desc: "Every endpoint validated in Postman across each user role.",
  },
  {
    n: "05",
    icon: ShieldCheck,
    title: "Secure",
    desc: "JWT, RBAC, HMAC signature checks, and bcrypt on anything sensitive.",
  },
  {
    n: "06",
    icon: Rocket,
    title: "Deploy",
    desc: "CI/CD with GitHub Actions, shipped to Vercel and Render.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-container">
      <FadeIn>
        <span className="eyebrow">My development process</span>
        <h2 className="section-heading">How I Build</h2>
        <p className="section-sub">
          The same six-step loop, every project — it's how ReWear and Job
          Portal both went from idea to a URL you can actually open.
        </p>
      </FadeIn>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 70}>
            <div className="glass-card h-full relative group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <step.icon size={20} />
                </div>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {step.n}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Process;
