export type Skill = {
  name: string;
  icon: string; // You can use an icon name, SVG path, or a component reference
};

const skills: Skill[] = [
  { name: "JavaScript", icon: "/icons8-javascript-48.png" },
  { name: "aws", icon: "/icons8-aws-48.png" },
  { name: "css", icon: "/icons8-css-48.png" },
  { name: "docker", icon: "/icons8-docker-48.png" },
  { name: "html", icon: "/icons8-html-26.png" },
  { name: "jest", icon: "/icons8-jest-24.png" },
  { name: "node.js", icon: "/icons8-node-js-48.png" },
  { name: "python", icon: "/icons8-python-48.png" },
  { name: "react", icon: "/icons8-react-40.png" },
  { name: "tailwindcss", icon: "/icons8-tailwindcss-48.png" },
  { name: "typescript", icon: "/icons8-typescript-24.png" },
];

export default skills;
