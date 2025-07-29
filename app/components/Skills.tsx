'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiSap,
} from 'react-icons/si';

const skills = [
  { name: 'React', level: 95, icon: <SiReact className="text-sky-500" size={32} /> },
  { name: 'TypeScript', level: 90, icon: <SiTypescript className="text-blue-600" size={32} /> },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-cyan-400" size={32} /> },
  { name: 'Three.js', level: 80, icon: <SiThreedotjs className="text-black dark:text-white" size={32} /> },
  { name: 'Framer Motion', level: 85, icon: <SiFramer className="text-pink-500" size={32} /> },
  { name: 'GSAP', level: 80, icon: <SiSap className="text-green-500" size={32} /> },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      className="section py-20 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side – Progress Bars */}
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
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 dark:from-blue-500 dark:via-green-400 dark:to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Side – Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-transform"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-2 flex justify-center">{skill.icon}</div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
