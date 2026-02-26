import FadeIn from "./FadeIn";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "HTML", "CSS", "Java (Basics)"],
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL (Basics)"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Vercel", "Netlify", "Render"],
  },
  {
    title: "Security",
    skills: ["JWT Authentication", "RBAC", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Trello"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <FadeIn>
        <h2 className="section-heading">Technical Skills</h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 80}>
            <div className="glass-card h-full">
              <h3 className="font-mono text-primary text-sm font-semibold mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-secondary text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
