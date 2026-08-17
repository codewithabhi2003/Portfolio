import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";

const education = [
  {
    degree: "BSc Information Technology",
    school: "L.S. Raheja College, University of Mumbai",
    period: "2023 – 2026",
    note: "CGPA 8.33 / 10",
    current: true,
  },
  {
    degree: "Diploma in Pharmacy (D.Pharm)",
    school: "Board of Examining Authority (BEA), Karnataka",
    period: "2023",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Durga Devi Saraf Junior College",
    period: "2020",
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Quick Learning",
  "Communication",
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <FadeIn>
        <span className="eyebrow">Academic background</span>
        <h2 className="section-heading">Education</h2>
      </FadeIn>

      <div className="relative pl-8 mb-16">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-8">
          {education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 100}>
              <div className="relative">
                <span
                  className={`absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                    edu.current
                      ? "bg-primary border-primary"
                      : "bg-background border-border"
                  }`}
                />
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex p-2 rounded-lg bg-secondary text-primary mt-0.5 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display font-semibold text-lg">
                        {edu.degree}
                      </h3>
                      <span className="font-mono text-xs text-primary">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">
                      {edu.school}
                    </p>
                    {edu.note && (
                      <p className="font-mono text-xs text-muted-foreground/70 mt-1">
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn>
        <span className="eyebrow">Beyond the stack</span>
        <h3 className="font-display text-xl font-semibold mb-6">
          Soft Skills
        </h3>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-lg border border-border text-foreground text-sm hover:border-primary/40 hover:text-primary transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Education;
