import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const Home = () => {
  const { toast } = useToast();
  
  // Pre-fetch GitHub repositories data
  const { data: repos, error } = useQuery({
    queryKey: ['/api/github-repos'],
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading GitHub repositories",
        description: "Please check your connection or try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects githubRepos={repos} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
