import {
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  carrent,
  jobit,
  tripguide,
  mui,
  antd,
  aggrid,
  azure,
  node,
  internet,
  python,
  api,
  react1,
  aroopa,
  longshore,
  instagram3d,
  linkedin3d,
  github3d,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: internet,
  },
  {
    title: "React Js Developer",
    icon: react1,
  },
  {
    title: "Backend Developer",
    icon: node,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Api Integrations",
    icon: api,
  },
];

const technologies = [
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
    name: "MUI",
    icon: mui,
  },
  {
    name: "Ant Design",
    icon: antd,
  },
  {
    name: "Ag Grid",
    icon: aggrid,
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
    name: "Azure",
    icon: azure,
  },
  {
    name: "git",
    icon: git,  
  },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Aroopa Technologies",
    icon: aroopa,
    iconBg: "#383E56",
    date: "Feb 2023 - June 2024",
    points: [
      "Developing and maintaining web applications using React Js, React Redux, Node Js, and Express Js.",
      "Designing and implementing responsive user interfaces with React JS and pure CSS.",
      "Utilized AG Grid extensively to implement advanced data table functionalities such as drag and drop between two AG Grid tables, cell rendering, sorting, filtering and pagination on the server side.",
      "Designed and developed a custom drag and drop functionality using React DND's Hooks, that allowing users to intuitively rearrange rows within and between in Material-UI tables.",

      "Collaborated with team members on Azure DevOps to ensure smooth code integration, push, pull, and commit operations.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Longshore",
    icon: longshore,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrated React Redux for state management and implemented actions, reducers, and selectors.",
      "Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.",
      "Designed and integrated an intuitive user interface that allowed users to dynamically add and remove rows within the MUI table, providing a seamless experience for data management and manipulation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const follow = [
  {
    name: "linkedin",
    icon: linkedin3d,
    link: "https://www.linkedin.com/in/parthiban-s-682b1822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "github",
    icon: github3d,
    link : "https://github.com/Parthi006"
  },
  {
    name: "instagram",
    icon: instagram3d,
    link : "https://www.instagram.com/parthiban_raj_?igsh=MWdsMnd5OHhkY3Bqbw=="
  },
]
export { services, technologies, experiences, testimonials, projects, follow };
