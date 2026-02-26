import { ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

import certJpmorgan from "@/assets/cert-jpmorgan.jpg";
import certWalmart from "@/assets/cert-walmart.jpg";
import certDeloitte from "@/assets/cert-deloitte.jpg";
import certAws from "@/assets/cert-aws.jpg";
import certAccenture from "@/assets/cert-accenture.jpg";
import certDocker from "@/assets/cert-docker.png";

const certifications = [
  {
    title: "J.P. Morgan – Software Engineering Job Simulation",
    image: certJpmorgan,
    link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_bc95X6Msfr8mkSWLK_1758177841166_completion_certificate.pdf",
  },
  {
    title: "Walmart USA – Advanced Software Engineering Job Simulation",
    image: certWalmart,
    link: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_bc95X6Msfr8mkSWLK_1758181839740_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia – Data Analytics Job Simulation",
    image: certDeloitte,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_bc95X6Msfr8mkSWLK_1757848875895_completion_certificate.pdf",
  },
  {
    title: "AWS – Solutions Architecture Job Simulation",
    image: certAws,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_bc95X6Msfr8mkSWLK_1757040609344_completion_certificate.pdf",
  },
  {
    title: "Accenture Nordics – Software Engineering Job Simulation",
    image: certAccenture,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_bc95X6Msfr8mkSWLK_1757007121186_completion_certificate.pdf",
  },
  {
    title: "Getting Started with Docker – Simplilearn",
    image: certDocker,
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODg2NTk3Nl85MjMxNDAwMTc1NjI5MzI5MTcxNy5wbmciLCJ1c2VybmFtZSI6IkFiaGlzaGVrIFZpc2h3YWthcm1hIn0%3D",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <FadeIn>
        <h2 className="section-heading">Certifications</h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <FadeIn key={cert.title} delay={i * 80}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card block !p-0 overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium leading-tight">{cert.title}</h3>
                <ExternalLink size={16} className="flex-shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
