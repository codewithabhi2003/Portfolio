import { Layers, Server, Database, ArrowLeftRight } from "lucide-react";
import { Radio, Sparkles, FolderCog, CreditCard } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Radio,
    title: "Real-time",
    detail: "Socket.io",
    color: "#33e0ff",
  },
  {
    icon: Sparkles,
    title: "AI Services",
    detail: "Gemini · Groq",
    color: "#ff6a2c",
  },
  {
    icon: FolderCog,
    title: "File Storage",
    detail: "Cloudinary",
    color: "#8b6bff",
  },
  {
    icon: CreditCard,
    title: "Payments",
    detail: "Razorpay + HMAC",
    color: "#4dff9a",
  },
];

const Architecture = () => {
  return (
    <section id="architecture" className="section-container">
      <FadeIn>
        <span className="eyebrow">System design</span>
        <h2 className="section-heading">Backend Architecture</h2>
        <p className="section-sub">
          The same shape powers both ReWear and Job Portal: a React
          frontend talking to an Express API, backed by MongoDB, with
          focused services bolted on where they're needed.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="glass-card">
          {/* main flow */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <ArchNode
              icon={Layers}
              title="Frontend"
              detail="React · Tailwind CSS"
              color="#33e0ff"
            />
            <Connector label="API requests" />
            <ArchNode
              icon={Server}
              title="Backend"
              detail="Node.js · Express"
              color="#ff6a2c"
              emphasized
            />
            <Connector label="Mongoose queries" reverse />
            <ArchNode
              icon={Database}
              title="Database"
              detail="MongoDB Atlas"
              color="#4dff9a"
            />
          </div>

          {/* connector down to services */}
          <div className="hidden md:flex justify-center mt-2">
            <div className="w-px h-8 bg-border" />
          </div>

          <div className="mt-2 md:mt-0 pt-8 border-t border-border relative">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground text-center mb-6">
              Backend services
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-border p-4 text-center hover:border-primary/30 transition-colors"
                  style={{
                    background: `linear-gradient(180deg, ${s.color}0d, transparent)`,
                  }}
                >
                  <div
                    className="w-9 h-9 mx-auto rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: `${s.color}1a`,
                      color: s.color,
                      border: `1px solid ${s.color}33`,
                    }}
                  >
                    <s.icon size={16} />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {s.title}
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground mt-0.5">
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

const ArchNode = ({
  icon: Icon,
  title,
  detail,
  color,
  emphasized,
}: {
  icon: typeof Layers;
  title: string;
  detail: string;
  color: string;
  emphasized?: boolean;
}) => (
  <div
    className={`w-full md:w-auto flex-1 rounded-xl border p-5 text-center transition-transform ${
      emphasized ? "border-primary/40" : "border-border"
    }`}
    style={{
      background: emphasized
        ? `linear-gradient(180deg, ${color}14, transparent)`
        : "transparent",
    }}
  >
    <div
      className="w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3"
      style={{ background: `${color}1a`, color, border: `1px solid ${color}33` }}
    >
      <Icon size={18} />
    </div>
    <div className="font-display font-semibold text-sm text-heading">
      {title}
    </div>
    <div className="font-mono text-[11px] text-muted-foreground mt-1">
      {detail}
    </div>
  </div>
);

const Connector = ({
  label,
  reverse,
}: {
  label: string;
  reverse?: boolean;
}) => (
  <div className="flex md:flex-col items-center gap-2 shrink-0 rotate-90 md:rotate-0">
    <span className="font-mono text-[10px] text-muted-foreground/70 whitespace-nowrap hidden md:block">
      {label}
    </span>
    <ArrowLeftRight
      size={16}
      className={`text-muted-foreground/50 ${reverse ? "scale-x-[-1]" : ""}`}
    />
  </div>
);

export default Architecture;
