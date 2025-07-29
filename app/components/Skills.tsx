'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiReact, SiTypescript, SiTailwindcss, SiThreedotjs, SiFramer, SiSap } from 'react-icons/si';

const skills = [
  { name: 'React', level: 95, icon: <SiReact className="text-blue-400" size={32} /> },
  { name: 'TypeScript', level: 90, icon: <SiTypescript className="text-blue-600" size={32} /> },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-cyan-400" size={32} /> },
  { name: 'Three.js', level: 80, icon: <SiThreedotjs className="text-black dark:text-white" size={32} /> },
  { name: 'Framer Motion', level: 85, icon: <SiFramer className="text-pink-500" size={32} /> },
  { name: 'GSAP', level: 80, icon: <SiSap className="text-green-500" size={32} /> },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skill Bars */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {skills.map((skill, i) => (
              <div key={skill.name} className="flex items-center gap-4">
                <div>{skill.icon}</div>
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="grid grid-cols-3 gap-4">
              {skills.slice(0, 6).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-2 flex justify-center">{skill.icon}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div><br />
    </section>
  );
};

export default Skills; 