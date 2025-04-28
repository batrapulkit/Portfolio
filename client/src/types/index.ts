export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}
