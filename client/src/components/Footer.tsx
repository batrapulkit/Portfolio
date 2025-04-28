import { GitPullRequest, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-2xl">
              Pulkit<span className="text-accent">Batra</span>
            </h2>
            <p className="text-gray-300 mt-2">Data Scientist & Cybersecurity Expert</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/pulkit-batra/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/batrapulkit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition"
              aria-label="GitPullRequest Profile"
            >
              <GitPullRequest className="h-6 w-6" />
            </a>
            <a 
              href="mailto:batrapulkit1103@gmail.com" 
              className="text-white hover:text-accent transition"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Pulkit Batra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
