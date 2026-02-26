import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section id="about" className="section-container">
      <FadeIn>
        <h2 className="section-heading">About Me</h2>
      </FadeIn>
      <div className="max-w-3xl">
        <FadeIn delay={100}>
          <p className="text-foreground leading-relaxed mb-4">
            Motivated <span className="text-primary font-medium">Full-Stack Developer</span> with hands-on experience building scalable web applications using JavaScript, React.js, Node.js, and the MERN stack.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Proficient in designing and integrating RESTful APIs, implementing secure JWT-based authentication workflows, and delivering seamless frontend–backend integration.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-muted-foreground leading-relaxed">
            Seeking a Software Engineer role to apply full-stack development expertise, contribute to scalable web and application solutions, and grow within a collaborative, innovation-driven engineering team.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
