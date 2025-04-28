import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/github-repos", async (_req: Request, res: Response) => {
    try {
      const username = 'batrapulkit';
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      
      if (!response.ok) {
        throw new Error('GitHub API rate limit exceeded or user not found');
      }
      
      const repos = await response.json();
      res.json(repos);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      res.status(500).json({ message: "Failed to fetch GitHub repositories" });
    }
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, message: "Message sent successfully", data: message });
    } catch (error) {
      console.error("Error saving contact message:", error);
      res.status(400).json({ success: false, message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
