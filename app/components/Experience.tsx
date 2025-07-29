'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    company:' Professional Perfect  Solutions',
    position: ' Frontend Developer',
    duration: '2024 - Present',
    location: 'Lagos, Nigeria',
    description: 'Led development of complex web applications using Next.js, TypeScript, and modern frontend technologies.',
    achievements: [
      'Reduced page load time by 40% through optimization',
      'Implemented design system used by 50+ developers',
      
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 2,
    company: 'Quidax',
    position: 'Product Intern and Frontend Developer',
    duration: '2025-present',
    location: 'Remote',
    description: 'Skilled at collaborating cross-functionally with design, engineering, and business teams to define product vision, prioritize roadmaps, and execute based on data-driven insights and user needs and built responsive user interfaces and implemented modern design systems. Collaborated with design and backend teams.',
    achievements: [
      'Developed 10+ responsive web applications',
      'Improved user engagement by 25%',
      'Implemented CI/CD pipeline'
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'Git']
  },
  
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 border-4 border-white dark:border-gray-950"></div>
                
                {/* Content Card */}
                <motion.div
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <span className="w-4 h-4">🏢</span>
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-4 h-4">📅</span>
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-4 h-4">📍</span>
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div><br />
    </section>
  );
};

export default Experience; 