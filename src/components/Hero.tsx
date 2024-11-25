import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  // Smooth scroll function (same as in Header)
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden" id="hero">
      {/* Gradient background with animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] opacity-90"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradientBG 15s ease infinite'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="relative group">
              {/* Glowing effect */}
              <div 
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] 
                         opacity-75 blur group-hover:opacity-100 transition duration-500"
              />
              
              {/* Image container */}
              <div className="relative aspect-square w-64 lg:w-full max-w-sm rounded-full overflow-hidden 
                           border-4 border-[var(--text)]/10">
                <img
                  src="/images/profile.png"
                  alt="Andre Rogers"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            {/* Name and Title */}
            <div className="space-y-4 mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text)] mb-2">
                Andre Rogers
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Senior Backend Engineer
              </h2>
            </div>
            
            {/* Bio */}
            <p className="text-xl text-[var(--text)]/90 mb-8 leading-relaxed max-w-2xl">
              With 8+ years of experience in software engineering, I specialize in backend systems,
              cloud infrastructure, and team leadership. Passionate about building scalable,
              efficient solutions and mentoring fellow engineers.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-[var(--text)]/80">
              {/* Location */}
              <div className="flex items-center gap-2 group">
                <MapPin className="w-5 h-5 text-[var(--highlight)] group-hover:text-[var(--accent)] transition-colors" />
                <span className="group-hover:text-[var(--text)] transition-colors">
                  Toronto, ON
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 group">
                <Mail className="w-5 h-5 text-[var(--highlight)] group-hover:text-[var(--accent)] transition-colors" />
                <a 
                  href="mailto:andrejprogers@gmail.com"
                  className="group-hover:text-[var(--text)] transition-colors"
                >
                  andrejprogers@gmail.com
                </a>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 bg-[var(--accent)] text-[var(--text)] rounded-lg
                         hover:bg-[var(--highlight)] transition-all duration-300
                         shadow-[0_0_15px_rgba(52,211,153,0.3)]
                         hover:shadow-[0_0_25px_rgba(52,211,153,0.5)]
                         focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]
                         focus:ring-offset-2 focus:ring-offset-[var(--primary-bg)]"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollToSection('#experience')}
                className="px-6 py-3 border border-[var(--secondary-bg)] text-[var(--text)] rounded-lg
                         hover:bg-[var(--secondary-bg)]/10 transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]
                         focus:ring-offset-2 focus:ring-offset-[var(--primary-bg)]"
              >
                View Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add print-specific styles */}
      <style>{`
        @media print {
          section {
            padding: 1rem 0;
          }
          .group-hover\\:scale-105 {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
