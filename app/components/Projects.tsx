'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Login Page',
    description: 'A stylish login page with 3D elements and responsive design.',
    image: '/login-app.png',
    liveUrl: 'https://login-eorf9cyqp-amakas-projects-3315eabc.vercel.app/',
    githubUrl: 'https://github.com/Amakahhh/Login-app',
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Landing Page for a Business',
    description: 'Modern landing page with clean layout and responsive sections.',
    image: '/landingpage.png',
    liveUrl: 'https://myamazigstore2-26nm.vercel.app/',
    githubUrl: 'https://github.com/Amakahhh/myamazigstore2',
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Note Web App',
    description: 'A note-taking app with rich text editing and smooth animations.',
    image: '/note-app.jpg',
    githubUrl: 'https://github.com/Amakahhh/Note-App-Wyswyg',
    tech: ['React', 'GSAP', 'React Quill'],
  },
  {
    title: 'Quote of the Day',
    description: 'A simple app that displays an inspiring quote every day.',
    image: '/qotd.jpg',
    githubUrl: 'https://github.com/Amakahhh/quote-of-the-day',
    tech: ['JavaScript', 'React'],
  },
  {
    title: 'To-do List',
    description: 'A clean and functional to-do app with basic CRUD operations.',
    image: '/To do list.jpg',
    githubUrl: 'https://github.com/Amakahhh/Simple-Todo-App',
    tech: ['JavaScript', 'API', 'CSS'],
  },
  {
    title: 'Temperature Converter',
    description: 'Converts between Celsius and Fahrenheit with a simple UI.',
    image: '/temperature converter.jpg',
    githubUrl: 'https://github.com/Amakahhh/Temparature-Converter',
    tech: ['JavaScript', 'React'],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      🔗 Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
