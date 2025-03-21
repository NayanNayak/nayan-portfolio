import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Decentralized Review System',
    description: 'Ensuring secure and transparent review system for products and services',
    image: '/placeholder.svg',
    tags: ['Blockchain', 'Solidity', 'React', 'Web3'],
    link: '#',
    github: '#',
    category: 'blockchain',
  },
  {
    id: 2,
    title: 'E-mail Bomber',
    description: 'E-mail Bomber is a tool that sends a large number of e-mails to a target e-mail address.',
    image: '/placeholder.svg',
    tags: ['Security', 'Analysis', 'Python'],
    link: '#',
    github: '#',
    category: 'security',
  },
  {
    id: 3,
    title: 'E-Commerce Website',
    description: 'A modern e-commerce platform with payment integration and responsive design.',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    github: '#',
    category: 'web',
  },

  {
    id: 4,
    title: 'Vulnerability Scanner',
    description: 'An automated tool for detecting security vulnerabilities in web applications.',
    image: '/placeholder.svg',
    tags: ['Security', 'Python', 'Automation'],
    link: '#',
    github: '#',
    category: 'security',
  },
  {
    id: 5,
    title: 'Portfolio Dashboard',
    description: 'A responsive dashboard for tracking investment portfolios across multiple assets.',
    image: '/placeholder.svg',
    tags: ['React', 'Tailwind CSS', 'API Integration'],
    link: '#',
    github: '#',
    category: 'web',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'security', name: 'Security' },
  { id: 'web', name: 'Web Development' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <p className="text-blue-600 font-medium tracking-wider">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in blockchain,
            security analysis, and web development.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 animate-fade-up">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-slate-100 rounded-lg">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeCategory === category.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-blue-600"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 transition-all",
                "hover:shadow-md hover:border-slate-200 hover:translate-y-[-2px]",
                `animation-delay-${(index % 3) * 100}`
              )}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </a>
                  <a 
                    href={project.github}
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
