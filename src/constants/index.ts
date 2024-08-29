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
  vitals7,

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
    title: "Full Stack Developer",
    company_name: "Vitals7",
    icon: vitals7,
    iconBg: "#383E56",
    date: "Sept 2023 - Aug 2021",
    points: [
      "Played a key role in building a platform that integrates with a medical device to monitor and display vitals like blood pressure.",
      "Built features allowing patients to link with healthcare providers, book appointments, and manage their healthcare interactions through a user-friendly interface.",
      "Integrated Zoom LTK to enable video call sessions between doctors and patients, enhancing telemedicine capabilities.",
      "Developed a messaging system for seamless communication between patients and doctors, ensuring secure and efficient information exchange.",
      "Engineered dynamic integration of vitals from the medical device into the patient’s profile, allowing doctors to monitor and prescribe medications effectively.",
      "Employed ReactJS, TypeScript, and Node.js with Tailwind CSS for the frontend, and FastAPI with Pydantic for the backend, ensuring a robust and scalable application.",
      "Used MongoDB as the database with Beanie for efficient data retrieval, ensuring quick access to patient information and vitals."

    ],
  },
  {
    title: "Software Developer",
    company_name: "Kipi.bi",
    icon: kipi,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - April 2022",
    points: [
      "Collaborated with cross-functional teams to design and implement user interfaces for two major projects, leading to the development of five responsive and visually appealing web pages using AngularJS and TailwindCSS.",
      "Engineered robust APIs in Spring, documented in Swagger, Postman and ensured high performance with JUnit testing.",
      "Integrated RESTful APIs and asynchronous data handling using observables in Angular, ensuring real-time data updates.",
      "Containerized applications using Docker to facilitate smooth CI/CD pipelines and deployed containerized applications on Kubernetes clusters, managing scalability, load balancing, and seamless rollouts and rollbacks.",
      
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
    live_site_link : "https://netclix-gamma.vercel.app/auth",
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
