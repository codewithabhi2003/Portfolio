import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import FadeIn from "./FadeIn";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:abhishekvishwakarma1149@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-container">
      <FadeIn>
        <span className="eyebrow">Get in touch</span>
        <h2 className="section-heading">Let's Build Something</h2>
        <p className="section-sub">
          I'm actively looking for full-stack developer opportunities. If
          you're hiring, collaborating, or just want to talk shop, my inbox
          is open.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-[1fr_1.3fr] gap-5">
        <FadeIn delay={100}>
          <div className="glass-card h-full flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <a
                href="mailto:abhishekvishwakarma1149@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail size={16} />
                </span>
                <span className="break-all">
                  abhishekvishwakarma1149@gmail.com
                </span>
              </a>
              <a
                href="tel:+918108643242"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone size={16} />
                </span>
                +91 8108643242
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={16} />
                </span>
                Mumbai, India
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                Find me elsewhere
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/codewithabhi2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-vishwakarma-47a43828b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <form onSubmit={handleSubmit} className="glass-card h-full space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-lg bg-secondary/40 border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full rounded-lg bg-secondary/40 border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project..."
                className="w-full rounded-lg bg-secondary/40 border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Send Message <Send size={15} />
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              Opens your email app with this pre-filled — nothing is stored.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
