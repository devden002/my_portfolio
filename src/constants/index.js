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
  xeptos,
  tcs,
  capgemini,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Website Designer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Communicated with product managers, UX, and backend developers to develop the frontend part of the Application.",
      "Worked as a senior frontend developer developed and delivered short term duration projects.",
      "Proved successful working within tight deadlines and a fast-paced atmosphere.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Tata Consultancy Limited",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Apr 2016 - Sept 2021",
    points: [
      "Communicated with product managers and UX designers to translate project requirements and business objectives into polished user interfaces.",
      "Improved and expanded project platforms using UI Technologies to develop rich user interfaces.",
      "Developed component libraries (e.g.: Autocomplete, Tooltip, Text Area, Flip card...) within frontend web framework such as React Js.",
      "Developed Application UIs via emerging Frontend Technologies such as HTML5, CSS3, JavaScript, React Js, Redux, Bootstrap, Context Api, React Hooks.",
      "Collaborated with teammates to deliver valuable features meeting business and customer needs.",
      "Collaborated with developers to integrate UI features complying with prescribed code standards and technical coding guidelines.",
      "Proved successful working within tight deadlines and a fast-paced atmosphere.",
      "Created plans and communicated deadlines to ensure projects were completed on time.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "Xeptos sol pvt ltd",
    icon: xeptos,
    iconBg: "#E6DEDD",
    date: "Feb 2015 - Jan 2016",
    points: [
      "Utilized WordPress to design web pages.",
      "Employed Photoshop and Illustrator to create logos.",
      "Modified WordPress templates based on provided designs.",
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
    name: "Food Ordering",
    description:
      "An innovative food ordering web app that connects users with a wide range of restaurants, offering seamless browsing, ordering, and delivery services. Enjoy the convenience of exploring diverse menus and tracking your food from kitchen to doorstep, all in one place.",
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
    name: "Travel Yaari",
    description:
      "Experience the world with ease through our travel website. Search, compare, and book flights, hotels, and activities from a variety of trusted providers. Enjoy personalized recommendations, travel guides, and hassle-free itinerary management for an unforgettable journey, all at your fingertips.",
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
    name: "Finance Guide",
    description:
      "Empower your financial decisions with our user-friendly finance guide app. Gain insights on budgeting, investing, and saving strategies. Stay updated with real-time market data, track expenses, and set financial goals. Take control of your finances and achieve financial freedom with our comprehensive app.",
    tags: [
      {
        name: "react",
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

export { services, technologies, experiences, testimonials, projects };
