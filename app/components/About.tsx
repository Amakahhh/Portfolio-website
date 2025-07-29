'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="section-title text-lg  mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a passionate front-end developer who enjoys turning ideas into beautiful, performant interfaces.
              My work is rooted in clean code, purposeful design, and a drive to constantly learn and grow. Whether
              I'm bringing a UI to life with animations or optimizing components for speed and accessibility,
              I always aim to create work that feels polished and user-centered.
            </p>

            <div className="space-y-6">
              {[
                { skill: 'React / Next.js', level: '95%', delay: 0.4 },
                { skill: 'TypeScript', level: '90%', delay: 0.6 },
                { skill: 'UI/UX Design', level: '85%', delay: 0.8 },
                { skill: 'Tailwind CSS', level: '90%', delay: 1.0 },
              ].map(({ skill, level, delay }, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span>{skill}</span>
                    <span>{level}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: level } : {}}
                      transition={{ duration: 1.2, delay }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div><br />
    </section>
  );
};

export default About;
