import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import FadeIn from "./FadeIn";

const Contact = () => {
  return (
    <section id="contact" className="section-container text-center">
      <FadeIn>
        <h2 className="section-heading mx-auto">Get In Touch</h2>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="text-muted-foreground max-w-lg mx-auto mt-4">
          I am actively seeking entry-level Software Engineering opportunities.
          If you’re hiring, collaborating, or would like to discuss a project,
          feel free to connect with me.
        </p>
      </FadeIn>

      {/* Contact Info */}
      <FadeIn delay={200}>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:abhishekvishwakarma1149@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} />
            abhishekvishwakarma1149@gmail.com
          </a>

          <a
            href="tel:+918108643242"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone size={18} />
            +91 8108643242
          </a>
        </div>
      </FadeIn>

      {/* Location */}
      <FadeIn delay={300}>
        <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin size={18} />
          Mumbai, India
        </div>
      </FadeIn>

      {/* Social Links */}
      <FadeIn delay={400}>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/codewithabhi2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-vishwakarma-47a43828b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={500}>
        <p className="mt-10 text-xs text-muted-foreground">
          Let’s build something meaningful together.
        </p>
      </FadeIn>
    </section>
  );
};

export default Contact;