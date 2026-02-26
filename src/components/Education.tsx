import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";

const education = [
  {
    degree: "BSc IT",
    school: "L.S. Raheja College, University of Mumbai",
    period: "2023 – 2026 (Pursuing)",
  },
  {
    degree: "HSC",
    school: "Durga Devi Saraf Junior College",
    period: "Completed in 2020",
  },
];

const softSkills = ["Problem Solving", "Team Collaboration", "Adaptability", "Quick Learning", "Communication"];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <FadeIn>
        <h2 className="section-heading">Education</h2>
      </FadeIn>
      <div className="space-y-6 mb-16">
        {education.map((edu, i) => (
          <FadeIn key={edu.degree} delay={i * 100}>
            <div className="glass-card flex items-start gap-4">
              <div className="p-2 rounded-lg bg-secondary text-primary mt-0.5">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
                <p className="font-mono text-primary text-xs mt-1">{edu.period}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <h2 className="section-heading">Soft Skills</h2>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-lg border border-border text-foreground text-sm hover:border-primary/40 transition-colors duration-200"
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
