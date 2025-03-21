
import { Shield, Code, Server, Database, Lock, Globe, Cpu, Network, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
  {
    name: 'Blockchain Development',
    description: 'Smart contracts, dApps, and blockchain architecture using Ethereum, Solidity, Web3.js',
    icon: Network,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Security Analysis',
    description: 'Penetration testing, vulnerability assessment, and security audits',
    icon: Shield,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'Web Development',
    description: 'Frontend and backend development using React, Node.js, and modern frameworks',
    icon: Globe,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    name: 'ISO 27001 Auditing',
    description: 'Identifying vulnerabilities and ensuring secure ISO 27001 implementations',
    icon: Lock,
    color: 'bg-red-50 text-red-600',
  },
  
  {
    name: 'Frontend Engineering',
    description: 'Creating responsive, modern user interfaces with focus on UX/UI',
    icon: Code,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    name: 'Digital Marketing',
    description: 'Digital Marketing, SEO, SEM, SMM, and Social Media Marketing',
    icon: LineChart,
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    name: 'System Architecture',
    description: 'Woking with Linux, Windows, and MacOS',
    icon: Cpu,
    color: 'bg-slate-50 text-slate-600',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <p className="text-blue-600 font-medium tracking-wider">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            I've honed my skills across multiple domains to deliver comprehensive solutions
            that are secure, scalable, and innovative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={cn(
                "bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all",
                "hover:shadow-md hover:border-slate-200 hover:translate-y-[-2px]",
                `animation-delay-${(index % 3) * 100}`
              )}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", skill.color)}>
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.name}</h3>
              <p className="text-slate-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
