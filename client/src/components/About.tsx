import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="gradient-bg aspect-video w-full flex items-center justify-center">
                <svg className="w-32 h-32 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">Professional Profile</h3>
            <p className="text-dark mb-6">
              I am a multifaceted professional with dual expertise in Data Science/AI and Cybersecurity. With strong programming skills in Python, SQL, and R, I specialize in developing machine learning models and implementing robust security solutions that protect sensitive data.
            </p>
            <p className="text-dark mb-6">
              My experience spans vulnerability assessments, ethical hacking, data analysis, and building AI-powered systems. I'm passionate about the intersection of AI and cybersecurity, where predictive modeling meets threat intelligence to create more secure systems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {personalInfo.map((item, index) => (
                <div key={index}>
                  <h4 className="font-medium text-primary mb-2">{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            
            <Button asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
