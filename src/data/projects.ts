export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "One-line placeholder description of a project — swap in a real build, the problem it solved, and the impact.",
    tags: ["Python", "Machine Learning"],
    githubUrl: "https://github.com/Teni17",
  },
  {
    title: "Project Two",
    description:
      "One-line placeholder description of a project — swap in a real build, the problem it solved, and the impact.",
    tags: ["TypeScript", "React"],
    githubUrl: "https://github.com/Teni17",
  },
  {
    title: "Project Three",
    description:
      "One-line placeholder description of a project — swap in a real build, the problem it solved, and the impact.",
    tags: ["PyTorch", "NLP"],
    githubUrl: "https://github.com/Teni17",
  },
];
