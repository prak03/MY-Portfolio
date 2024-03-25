// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  kipi,
  line,
  shopify,
  threejs,
  earth,
  p1,
  output,

  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Developer",
    company_name: "Lineysha Technologies",
    icon: line,
    iconBg: "#383E56",
    date: "Apr 2021 - Sept 2021",
    points: [
      "Collaborated with a diverse team to design and implement user interfaces for two major projects, leading to the development of five responsive and visually appealing web pages whilst communicating with team members to understand requirements and provide regular updates.",
      "Utilized HTML, CSS, JavaScript, and ReactJS, following SDLC practices to create interactive features that enhanced user experience and engagement. Integrated JDBC and ODBC for efficient data exchange between the web application and databases, playing a key role in data management and connectivity.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Assisted in bug fixing and testing, resolving 10+ issues to ensure a smooth and error-free user interface.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Kipi.bi",
    icon: kipi,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - April 2022",
    points: [
      "Assisted in the development of Java-based applications, gaining hands-on experience in the software development life-cycle and contributed to coding and debugging for modules within larger applications.",
      "Engaged in learning sessions on software architecture and advanced Java features for future contributions.",
    ],
  },
  
] as const;


// Projects
export const PROJECTS = [
  {
    name: "Netclix",
    description:
      "Self-designed and executed the development of a prototype of a full-stack web application resembling Netflix’s key features while utilizing Java and JavaScript frameworks like Spring for backend and ReactJS for frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/prak03/Netclix",
  },
  {
    name: "TeamTracker",
    description:
      "TeamTracker is a Spring and Java-based employee management system that enables users to add and delete employees, as well as sign in to manage various aspects of employee information and operations.",
      tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: output,
    source_code_link: "https://github.com/prak03/TeamTracker",
  },
  {
    name: "Traquake",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "FLask",
        color: "pink-text-gradient",
      },
      {
        name: "bert",
        color: "blue-text-gradient",
      },
    ],
    image: earth,
    source_code_link: "",
  },
  
] as const;

export const SOCIALS = [
  
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/prakash-kolluru",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/prak03",
  },
] as const;
