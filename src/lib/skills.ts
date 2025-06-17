import test from "node:test";

export type Skill = {
  name: string;
  icon: string; // You can use an icon name, SVG path, or a component reference
};

const skills = {
  frontend: [
    { name: "css", icon: "/icons8-css-48.png" },
    { name: "html", icon: "/icons8-html-26.png" },
    { name: "python", icon: "/icons8-python-48.png" },
    { name: "react", icon: "/icons8-react-40.png" },
    { name: "tailwindcss", icon: "/icons8-tailwindcss-48.png" },
    { name: "typescript", icon: "/icons8-typescript-24.png" },
    { name: "JavaScript", icon: "/icons8-javascript-48.png" },
  ],
  backend: [
    { name: "express.js", icon: "/icons8-express-js-48.png" },
    { name: "mongodb", icon: "/icons8-mongodb-48.png" },

    { name: "postgresql", icon: "/icons8-postgresql-48.png" },
    { name: "python", icon: "/icons8-python-48.png" },

    { name: "node.js", icon: "/icons8-node-js-48.png" },
  ],
  testing: [
    { name: "jest", icon: "/icons8-jest-48.png" },
    { name: "cypress", icon: "/icons8-cypress-48.png" },
    { name: "playwright", icon: "/icons8-playwright-48.png" },
  ],
  devops: [
    { name: "aws", icon: "/icons8-aws-48.png" },
    { name: "docker", icon: "/icons8-docker-48.png" },
    { name: "git", icon: "/icons8-git-48.png" },
  ],
};

export default skills;
