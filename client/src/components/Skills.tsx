import { motion } from "framer-motion";
import { technicalSkills, toolsAndFrameworks, softSkills } from "@/lib/data";
import { Code, BarChart, Brain, Database, Shield, Search } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="text-muted max-w-2xl mx-auto">
            My professional toolkit includes a diverse range of technical and soft skills spanning data science,
            artificial intelligence, and cybersecurity.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-dark">{skill.name}</span>
                    <span className="text-sm text-muted">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Frameworks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Tools & Frameworks</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {toolsAndFrameworks.map((tool, index) => {
                let ToolIcon;
                switch (tool.icon) {
                  case "code":
                    ToolIcon = Code;
                    break;
                  case "bar_chart":
                    ToolIcon = BarChart;
                    break;
                  case "psychology":
                    ToolIcon = Brain;
                    break;
                  case "assessment":
                    ToolIcon = Database;
                    break;
                  case "security":
                    ToolIcon = Shield;
                    break;
                  case "manage_search":
                    ToolIcon = Search;
                    break;
                  default:
                    ToolIcon = Code;
                }
                
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      <ToolIcon className="h-5 w-5 text-accent mr-2" />
                      <h4 className="font-medium">{tool.name}</h4>
                    </div>
                    <p className="text-sm text-muted">{tool.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        {/* Soft Skills */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">Soft Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon === "groups" && <svg className="mx-auto h-8 w-8 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                {skill.icon === "forum" && <svg className="mx-auto h-8 w-8 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>}
                {skill.icon === "psychology" && <svg className="mx-auto h-8 w-8 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                {skill.icon === "schedule" && <svg className="mx-auto h-8 w-8 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                <h4 className="font-medium text-dark">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
