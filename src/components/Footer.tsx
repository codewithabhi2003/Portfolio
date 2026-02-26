import FadeIn from "./FadeIn";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Identity */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">
                Abhishek Vishwakarma
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Entry-Level Software Engineer | Full-Stack MERN Developer
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="https://github.com/codewithabhi2003"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-vishwakarma-47a43828b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>

             

              <a
                href="mailto:abhishekvishwakarma1149@gmail.com"
                className="hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Abhishek Vishwakarma. All rights reserved.
          </div>

        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;