import { ArrowRight, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

// Custom hook for typewriter effect
const useTypewriter = (texts: string[], typingSpeed = 150, deletingSpeed = 100, delayBetween = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText === texts[currentIndex]) {
        // Text is fully typed, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      } else {
        // Continue typing
        timeout = setTimeout(() => {
          setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (displayText === '') {
        // Text is fully deleted, move to next text
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      } else {
        // Continue deleting
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween]);
  
  return displayText;
};

export function Hero() {
  const typewriterText = useTypewriter(['Nayan Sah..', 'Learner..', 'Security Expert'], 150, 100, 2000);
  
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8 animate-fade-up">
            <div className="space-y-1">
              <p className="text-blue-600 font-medium tracking-wider">BLOCKCHAIN & SECURITY RESEARCHER</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight flex flex-wrap items-baseline">
                <span>Hi, I'm&nbsp;</span>
                <span className="text-blue-600 whitespace-nowrap">{typewriterText}<span className="animate-blink ml-1">|</span></span>
              </h1>
            </div>
            
            <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
              I specialize in blockchain development, security analysis, and Digital Marketing, 
              crafting secure and innovative digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-md transition-all"
              >
                Contact Me
              </a>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center gap-6">
                <a 
                  href="https://github.com/NayanNayak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nayan-raj-sah-a90760246/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://medium.com/@nayak.nayan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                  aria-label="Medium"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.3 12.94c-.1-.05-.15-.2-.15-.301V8.006c0-.1.05-.25.15-.351l.955-1.105V6.5H14.84l-2.56 6.478L9.825 6.5H6.315v.05l.903 1.256c.201.2.251.502.251.753v5.523c.05.302 0 .653-.15.954L6.3 16.324v.05h3.28v-.05L8.4 15.074c-.15-.302-.201-.603-.15-.954V9.485c.05.1.1.1.15.301l3.233 7.073h.1L14.453 9.34c-.05.25-.05.35-.05.452v5.471c0 .152-.05.302-.15.402l-1.106 1.105v.05h4.253v-.05l-1.106-1.105z" />
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/nayan.nayak.616" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/the.eyenayak/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in animation-delay-300">
            <div className="relative w-[85vw] md:w-auto max-w-2xl">
              {/* Main blue glowing background effect */}
              <div className="absolute -inset-10 bg-gradient-to-b from-blue-400/30 via-blue-500/20 to-blue-300/10 rounded-full blur-3xl opacity-80 animate-pulse-subtle"></div>
              
              {/* Outer organic shapes */}
              <div className="absolute -inset-12 bg-gradient-to-tr from-blue-500/30 via-blue-400/20 to-blue-300/10 rounded-[60%_40%_50%_50%/40%_50%_60%_60%] blur-3xl opacity-60 animate-morph-slower"></div>
              
              {/* Dynamic soft glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-blue-300/30 to-blue-400/20 rounded-full blur-xl opacity-80 animate-glow-pulse"></div>
              
              {/* Light beam effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[500px] bg-gradient-to-b from-blue-400/40 to-transparent blur-3xl opacity-30 animate-light-beam"></div>
              
              {/* Moving particles */}
              <div className="particle blue-particle-lg"></div>
              <div className="particle blue-particle-sm"></div>
              <div className="particle blue-particle-xs"></div>
              <div className="particle cyan-particle-md"></div>
              <div className="particle sky-particle-sm"></div>
              
              {/* Image */}
              <img 
                src="src/img/File_006.png" 
                alt="Nayan Sah" 
                className="relative w-[90vw] max-w-md md:w-[28rem] md:h-[28rem] object-cover z-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-subtle-float shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              />
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 glass-effect px-6 py-3 rounded-full text-slate-900 font-medium z-20 shadow-xl backdrop-blur-md border border-white/20">
                <span className="text-blue-600 font-bold">+</span> Grapping Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
