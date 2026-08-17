# 👋 Abhishek Vishwakarma – Portfolio

Production-ready personal portfolio built with **React + TypeScript + Three.js**, featuring an interactive 3D hero scene, live GitHub activity, and real project/certification data.

🔗 **Live Website:** https://portfolio-tau-lilac-98.vercel.app/
🔗 **Online Resume:** https://resume-iota-rust.vercel.app/
🔗 **GitHub:** https://github.com/codewithabhi2003

---

## 📌 About

This portfolio highlights my journey as a **Full-Stack MERN Developer**. It includes:

- Interactive 3D hero scene (React Three Fiber) — orbiting nodes of my core stack around a rotating wireframe core, with mouse parallax
- Tech Stack grid grouped by category (Frontend / Backend / Database / Cloud & DevOps / AI & APIs)
- "How I Build" — my 6-step dev process (Plan → Design → Develop → Test → Secure → Deploy)
- Backend Architecture diagram (Frontend ↔ Backend ↔ Database + supporting services)
- Featured Projects (ReWear, Job Portal) with live demo + source links
- Core Expertise, Certifications (real certificate images), Education timeline
- Live GitHub contribution graph (fetched client-side, with graceful fallback)
- Working contact form (opens the visitor's email client, pre-filled — no backend/data storage)
- Fully responsive, smooth scroll-reveal animations, dark theme

---

## 🛠 Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui primitives
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **Animation:** Framer Motion, custom IntersectionObserver reveals
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 📦 Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

No environment variables are required — the GitHub activity graph calls a public,
no-auth API (`github-contributions-api.jogruber.de`) directly from the browser.

---

## 🚀 Featured Projects

### ReWear — Pre-Loved Fashion Marketplace
Real-time MERN marketplace with hybrid AI pricing (Groq LLaMA 3.1 + Google Gemini Vision), in-chat negotiation, Razorpay + HMAC verified payments, and JWT-secured Socket.io chat.

🔗 **Live Demo:** https://rewear-dusky.vercel.app/
🔗 **Source Code:** https://github.com/codewithabhi2003/rewear

### Job Portal — Full-Stack MERN Application
Scalable job portal with role-based access for recruiters and job seekers, 15+ REST APIs on MVC architecture, JWT auth, and Cloudinary-backed resume storage.

🔗 **Live Demo:** https://jobportal-frontend-ten.vercel.app/
🔗 **Source Code:** https://github.com/codewithabhi2003/JOB-PORTAL

---

## 📜 Certifications

- J.P. Morgan – Software Engineering Job Simulation
- Walmart USA – Advanced Software Engineering Job Simulation
- Deloitte Australia – Data Analytics Job Simulation
- AWS – Solutions Architecture Job Simulation
- Accenture Nordics – Software Engineering Job Simulation
- Simplilearn – Getting Started with Docker

All certificates are accessible directly from the portfolio website.

---

## 📁 Project Structure

```
src/
  components/
    three/HeroScene.tsx   — 3D hero scene (R3F)
    Hero.tsx, About.tsx, TechStack.tsx, Process.tsx,
    Architecture.tsx, Projects.tsx, Skills.tsx,
    Certifications.tsx, GithubActivity.tsx, Education.tsx,
    Contact.tsx, Navbar.tsx, Footer.tsx, Marquee.tsx, FadeIn.tsx
  pages/Index.tsx          — assembles all sections
  index.css                — design tokens (colors, fonts, utilities)
public/
  Abhishek – Associate Software Engineer.pdf  — resume (Download CV button)
```

## 🚀 Deploying

Push to GitHub and import the repo on Vercel (or run `vercel --prod`). Build command
`npm run build`, output directory `dist` — matches your existing CI/CD setup.
