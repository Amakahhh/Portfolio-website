'use client';

import { useRef, useEffect } from 'react';
import { Mail, Download, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import Scene from './3D/Scene';
import { animateHero } from '@/lib/animations';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      animateHero(); // Optional – remove if it's adding animations you don't want
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4"
    >
      {/* Optional 3D Background – remove <Scene /> if you want a plain background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Scene />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
        {/* Profile Picture */}
        <div className="mb-6 flex justify-center">
          <img
            src="/picture of kaka.jpg"
            alt="Ejike Chiamaka"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-md"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Ejike Chiamaka
        </h1>

        {/* Short Bio */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          300 Level Computer Science student with a proven track record in building responsive, real-world web applications using React, Next.js, and Tailwind CSS. Passionate about solving problems through code, with hands-on experience in both frontend development and data science. Always eager to learn, quick to adapt, and driven to contribute meaningfully.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = 'mailto:sonniaamaka@gmail.com'}
            className="flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/CHIAMAKA EJIKE RESUME.pdf';
              link.download = 'CHIAMAKA EJIKE RESUME.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToAbout}
          className="mx-auto flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div><br />
    </section>
  );
};

export default Hero;
