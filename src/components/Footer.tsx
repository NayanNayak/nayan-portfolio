import { Github, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Nayan<span className="text-blue-400">.</span>
            </a>
            <p className="text-slate-300 max-w-xs">
              Blockchain developer, security analyst, and web developer creating innovative and secure digital solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/NayanNayak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nayan-raj-sah-a90760246/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/nayan.nayak.616" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/the.eyenayak/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-slate-300">sahnayan2061@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-slate-300">+977 9824736656</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-slate-300">Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Nayan Sah. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="text-white w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
