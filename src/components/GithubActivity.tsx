import { useEffect, useState } from "react";
import { Github, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const GITHUB_USER = "codewithabhi2003";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const levelColor = ["#161616", "#3a1f12", "#7a2f0f", "#c74a15", "#ff6a2c"];

const links = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/codewithabhi2003",
    href: "https://github.com/codewithabhi2003",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "abhishek-vishwakarma-47a43828b",
    href: "https://www.linkedin.com/in/abhishek-vishwakarma-47a43828b",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "portfolio-tau-lilac-98.vercel.app",
    href: "https://portfolio-tau-lilac-98.vercel.app/",
  },
];

const GithubActivity = () => {
  const [weeks, setWeeks] = useState<Day[][] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [weeksToShow, setWeeksToShow] = useState(52);

  useEffect(() => {
    const computeWeeks = () => {
      const w = window.innerWidth;
      if (w < 400) setWeeksToShow(16);
      else if (w < 640) setWeeksToShow(22);
      else if (w < 1024) setWeeksToShow(36);
      else setWeeksToShow(52);
    };
    computeWeeks();
    window.addEventListener("resize", computeWeeks);
    return () => window.removeEventListener("resize", computeWeeks);
  }, []);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      })
      .then((data: { total: Record<string, number>; contributions: Day[] }) => {
        if (cancelled) return;
        const days = data.contributions.slice(-364);
        const grouped: Day[][] = [];
        for (let i = 0; i < days.length; i += 7) {
          grouped.push(days.slice(i, i + 7));
        }
        setWeeks(grouped);
        const totalKey = Object.keys(data.total).sort().pop();
        setTotal(totalKey ? data.total[totalKey] : null);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleWeeks = weeks ? weeks.slice(-weeksToShow) : null;

  return (
    <section id="github" className="section-container">
      <FadeIn>
        <span className="eyebrow">Building in public</span>
        <h2 className="section-heading">Let's Connect</h2>
        <p className="section-sub">
          Live contribution activity, pulled straight from GitHub.
        </p>
      </FadeIn>

      <div className="grid lg:grid-cols-[1fr_320px] gap-5">
        <FadeIn delay={100} className="min-w-0">
          <div className="glass-card h-full min-w-0">
            <div className="flex items-center justify-between mb-6 gap-3">
              <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                <Github size={16} className="shrink-0" />
                <span className="font-mono text-xs truncate">@{GITHUB_USER}</span>
              </div>
              {total !== null && (
                <span className="font-mono text-xs text-primary shrink-0">
                  {total.toLocaleString()} contributions / yr
                </span>
              )}
            </div>

            {failed ? (
              <p className="text-sm text-muted-foreground py-8 text-center">
                Couldn't load live activity right now — check the graph
                directly on{" "}
                <a
                  href={`https://github.com/${GITHUB_USER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  GitHub
                </a>
                .
              </p>
            ) : !visibleWeeks ? (
              <div className="flex gap-[3px] py-2 animate-pulse-slow w-full min-w-0 overflow-hidden">
                {Array.from({ length: weeksToShow }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, j) => (
                      <div
                        key={j}
                        className="w-[9px] h-[9px] rounded-[2px] bg-secondary shrink-0"
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full min-w-0 overflow-x-auto">
                <div className="flex gap-[3px] py-2 w-max">
                  {visibleWeeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day) => (
                        <div
                          key={day.date}
                          title={`${day.count} contributions on ${day.date}`}
                          className="w-[9px] h-[9px] rounded-[2px] shrink-0"
                          style={{ background: levelColor[day.level] }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-muted-foreground">
              <span>Less</span>
              {levelColor.map((c) => (
                <div
                  key={c}
                  className="w-[9px] h-[9px] rounded-[2px] shrink-0"
                  style={{ background: c }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={160} className="min-w-0">
          <div className="glass-card h-full flex flex-col gap-3 min-w-0">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors group min-w-0"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <l.icon size={16} className="text-primary shrink-0" />
                  <span className="min-w-0">
                    <span className="block text-sm text-foreground">
                      {l.label}
                    </span>
                    <span className="block font-mono text-[11px] text-muted-foreground truncate">
                      {l.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GithubActivity;
