import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GitPullRequest, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-2/3 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Pulkit Batra</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6">
              Data Scientist & Cybersecurity Expert
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Combining expertise in AI, machine learning, and cybersecurity to build secure, 
              data-driven solutions that protect and innovate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="accent" size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="transparent" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-60 h-60 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
              <svg className="w-32 h-32 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-16 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://www.linkedin.com/in/pulkit-batra/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition"
            aria-label="Linkedin Profile"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="https://github.com/batrapulkit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition"
            aria-label="GitPullRequest Profile"
          >
            <GitPullRequest className="w-8 h-8" />
          </a>
          <a 
            href="mailto:batrapulkit1103@gmail.com" 
            className="text-white hover:text-accent transition"
            aria-label="Email"
          >
            <Mail className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
