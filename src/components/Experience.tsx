import React from 'react';
import { Building2, Calendar } from 'lucide-react';

// First, let's add scroll-padding to our globals.css
const ScrollPadding = () => (
  <style>{`
    html {
      scroll-padding-top: 100px; /* Adjusts the scroll position when navigating to anchors */
    }
  `}</style>
);

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "Parsable",
      period: "May 2021 - Nov 2024",
      description: "Leading backend development and microservices architecture transformation.",
      highlights: [
        "Led migration from monolith to microservices architecture",
        "Developed and maintained backend services in Next Gen architecture",
        "Implemented robust CI/CD pipeline with Jenkins and SonarCloud",
        "Managed test-driven development approach with comprehensive testing strategy"
      ],
      technologies: [
        "Go", "JavaScript", "TypeScript", "Jenkins", "SonarCloud", 
        "DocDB", "Postgres", "Artifactory", "Spinnaker", "Kubernetes", "Docker"
      ]
    },
    {
      title: "Senior HPC Backend Engineer",
      company: "Scala Computing",
      period: "October 2017 - June 2020",
      description: "Led development of high-performance computing solutions and managed cloud infrastructure.",
      highlights: [
        "Developed cloud-based HPC platform for parallel computation",
        "Led Water Modeling project for NYC Department of Environmental Protection",
        "Managed cloud infrastructure on AWS",
        "Led team of 8 engineers and reported directly to CTO"
      ],
      technologies: [
        "Go", "Python", "AWS", "Azure", "Terraform", "Docker", 
        "Django", "PostgreSQL", "Packer", "MPI", "Slurm"
      ]
    },
    {
      title: "Full Stack Engineer",
      company: "SVAM International",
      period: "April 2017 - October 2017",
      description: "Developed solutions for NYC government agencies.",
      highlights: [
        "Built project management software for NYC government",
        "Developed temperature monitoring application for NYC DEP",
        "Created mobile-first applications using modern web technologies"
      ],
      technologies: [
        "Angular 2", "JavaScript ES6", "Node.js", "SharePoint",
        "HTML5", "CSS3", "SQLite"
      ]
    }
  ];

  return (
    <>
      <ScrollPadding />
      <section id="experience" className="py-16 relative">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-[var(--primary-bg)]">
          <div className="absolute inset-0 bg-[var(--secondary-bg)]/5" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-12 text-center">
            Professional Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 h-full w-0.5 bg-gradient-to-b 
                           from-[var(--secondary-bg)] via-[var(--accent)] to-[var(--highlight)]" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-12 md:pl-16 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-2 top-2 w-8 h-8 rounded-full
                                bg-[var(--primary-bg)] border-2 border-[var(--secondary-bg)]
                                group-hover:border-[var(--accent)] transition-colors duration-300
                                shadow-[0_0_10px_rgba(15,118,110,0.3)]
                                group-hover:shadow-[0_0_20px_rgba(5,150,105,0.5)]" />
                  
                  {/* Experience Card with improved contrast */}
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    {/* Card gradient border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--accent)] 
                                  opacity-75 group-hover:opacity-100 blur-sm transition duration-300" />
                    
                    {/* Main card content with darker background for better contrast */}
                    <div className="relative bg-[#141614] p-6 rounded-lg">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--highlight)] 
                                     transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-[var(--text)] text-sm">
                          <span className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-[var(--highlight)]" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[var(--highlight)]" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description with better contrast */}
                      <p className="text-[var(--text)] mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights with improved visibility */}
                      <ul className="mb-6 space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li 
                            key={idx}
                            className="text-[var(--text)] flex items-start group/item"
                          >
                            <span className="w-1.5 h-1.5 bg-[var(--highlight)] rounded-full mt-2 mr-2 flex-shrink-0
                                         group-hover/item:bg-[var(--accent)] transition-colors" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies with improved contrast */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[var(--secondary-bg)] text-[var(--text)] rounded-full text-sm
                                     hover:bg-[var(--accent)] transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
