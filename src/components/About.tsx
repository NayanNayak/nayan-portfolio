import { Calendar, MapPin, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <p className="text-blue-600 font-medium tracking-wider">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            My Background & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-slate-700 text-lg leading-relaxed">
              I'm a passionate technologist with deep expertise in blockchain technology, cybersecurity, and web development.
              My journey in technology began over a 3 years ago, and I've since worked with various organizations as Security Analyst
              and Security Consultant.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              I specialize in developing decentralized applications (dApps), smart contracts, and implementing robust security
              protocols. My background in security analysis allows me to approach every project with a security-first mindset,
              ensuring that all solutions are not only functional but also secure against modern threats.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring
              aspiring developers. I believe in the power of technology to solve real-world problems and am constantly exploring
              new innovations in the blockchain and security spaces.
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-medium">3+ Years</p>
                  <p className="text-slate-600 text-sm">In Security</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Nepal</p>
                  <p className="text-slate-600 text-sm">Location</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Top Rated</p>
                  <p className="text-slate-600 text-sm">ISMS</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-300">
            <div className="absolute -top-6 -left-6 w-60 h-60 bg-blue-100 rounded-lg transform rotate-6"></div>
            <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-blue-200 rounded-lg transform -rotate-6"></div>
            <div className="relative glass-effect p-1 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform w-full max-w-sm mx-auto">
              <img 
                src="src/img/IMG_20230623_213754.jpg" 
                alt="Nayan Sah" 
                className="w-full h-auto max-h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
