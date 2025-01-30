import AvatarImage from "../../assets/developers/daria-cherkasova/avatar.png";
import ProjectSrc1 from "../../assets/developers/daria-cherkasova/projects/1.png";
import ProjectSrc2 from "../../assets/developers/daria-cherkasova/projects/2.png";
import ProjectSrc3 from "../../assets/developers/daria-cherkasova/projects/3.png";
import ProjectSrc4 from "../../assets/developers/daria-cherkasova/projects/4.png";
import { TDeveloperInfo } from "../../types/TDevelopersInfo";

export const dariaCherkasovaDevInfo: TDeveloperInfo = {
  username: "daria-cherkasova",
  name: "Daria Cherkasova",
  position: "Front-End Developer",
  avatar: AvatarImage,
  socials: {
    github: "https://github.com/dariaismyname",
    upwork: "https://www.upwork.com/freelancers/daria1frontend1react",
    email: "mailto:daria.cherkasova.work@gmail.com",
  },
  description:
    "I have been a front-end developer for 3 years, crafting web apps from the ground up, adding new features, and modernizing existing ones. My focus is on making awesome user interfaces using the newest web techniques. I'm good at English and love teamwork, so I'm all set for great team chats and smooth coordination.",
  previousProjects: [
    {
      title: "NB e-Commerce Store",
      position: "Front-End Developer",
      duration: "3 months",
      href: "https://www.naturebaby.com/",
      previewSrc: ProjectSrc1,
      description:
        "Nature Baby is an e-commerce online store where you can find baby clothes for newborns and older children, skincare and other cosmetics, home accessories, etc.",
      technologies: "React.js, Google API, Google Maps API, Facebook API, Figma, GitHub",
      results:
        "I transformed design files into functional React.js components, creating an attractive and user-friendly interface, and used Google and Facebook APIs for additional features and integration with Google Maps.",
    },
    {
      title: "Healthcare Management App",
      position: "Front-End Developer",
      duration: "6 months",
      href: "https://app.numuw.ac/login",
      previewSrc: ProjectSrc2,
      description:
        "Numuw is a healthcare booking platform where users can make an appointment with a doctor, see what doctors are available in the area, view reviews from other users who have visited the doctor, view the history of their visit and the treatment prescribed by the doctor, pay for a visit to the doctor and much more.",
      technologies:
        "React.JS, Redux Toolkit, Sass, MaterialUI, uid, i18, React Hook Form, React Dropzone, cal.com, Tap Payments",
      results:
        "In summary, the project's front-end development enhanced user accessibility and engagement, fostering a seamless experience for booking appointments, accessing doctor information, and managing treatment history. The culmination of efforts resulted in an intuitive interface that empowered users to navigate and utilize the healthcare platform efficiently.",
    },
    {
      title: "An Online Marketplace",
      position: "Front-End Developer",
      duration: "3 months",
      href: "https://www.klekt.com/",
      previewSrc: ProjectSrc3,
      description:
        "Klekt is actually not only a sneakers shop you can also buy other sportswear using this marketplace, however, sneakers are also the most popular output.",
      technologies: "HTML5, CSS3, JavaScript, React.js, Next.js, Figma",
      results:
        "At Klekt, I modernized the online store's front end by upgrading Next.js to version 13 and integrating design updates from Figma, primarily utilizing React.js. This enhanced user experience spans beyond sneakers to encompass various sportswear available in their marketplace.",
    },
    {
      title: "SaaS application for restaurants",
      position: "Front-End Developer",
      duration: "4 months",
      href: "https://www.deliverect.com",
      previewSrc: ProjectSrc4,
      description:
        "SaaS application for restaurants - the complete solution for digital food ordering. One platform to manage operations and drive revenue. It's a large Management system that allows restaurants and kitchens to synchronize with customers and orders, this system is for your POS (point of sale) and not only.",
      technologies: "React.JS, styled-components, Storybook, Figma, GitHub, Slack",
      results:
        "As a front-end developer on this SaaS application for restaurants, I successfully translated Figma designs into efficient, functional React components using tools like styled components and react-storybook. I ensured top-notch accuracy, functionality, and cross-browser compatibility for all pages and components, enhancing the platform's usability and visual appeal while streamlining restaurant operations.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux.js",
    "Next.js",
    "HTML5 / CSS3",
    "SCSS / Less / Sass",
    "TailwindCSS",
    "Material UI",
    "styled-components",
    "i18",
    "charts.js",
    "HighCharts.js",
    "ApexCharts.js",
    "PostgresQL",
    "Firebase",
    "GitHub",
    "GitLab",
    "BitBucket",
    "Jira",
    "Trello",
    "Scrum",
    "Agile",
  ],
  education: [
    {
      duration: "2021 - 2023",
      list: [
        "Master of Social Work (MSW), Social work",
        "Lviv Polytechnic National University",
        "Bachelors of Computer Science",
      ],
    },
  ],
  employmentHistory: [
    {
      position: "Front-End Developer",
      company: "Incode-group",
      duration: "March 2023 - April 2024",
    },
    {
      position: "Web Developer React.js Next.js Redux.js engineer",
      company: "Zrobleno Solutions",
      duration: "December 2022 - February 2023",
    },
    {
      position: "Software Engineer Front-End developer",
      company: "BigBird",
      duration: "January 2022 - November 2022",
    },
  ],
  languages: [
    {
      name: "english",
      spoken: "Upper-Intermediate",
      written: "Upper-Intermediate",
      level: "B2",
    },
  ],
};
