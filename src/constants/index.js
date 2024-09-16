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
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tesla,
  fiverr,
  asiana,
  ae,
  blender,
  python,
  phicsit,
  pinpencil,
  phriday,
  travel,
  video,
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
    icon: web,
  },
  {
    title: "Ui/UX designer",
    icon: mobile,
  },
  
  {
    title: "Video/graphic editor",
    icon: creator,
  },
];

const technologies = [
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
    name: "python",
    icon: python,
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
    name: "Adobe after affect",
    icon: ae,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "blender",
    icon: blender,
  },
  
];

const experiences = [
  {
    title: "UI/UX designer",
    company_name: "Phicsit technologies",
    icon: phicsit,
    iconBg: "#383E56",
    date: "july 2023 - sept 2023",
    points: [
      "Developing and maintaining company website using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers,and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Freelance Developer , designer and video editor",

    company_name:"fiverr",

    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "feb 2022 - present",
    points: [
      "Developing and maintaining web applications,design and video using React.js, figma  and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and othr client requirements to create high-quality products.",
      "Implementing responsive website and logo design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic and Content designer",
    company_name: "Asiana Times",
    icon: asiana,
    iconBg: "#383E56",
    date: "june 2023 - Oct 2023",
    points: [
      "Content and Graphic designer for the portal",
      "Collaborating with cross-functional teams including designers, writers and other stakes",
    ],
  },
  {
    title: "Video designer and editor",
    company_name: "Pinpencil llp pvt",
    icon: pinpencil,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - march 2023",
    points: [
      "Multiple video designing according to the requirement of company",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "If you're looking for a animated logo that's original and not some hyped up template, this is the guy to contact.",
    name: "ankbrown947",
    company: "USA",
    
  },
  {
    testimonial:
      "He's Creative and loves his Craft.",
    name: "avi sharma",
    country: "usa",
    company: "USA",
    
  },
  
];

const projects = [
  {
    name: "Phriday - the virtual voice activated AI assistant",
    description:
      "Developed a voice-activated AI assistant with information retrieval via voice",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Pyttsx3,",
        color: "green-text-gradient",
      },
      {
        name: "Opencv",
        color: "pink-text-gradient",
      },
    ],
    image: phriday,
    source_code_link: "https://github.com/Phsus/Phriday",
  },
  {
    name: "Travel Website project",
    description:
      "Developed a responsive travel website using HTML, CSS, Bootstrap, and JavaScript with sections for destinations, company info, and a helpdesk chatbot for enhanced user experience",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Phsus/futurereadytalenttravelagency",
  },
  {
    name: "Video editing projects",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "adobe after affect",
        color: "blue-text-gradient",
      },
      {
        name: "adobe preimiere pro",
        color: "green-text-gradient",
      },
      {
        name: "blender",
        color: "pink-text-gradient",
      },
    ],
    image: video,
    source_code_link: "https://www.fiverr.com/s/rEr77rb",
  },
];

export { services, technologies, experiences, testimonials, projects };
