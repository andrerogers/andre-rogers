import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Governors State University",
      location: "University Park, IL",
      period: "2015–2016",
      description: "Advanced computer science studies with focus on software engineering and systems design."
    },
    {
      degree: "Master of Science in Computer Science Interactive Entertainment Technology",
      school: "Trinity College Dublin",
      location: "Dublin, Ireland",
      period: "2011–2012",
      description: "Specialized in game development, interactive systems, and real-time graphics programming."
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "St. Joseph's College of Arts and Science",
      location: "Bangalore, India",
      period: "2008–2011",
      description: "Foundation in computer science, programming, and software development."
    }
  ];

  return (
    <section id="education" className="py-16 relative">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-[var(--primary-bg)]">
        <div className="absolute inset-0 bg-[var(--secondary-bg)]/5" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-12 text-center">
          Education
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group relative h-full"
            >
              {/* Card gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--accent)] 
                            rounded-lg opacity-75 group-hover:opacity-100 blur-sm transition duration-300" />
              
              {/* Card content */}
              <div className="relative bg-[#141614] p-6 rounded-lg h-full flex flex-col shadow-xl">
                {/* Icon */}
                <div className="mb-4">
                  <GraduationCap 
                    className="w-8 h-8 text-[var(--highlight)] group-hover:text-[var(--accent)] transition-colors" 
                  />
                </div>

                {/* Degree and School - Fixed height section */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--highlight)] 
                               transition-colors leading-tight mb-3">
                    {edu.degree}
                  </h3>

                  <p className="text-[var(--text)] font-medium text-lg">
                    {edu.school}
                  </p>
                </div>

                {/* Description */}
                <div className="flex-grow mb-6">
                  <p className="text-[var(--text)] leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Location and Period */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--highlight)]" />
                    <span className="text-[var(--text)]">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--highlight)]" />
                    <span className="text-[var(--text)]">{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
