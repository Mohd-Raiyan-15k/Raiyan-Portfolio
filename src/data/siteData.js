import {
  FiAward,
  FiBriefcase,
  FiHome,
  FiMail,
  FiPhone,
  FiTrendingUp,
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import {
  SiCss,
  SiDjango,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import heroOne from "../../layout/images/home/home.png";
import workOne from "../../layout/images/work/img-1.png";
import workTwo from "../../layout/images/work/img-2.png";
import workThree from "../../layout/images/work/img-3.png";
import workFour from "../../layout/images/work/img-4.png";
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "aboutme", label: "About Us" },
  { id: "projects", label: "Projects" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: GrGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohd-raiyan-b96868348/",
    icon: FaLinkedinIn,
  },
  { label: "X", href: "https://x.com/MohdR68251", icon: FaXTwitter },
  {
    label: "Instagram",
    href: "https://www.instagram.com/raiyan_k47/",
    icon: FaInstagram,
  },
  { label: "Email", href: "mohdraiyan68@gmail.com", icon: MdEmail },
];

export const heroContent = {
  accent: "text-amber-500",
  button: "bg-amber-400/15 text-amber-600 ring-amber-400/40",
  image: heroOne,
  titles: ["Frontend Developer", "Python Full Stack"],
};

export const aboutTabs = {
  skills: {
    label: "Skills",
    icon: FiTrendingUp,
    items: [
      {
        label: "HTML",
        value: 95,
        icon: SiHtml5,
        iconClassName: "text-[#e34f26]",
      },
      {
        label: "Tailwind CSS",
        value: 85,
        icon: SiTailwindcss,
        iconClassName: "text-[#38bdf8]",
      },
      { label: "CSS", value: 95, icon: SiCss, iconClassName: "text-[#1572b6]" },
      {
        label: "Python",
        value: 90,
        icon: SiPython,
        iconClassName: "text-[#3776ab]",
      },
      {
        label: "JavaScript",
        value: 95,
        icon: SiJavascript,
        iconClassName: "text-[#f7df1e]",
      },
      {
        label: "Git & GitHub",
        value: 90,
        icon: SiGithub,
        iconClassName: "text-[var(--text)] dark:text-white",
      },
      {
        label: "React",
        value: 90,
        icon: SiReact,
        iconClassName: "text-[#61dafb]",
      },
      {
        label: "Django",
        value: 85,
        icon: SiDjango,
        iconClassName: "text-[#092e20]",
      },
    ],
  },
  experience: {
    label: "Experience",
    icon: FiBriefcase,
    items: [
      {
        title: "Intership at QSpider",
        meta: "Jan-2025 to June-2025 (6 months Experience)",
        description:
          "QSpider is a leading software testing training institute that provides comprehensive training in software testing methodologies, tools, and best practices. During my internship at QSpider.",
      },
      {
        title: "Restocare",
        meta: "Aug-2025 to July-2026 (1 year)",
        description:
          "RestoCare is an on-demand service platform tailored for the restaurant and hospitality industry. It connects restaurants with skilled professionals, offering a range of services from kitchen staff experiences.",
      },
    ],
  },
  education: {
    label: "Education",
    icon: FiAward,
    items: [
      {
        title: "BTech Computer Science",
        meta: "2020-2024 (4 year)",
        description:
          "I did my BTech in CSE from Lovely Professional AKTU University,UP, India. I have completed my graduation in 2024 with 7.6 CGPA.",
      },
      {
        title: "Intermediate",
        meta: "2018-2019",
        description:
          "I did my Intermediate in Science from MDIC Ghazipur, UP, India. I have completed my Intermediate in 2019 with 68% marks.",
      },
      {
        title: "High School",
        meta: "2017-2018",
        description:
          "I did my High School from MDIC Ghazipur, UP, India. I have completed my High School in 2017 with 85% marks.",
      },
    ],
  },
};

export const aboutProfileCard = {
  title: "About Me",
  description:
    "I'm a passionate frontend developer with a strong focus on building interactive and responsive web applications. I love turning ideas into beautiful and functional user interfaces.",
  details: [
    { label: "Name", value: "Mohd Raiyan" },
    { label: "Email", value: "mohdraiyan68@gmail.com" },
    { label: "Location", value: "India" },
    { label: "Experience", value: "1+ Year" },
  ],
  cvLabel: "Download CV",
  cvHref: "/MohdRaiyan_Resume.pdf",
};

export const projects = [
  {
    title: "Book Store",
    image: workOne,
    githubUrl: "https://github.com/Mohd-Raiyan-15k/Book_Store",
    liveUrl: "#",
  },
  {
    title: "GYM Website",
    image: workTwo,
    githubUrl: "https://github.com/Mohd-Raiyan-15k/Gym_web",
    liveUrl: "#",
  },
  {
    title: "CRUD Application",
    image: workThree,
    githubUrl: "https://github.com/Mohd-Raiyan-15k/CRUD-APP-JS",
    liveUrl: "#",
  },
];

export const workItems = [
  { image: workOne, title: "Web Design", category: "E-Commerce" },
  { image: workTwo, title: "NFT Web Design", category: "NFT Marketplace" },
  { image: workThree, title: "Web Design", category: "E-Commerce" },
  { image: workFour, title: "Web Design", category: "E-Commerce" },
];

export const contactDetails = [
  {
    icon: FiHome,
    label: "Address",
    lines: ["c-136 Jasola Vihar Shaheen Bagh, New Delhi, India"],
  },
  {
    icon: FiPhone,
    label: "Phone",
    lines: ["(+91) 8381906024"],
  },
  {
    icon: FiMail,
    label: "Support",
    lines: ["mohdraiyan68@gmail.com"],
  },
];

export const contactFormConfig = {
  recipientEmail: "mohdraiyan68@gmail.com",
  endpoint: "https://formsubmit.co/ajax/mohdraiyan68@gmail.com",
};
