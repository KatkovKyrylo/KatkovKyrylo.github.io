import AvatarImage from "../assets/developer/avatar.png";
import ProjectSrc1 from "../assets/developer/projects/1.png";
import ProjectSrc2 from "../assets/developer/projects/2.png";
import { TDeveloperInfo } from "../types/TDevelopersInfo";

export const developerInfo: TDeveloperInfo = {
  username: "kirill-katkov",
  name: "Kirill Katkov",
  avatar: AvatarImage,
  position: "Front-End Developer",
  socials: {
    email: "mailto:kyrylo.katkov@gmail.com",
    github: "https://github.com/KatkovKyrylo",
    upwork: "https://www.upwork.com/freelancers/reactkyrylonext",
  },
  description:
    "I'm a Front-End Developer with 4+ years of experience in the industry. With a strong skill set in JavaScript, TypeScript, React, Redux, Next.js and a range of other technologies, I'm well-equipped to tackle complex front-end development challenges. My commitment to quality is evident in my project outcomes, making me a valuable asset to any development team.",
  education: [
    {
      duration: "09/2018 – 06/2020",
      list: [
        "Master of Computer Applications (MCA)",
        "Advanced programming",
        "University of Information Technology and Management in Rszeszow, Poland",
      ],
    },
    {
      duration: "09/2016 – 06/2018",
      list: ["High School", "Sikorskyi Aerospace Liceum Of NAU in Kyiv, Ukraine"],
    },
  ],
  employmentHistory: [
    {
      position: "Lead Front-End engineer",
      company: "Incode Group",
      duration: "September 2022 - Present",
    },
    {
      position: "Fullstack JavaScript Developer",
      company: "Binary Studio",
      duration: "March 2021 - August 2022",
    },
    {
      position: "Front-end developer",
      company: "DevsData LLC",
      duration: "February 2020 - March 2021",
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
  previousProjects: [
    {
      title: "Datenschutzkonform",
      position: "Front-End Developer",
      duration: "1 year",
      href: "https://datenschutzkonform.ch",
      description:
        "At datenschutzkonform.ch the team craft specific tools, offer targeted training, and provide consulting services tailored to meet the unique needs of companies of all sizes and across various industries. With the proven expertise, web platform ensure that data protection protocols are adhered to and cultivate an environment where data protection is seamlessly integrated into the fabric of the company.",
      technologies: "React, CSS-M, Azure Storage, Azure AD B2C",
      results:
        "A web platform that adheres to data protection protocols and fosters an environment where data protection is organically woven into the fabric of the company. With Azure Active Directory B2C, I orchestrated a seamless authentication and user management system, while Azure Storage empowered users to effortlessly upload and download files from their designated containers.",
      previewSrc: ProjectSrc1,
    },
    {
      title: "ProprHome",
      position: "Front-End Developer",
      duration: "8 months",
      href: "https://proprhome.com",
      description:
        "This is an app for real-estate-related business. It is used both for clients & agents, and the main point is to make this relationship easy and profitable for both sides. This is the first marketplace to reward professional agents for developing a positive reputation. As for the clients - ProprHome enables a verifiable professional history boosting trust, and strengthening relationships. Services are provided as a subscription.",
      technologies: "Next.js, React.js, GraphQL, Typescript, Styled-components, SCSS, Redux-toolkit",
      results:
        "The result of this endeavor is an app that is a transformative tool that sets a new standard in the real estate tech landscape, making ProprHome a pioneer in reshaping the future of client-agent dynamics.",
      previewSrc: ProjectSrc2,
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "Next.JS",
    "React.JS",
    "React Query",
    "Redux",
    "Redux-Toolkit",
    "MaterialUI",
    "TailwindCSS",
    "styled-components",
    "SCSS",
    "Less",
    "Sass",
    "HTML5",
    "CSS3",
    "chart.js",
    "ApexCharts",
    "Firebase",
    "AuthO",
    "Jest",
    "Azure Storage",
    "Azure AD B2C",
    "GitHub",
    "GitLab",
    "BitBucket",
    "Jira",
    "Trello",
  ],
};
