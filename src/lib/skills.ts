export type Skill = {
  name: string;
};

const skills: {
  FRONTEND: Skill[];
  BACKEND: Skill[];
  TESTING: Skill[];
  DEVOPS: Skill[];
} = {
  FRONTEND: [
    { name: "css" },
    { name: "html" },
    { name: "python" },
    { name: "react" },
    { name: "tailwindcss" },
    { name: "typescript" },
    { name: "JavaScript" },
  ],
  BACKEND: [
    { name: "express.js" },
    { name: "mongodb" },
    { name: "postgresql" },
    { name: "python" },
    { name: "node.js" },
  ],
  TESTING: [{ name: "jest" }, { name: "cypress" }, { name: "playwright" }],
  DEVOPS: [{ name: "aws" }, { name: "docker" }, { name: "git" }],
};

export default skills;
