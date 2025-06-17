type educationData = {
  title: string;
  institution: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const educationDatas: educationData[] = [
  {
    title: "Full-Stack Development Coding Bootcamp",
    institution: "Dented Code Academy",
    location: "Sydney, NSW",
    period: "July 2022 - April 2023",
    bullets: [
      "Completed intensive training in MERN stack development, including ReactJS, Node.js, MongoDB, and Express.",
      "Developed real-life projects using agile methodologies and participated in sprint cycles for feature development and testing.",
      "Proficient in API integration and collaboration with cross-functional teams.",
    ],
  },
  {
    title: "Bachelor's Degree - Information Technology and Systems",
    institution: "Victorian Institute of Technology",
    location: "Sydney, NSW",
    period: "March 2020 - June 2022",
    bullets: [
      "Coursework focused on software testing, Java programming, database fundamentals, and software development life cycle.",
    ],
  },
];
