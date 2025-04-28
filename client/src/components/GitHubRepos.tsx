import { useQuery } from "@tanstack/react-query";
import { Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

interface GitHubReposProps {
  repos?: Repo[];
}

const GitHubRepos = ({ repos: propsRepos }: GitHubReposProps) => {
  // If repos are passed via props, use them, otherwise fetch from API
  const { data: reposData, isLoading, error } = useQuery({
    queryKey: ['/api/github-repos'],
    enabled: !propsRepos,
  });

  const repos = propsRepos || reposData;

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <p className="text-center text-muted mt-4">Loading repositories...</p>
          </div>
        ))}
      </div>
    );
  }

  if (error || !repos) {
    return (
      <div className="col-span-full text-center">
        <p className="text-muted mb-2">Couldn't load GitHub repositories.</p>
        <p className="text-sm">
          Visit{" "}
          <a 
            href="https://github.com/batrapulkit" 
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <p className="text-center text-muted col-span-full">No public repositories found.</p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.slice(0, 6).map((repo, index) => (
        <motion.div 
          key={repo.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="p-6">
            <h3 className="text-lg font-bold text-primary mb-2">{repo.name}</h3>
            <p className="text-muted mb-4 h-20 overflow-hidden">
              {repo.description || "No description available"}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-muted text-xs px-2 py-1 rounded">
                {repo.language || "No language data"}
              </span>
              <span className="bg-gray-100 text-muted text-xs px-2 py-1 rounded flex items-center">
                <Star className="h-3 w-3 mr-1" />
                {repo.stargazers_count}
              </span>
              <span className="bg-gray-100 text-muted text-xs px-2 py-1 rounded flex items-center">
                <GitFork className="h-3 w-3 mr-1" />
                {repo.forks_count}
              </span>
            </div>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline"
            >
              View Repository
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GitHubRepos;
