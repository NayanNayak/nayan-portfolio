import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    /* EmailJS Setup Instructions:
     * 1. Create an account at https://www.emailjs.com/
     * 2. Add your Gmail (sahnayan2061@gmail.com) as an Email Service:
     *    - Go to "Email Services" tab and click "Add New Service"
     *    - Choose "Gmail" and connect your account
     *    - Note the Service ID (replace 'YOUR_EMAILJS_SERVICE_ID' below)
     * 3. Create an Email Template:
     *    - Go to "Email Templates" tab and click "Create New Template"
     *    - Design your template using these variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
     *    - Subject line could be: "Portfolio Contact: {{subject}}"
     *    - Note the Template ID (replace 'YOUR_EMAILJS_TEMPLATE_ID' below)
     * 4. Get your Public Key:
     *    - Go to "Account" > "API Keys"
     *    - Copy your Public Key (replace 'YOUR_EMAILJS_PUBLIC_KEY' below)
     */
    
    // EmailJS configuration
    const serviceId = 'service_z2rlvd8';  // Your EmailJS service ID
    const templateId = 'template_c1i1106'; // This should be your template ID, not the same as serviceId
    const publicKey = 'v1igkpcxMespGPfie';  // Public key from your EmailJS account
    
    // Prepare template parameters - these will be inserted into your email template
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      to_email: 'sahnayan2061@gmail.com', // Your email will be set in the EmailJS service
      subject: formState.subject,
      message: formState.message
    };
    
    // Send the email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 10000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <p className="text-blue-600 font-medium tracking-wider">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaboration, consultation, or just to say hello!
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fade-up">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
              <p className="text-slate-600">
                I'm currently available for freelance work, consulting, and collaboration opportunities.
                Don't hesitate to get in touch!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email</p>
                  <p className="text-slate-900 font-medium">sahnayan2061@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Phone</p>
                  <p className="text-slate-900 font-medium">+977 9824736656</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Location</p>
                  <p className="text-slate-900 font-medium">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <div className="glass-effect rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Let's connect</h4>
                <p className="text-slate-600 mb-4">
                  Follow me on social media to stay updated with my latest projects and insights.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/NayanNayak" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nayan-raj-sah-a90760246/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/nayan.nayak.616" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/the.eyenayak/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg transition-all transform font-medium",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700 hover:shadow-md hover:translate-y-[-2px]"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {submitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200 shadow-md flex items-center gap-3 animate-fade-in">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg border border-red-200 shadow-md flex items-center gap-3 animate-fade-in">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="font-medium">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
