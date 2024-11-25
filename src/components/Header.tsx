import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events for header transparency
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links configuration
  const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Handle resume download
  const handleResumeDownload = () => {
    // Create link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure resume.pdf is in the public folder
    link.download = 'andre_rogers_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-[var(--primary-bg)]/95 backdrop-blur border-b border-[var(--secondary-bg)]/20 shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name with Hero navigation */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold text-[var(--text)] hover:text-[var(--highlight)] 
                     transition-colors focus:outline-none focus:ring-2 
                     focus:ring-[var(--highlight)] focus:ring-offset-2 
                     focus:ring-offset-[var(--primary-bg)] rounded-md px-2 py-1"
          >
            Andre Rogers
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="text-[var(--text)]/80 hover:text-[var(--highlight)] transition-colors
                         px-3 py-2 rounded-md hover:bg-[var(--secondary-bg)]/10 
                         focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]
                         focus:ring-offset-2 focus:ring-offset-[var(--primary-bg)]"
              >
                {label}
              </button>
            ))}
            <button 
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-[var(--text)] 
                       rounded-lg hover:bg-[var(--highlight)] transition-all duration-300
                       shadow-[0_0_15px_rgba(52,211,153,0.3)]
                       hover:shadow-[0_0_25px_rgba(52,211,153,0.5)]
                       focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]
                       focus:ring-offset-2 focus:ring-offset-[var(--primary-bg)]"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[var(--text)]/80 hover:text-[var(--highlight)]
                     hover:bg-[var(--secondary-bg)]/10 rounded-lg transition-colors
                     focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]
                     focus:ring-offset-2 focus:ring-offset-[var(--primary-bg)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--primary-bg)]/95 backdrop-blur 
                         border-b border-[var(--secondary-bg)]/20 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="block w-full text-left px-4 py-3 text-[var(--text)]/80 
                           hover:text-[var(--highlight)] hover:bg-[var(--secondary-bg)]/10 
                           rounded-lg transition-colors focus:outline-none focus:ring-2 
                           focus:ring-[var(--highlight)] focus:ring-offset-2 
                           focus:ring-offset-[var(--primary-bg)]"
                >
                  {label}
                </button>
              ))}
              <button 
                onClick={handleResumeDownload}
                className="flex items-center gap-2 w-full px-4 py-3 mt-2 
                         bg-[var(--accent)] text-[var(--text)] rounded-lg 
                         hover:bg-[var(--highlight)] transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]
                         focus:ring-offset-2 focus:ring-offset-[var(--primary-bg)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
