import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import GitHubRepos from "@/components/GitHubRepos";
import { ShoppingCart, Bird, MessageSquare, Shield, BarChart2, PieChart, Database } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  githubRepos?: any[];
}

const getProjectIcon = (iconName: string) => {
  switch (iconName) {
    case "shopping_cart":
      return <ShoppingCart className="h-12 w-12" />;
    case "pets":
      return <Bird className="h-12 w-12" />;
    case "chat":
      return <MessageSquare className="h-12 w-12" />;
    case "security":
      return <Shield className="h-12 w-12" />;
    case "assessment":
      return <BarChart2 className="h-12 w-12" />;
    case "database":
      return <Database className="h-12 w-12" />;
    case "analytics":
      return <PieChart className="h-12 w-12" />;
    default:
      return <ShoppingCart className="h-12 w-12" />;
  }
};

const Projects = ({ githubRepos }: ProjectsProps) => {
  const [filter, setFilter] = useState("All");
  
  // Get unique categories
  const uniqueCategories = ["All"];
  projects.forEach(project => {
    if (!uniqueCategories.includes(project.category)) {
      uniqueCategories.push(project.category);
    }
  });
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="text-muted max-w-2xl mx-auto mb-6">
            Explore my portfolio of data science and cybersecurity projects that demonstrate my technical skills and problem-solving abilities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 my-8">
            {uniqueCategories.map((category: string, index: number) => (
              <Button 
                key={index}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-52 gradient-bg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <motion.div 
                  className="text-white text-5xl relative z-10"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getProjectIcon(project.icon)}
                </motion.div>
                <Badge className="absolute top-3 right-3 bg-accent text-white">
                  {project.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mt-2 mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-primary text-xs px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-sm text-muted">{project.period}</span>
                  <a 
                    href={project.link || "#"} 
                    className="text-accent font-medium hover:underline flex items-center"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* GitHub Repositories */}
        <motion.div 
          className="mt-20 pt-10 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading text-2xl font-bold text-primary mb-8 text-center">GitHub Repositories</h3>
          <GitHubRepos repos={githubRepos} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
