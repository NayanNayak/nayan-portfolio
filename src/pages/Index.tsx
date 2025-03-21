
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Add a class to body when page is fully loaded
  useEffect(() => {
    document.body.classList.add('loaded');
    
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleScrollToSection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        const section = document.querySelector(link.hash);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleScrollToSection);
    return () => document.removeEventListener('click', handleScrollToSection);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
