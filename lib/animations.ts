import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideInFromBottom = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// GSAP Animations
export const animateHero = () => {
  gsap.fromTo('.hero-title', 
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );
  
  gsap.fromTo('.hero-subtitle', 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
  );
  
  gsap.fromTo('.hero-cta', 
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
  );
};

export const animateSkills = () => {
  gsap.fromTo('.skill-bar', 
    { width: 0 },
    { 
      width: (i, target) => target.dataset.level + '%',
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.1
    }
  );
};

export const animateProjects = () => {
  gsap.fromTo('.project-card', 
    { opacity: 0, y: 50, scale: 0.9 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      duration: 0.8, 
      stagger: 0.2,
      ease: "power2.out"
    }
  );
};

export const animateParallax = () => {
  gsap.to('.parallax-bg', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

export const animateScrollReveal = () => {
  gsap.fromTo('.scroll-reveal', 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: ".scroll-reveal",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
}; 