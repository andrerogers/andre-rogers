import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "andrejprogers@gmail.com",
      href: "mailto:andrejprogers@gmail.com",
      description: "Feel free to reach out directly"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/andrerogers",
      href: "https://github.com/andrerogers",
      description: "Check out my code repositories"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/andre-rogers",
      href: "https://linkedin.com/in/yourusername",
      description: "Let's connect professionally"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Toronto, ON",
      description: "Open to remote opportunities"
    }
  ];

  return (
    <section id="contact" className="py-16 relative">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-[var(--primary-bg)]">
        <div className="absolute inset-0 bg-[var(--secondary-bg)]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
            Get in Touch
          </h2>
          <p className="text-[var(--text)] text-lg leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--accent)] 
                            rounded-lg opacity-75 group-hover:opacity-100 blur-sm transition duration-300" />

              {/* Card content */}
              <div className="relative bg-[#141614] p-6 rounded-lg h-full">
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex flex-col h-full group-hover:scale-[1.02] transition-transform duration-300"
                  >
                    <ContactMethodContent {...method} />
                  </a>
                ) : (
                  <div className="flex flex-col h-full">
                    <ContactMethodContent {...method} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-[var(--text)]/80 mb-6">
            Prefer sending a message?
          </p>
          <a
            href="mailto:andrejprogers@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--text)] 
                     rounded-lg hover:bg-[var(--highlight)] transition-all duration-300
                     shadow-[0_0_15px_rgba(5,150,105,0.3)]
                     hover:shadow-[0_0_25px_rgba(5,150,105,0.5)]"
          >
            <Mail className="w-5 h-5" />
            <span>Send an Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Helper component for contact method content
const ContactMethodContent: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}> = ({ icon, label, value, description }) => (
  <>
    <div className="text-[var(--highlight)] group-hover:text-[var(--accent)] transition-colors mb-4">
      {icon}
    </div>
    <div className="mb-2">
      <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--highlight)] 
                   transition-colors">
        {label}
      </h3>
      <p className="text-[var(--text)] font-medium">
        {value}
      </p>
    </div>
    <p className="text-[var(--text)]/80 text-sm mt-auto">
      {description}
    </p>
  </>
);

export default Contact;
