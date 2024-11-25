import React from 'react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Primary Languages",
      skills: ["C", "C++", "Go", "Python", "JavaScript", "Node.js"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Docker", "Terraform", "Kubernetes", "Slurm Scheduler"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["React", "Angular", "Docker", "Git", "Jenkins", "PostgreSQL"]
    }
  ];

  return (
    <section id="skills" className="py-16 relative">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-[var(--secondary-bg)]/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[var(--text)] mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary-bg)] 
                            rounded-lg opacity-75 group-hover:opacity-100 blur-sm transition duration-300" />
              
              <div className="relative bg-[var(--primary-bg)] p-6 rounded-lg border border-[var(--secondary-bg)]/30">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-4 group-hover:text-[var(--highlight)] 
                             transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[var(--secondary-bg)] text-[var(--text)] rounded-full text-sm
                               hover:bg-[var(--accent)] transition-all duration-300
                               border border-[var(--highlight)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
