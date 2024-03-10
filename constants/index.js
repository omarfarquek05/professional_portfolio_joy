import { RiJavascriptLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

export const educations = [
  {
    id: 1,
    title: "B.Sc in Computer Science & Engineering",
    duration: "2019-2023 completed",
    institution: "Cox's Bazar International University",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    duration: "2017-2019 completed",
    institution: "Cox's Bazar City College",
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    duration: "20011-2016 completed",
    institution: "Cox's Bazar Model High School",
  }
]


export const icons = [
  <IoLogoHtml5 />,
  <FaCss3Alt />,
  <BiLogoTailwindCss />,
  <RiJavascriptLine />,
  <IoLogoReact />,
  <TbBrandRedux />,
  <FaNode />,
  <SiExpress />,
  <SiMongodb />,
  <TbBrandNextjs />,
  <FaGitAlt />,
  <FaGithub />
]


export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Projects",
    route: "#projects",
  },
  {
    label: "Skills",
    route: "#skills",
  },
  {
    label: "Contact",
    route: "#contact",
  },
  {
    label:"Education",
    route: "#education"
  }
];

export const skills = [
  "html",
  "css3",
  "tailwindCSS",
  "javascript",
  "reactJS",
  "Redux/RTK",
  "nodeJS",
  "expressJS",
  "mongoDB",
  "nextJS",
  "Git",
  "GitHub",
];
