import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GitPullRequest, Linkedin, Mail, ChevronDown, Shield, BarChart2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary opacity-10"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-white opacity-5"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-2/20 via-chart-3/20 to-chart-4/20 blur-3xl -z-10"></div>
        <div className="flex flex-col md:flex-row items-center glass-card p-8 md:p-12">
          <motion.div 
            className="md:w-3/5 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-accent bg-opacity-20 text-accent text-sm font-medium px-4 py-2 rounded-full inline-block mb-4">Data Scientist & Cybersecurity Expert</span>
            </motion.div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Pulkit Batra</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100 leading-relaxed">
              Combining expertise in AI, machine learning, and cybersecurity to build secure, 
              data-driven solutions that protect and innovate.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                variant="accent" 
                size="lg"
                className="rounded-full shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="rounded-full bg-transparent backdrop-blur-sm border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <motion.div 
              className="mt-10 flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="https://www.linkedin.com/in/pulkit-batra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition duration-300"
                aria-label="Linkedin Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/batrapulkit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition duration-300"
                aria-label="GitHub Profile"
              >
                <GitPullRequest className="w-5 h-5" />
              </a>
              <a 
                href="mailto:batrapulkit1103@gmail.com" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-2/5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-lg absolute -inset-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/70 to-accent/70 backdrop-blur-sm border border-white/20 relative z-10 flex items-center justify-center">
                <svg className="w-32 h-32 md:w-40 md:h-40 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>

              {/* Floating skill icons */}
              <motion.div 
                className="absolute top-0 -left-4 w-14 h-14 bg-accent rounded-full flex items-center justify-center z-20 shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <BarChart2 className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div 
                className="absolute bottom-10 -right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center z-20 shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;