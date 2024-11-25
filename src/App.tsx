import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from './components/Education';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  // Add SEO meta tags
  React.useEffect(() => {
    document.title =
      "Andre Rogers - Backend Engineer (improve this, Entreprenur etc)";

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Senior Backend Engineer with 8+ years of experience in software engineering, " +
        "cloud infrastructure, and team leadership. Based in Toronto, ON.",
      );
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "backend engineer, software engineer, cloud infrastructure, Go, Python, AWS, " +
        "Docker, Kubernetes, Toronto",
      );
    }

    // Other SEO meta tags
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const viewport = document.createElement("meta");
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(viewport);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      const robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "index, follow";
      document.head.appendChild(robots);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--primary-bg)]">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="bg-[var(--primary-bg)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[var(--text)]/50">
            © {new Date().getFullYear()} Andre Rogers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
