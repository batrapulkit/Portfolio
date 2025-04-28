import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import GitHubRepos from "@/components/GitHubRepos";
import { ShoppingCart, Bird, MessageSquare } from "lucide-react";

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
    default:
      return <ShoppingCart className="h-12 w-12" />;
  }
};

const Projects = ({ githubRepos }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="text-muted max-w-2xl mx-auto">
            Explore my portfolio of data science and cybersecurity projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 gradient-bg flex items-center justify-center">
                <span className="text-white text-5xl">{getProjectIcon(project.icon)}</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold text-primary mt-2 mb-3">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-muted text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">{project.period}</span>
                  <a href={project.link || "#"} className="text-accent font-medium hover:underline">
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* GitHub Repositories */}
        <motion.div 
          className="mt-16"
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
