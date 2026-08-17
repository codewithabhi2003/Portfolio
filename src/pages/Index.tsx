import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Architecture from "@/components/Architecture";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import GithubActivity from "@/components/GithubActivity";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <TechStack />
        <Process />
        <Architecture />
        <Projects />
        <Skills />
        <Certifications />
        <GithubActivity />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
