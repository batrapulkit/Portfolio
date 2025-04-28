import { motion } from "framer-motion";
import { technicalSkills, toolsAndFrameworks, softSkills } from "@/lib/data";
import { Code, BarChart, Brain, Database, Shield, Search, Clock, Users, MessageCircle, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const [hoverSkill, setHoverSkill] = useState<number | null>(null);

  // Get appropriate icon for the tool
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return Code;
      case "bar_chart":
        return BarChart;
      case "psychology":
        return Brain;
      case "assessment":
        return Database;
      case "security":
        return Shield;
      case "manage_search":
        return Search;
      default:
        return Code;
    }
  };

  // Get appropriate icon for the soft skill
  const getSoftSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "groups":
        return Users;
      case "forum":
        return MessageCircle;
      case "psychology":
        return Brain;
      case "schedule":
        return Clock;
      default:
        return Lightbulb;
    }
  };

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
        
        <Tabs defaultValue="technical" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8 max-w-md mx-auto">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="tools">Tools & Frameworks</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technical Skills - Left Column */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {technicalSkills.slice(0, Math.ceil(technicalSkills.length / 2)).map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoverSkill(index)}
                    onMouseLeave={() => setHoverSkill(null)}
                    className="relative group"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-dark group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ 
                          boxShadow: hoverSkill === index ? '0 0 10px rgba(0,123,255,0.5)' : 'none'
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Technical Skills - Right Column */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {technicalSkills.slice(Math.ceil(technicalSkills.length / 2)).map((skill, index) => {
                  const actualIndex = index + Math.ceil(technicalSkills.length / 2);
                  return (
                    <motion.div 
                      key={actualIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onMouseEnter={() => setHoverSkill(actualIndex)}
                      onMouseLeave={() => setHoverSkill(null)}
                      className="relative group"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-dark group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                        <span className="text-sm text-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          style={{ 
                            boxShadow: hoverSkill === actualIndex ? '0 0 10px rgba(0,123,255,0.5)' : 'none'
                          }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="tools">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {toolsAndFrameworks.map((tool, index) => {
                const ToolIcon = getToolIcon(tool.icon);
                
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3">
                        <ToolIcon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-primary">{tool.name}</h4>
                    </div>
                    <p className="text-sm text-muted">{tool.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="soft">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {softSkills.map((skill, index) => {
                const SkillIcon = getSoftSkillIcon(skill.icon);
                
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                      <SkillIcon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-primary">{skill.name}</h4>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
