import { motion } from "framer-motion";
import { experiences, education, certifications } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="flex flex-col max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <span className="inline-block bg-accent bg-opacity-20 text-accent text-sm font-medium px-3 py-1 rounded-full mb-2">
                  {experience.period}
                </span>
                <h3 className="text-xl font-bold text-primary">{experience.role}</h3>
                <p className="text-muted">{experience.company}, {experience.location}</p>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-accent">
                <ul className="list-disc pl-5 space-y-3 text-dark">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Education & Certifications */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
              <ul className="space-y-4">
                {education.map((edu, index) => (
                  <li key={index} className="border-l-2 border-accent pl-4 py-1">
                    <p className="text-accent font-medium">{edu.date}</p>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted">{edu.institution}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary mb-2">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-success mr-2" />
                    <span>{cert.name} ({cert.issuer})</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
