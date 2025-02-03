import AvatarImage from "../../assets/developers/dmitriy-domnich/avatar.jpeg";
import ProjectSrc1 from "../../assets/developers/dmitriy-domnich/projects/1.png";
import ProjectSrc2 from "../../assets/developers/dmitriy-domnich/projects/2.png";
import { TDeveloperInfo } from "../../types/TDevelopersInfo";

export const data: TDeveloperInfo = {
  username: "dmitriy-domnich",
  name: "Dmitriy Domnich",
  avatar: AvatarImage,
  position: "Front-End Developer",
  socials: {
    email: "mailto:dima.domnich.mail@gmail.com",
    github: "https://github.com/DmitriyDomnich",
    upwork: "https://www.upwork.com/freelancers/reactdimaengineer",
  },
  description: `I am a Web Developer with 4 years of commercial experience in Front-End development.
  I professionally deliver clean and structured code, which is easy to maintain in the future, and enjoy
  tackling most complex, non-trivial tasks because they allow me to grow professionally.`,
  education: [{
    list: [
      "Kharkiv National University of Radio Electronics, Bachelor's degree, Computer science",
      "Kharkiv Radio Engineering College, Bachelor's degree, Junior Specialist Degree in Software Engineering",
    ],
  }],
  employmentHistory: [
    {
      position: "Front-End Developer",
      company: "Incode Group",
      duration: "November 2022",
    },
    {
      position: "Front-End Developer",
      company: "QuliSoft",
      duration: "May 2022 - November 2022",
    },
    {
      position: "Freelance Front-End Developer",
      company: "Freelance",
      duration: "October 2021 - May 2022",
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
      title: "Rex",
      position: "Front-End Developer",
      href: "https://www.reservewithrex.com/",
      previewSrc: ProjectSrc2,
      duration: "6 months",
      description:
        "Rex powers online reservations for fun. Accept bookings, manage venue operations, discover new revenue streams, and delight your guests all with Rex.",
      technologies:
        "Next.js, React.js, Typescript, Sass, React query, Redux, Tailwind, MUI, Jest, Stripe, React context, Playwright, Cypress, Fluent UI, Ejs.",
      results:
        "Significantly increased performance of application. Created new version of design for main application and email templates. Redesigned applications which caused better UI/UX for existing clients and caused arrival of new clients. Implemented e2e tests that reduced production issues by 98%. Additionally, helped with API integrations.",
    },
    {
      title: "DreamSender",
      position: "Front-End Developer",
      href: "https://www.dreamsender.ca/",
      previewSrc: ProjectSrc1,
      duration: "6 months",
      description:
        "DreamSender is an advanced internal email marketing tool that a commercial agency uses to get interested leads and meetings for clients. It can build lists, test copy, and the magic part is that it can beat spam filters automatically. Following complex workflows, and working with system entities, such as Senders, Master Lists, using LinkedIn Search Criterias and user defined Sequences, clients are able to run Campaigns, which will lead to clients receiving emails that they can reply to and obtain data that’s displayed on the UI in a user-friendly and easy-to-filter way.",
      technologies:
        "React, TypeScript, Redux + Toolkit, React (RTK) Query, AntUI, DaisyUI, Tailwind. Google, MS oAuth2, Chart.js, Formik, dayjs",
      results:
        "I successfully implemented a seamless, user-friendly, and pixel-perfect design based on the provided Figma design. Achieved close integration with the back-end and database, ensuring smooth data flow and synchronization. Developed reusable and highly customizable UI components. These components are used consistently across the entire application, enhancing maintainability and scalability. Comprehensive error handling mechanisms are in place to display user-friendly error messages, enhancing the overall user experience. Custom, user-created React hooks have been respected and utilized throughout the application, promoting code reuse and simplifying state management. The application has been successfully deployed using AWS hosting services, ensuring reliability and scalability.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "NextJS",
    "ReactJS",
    "React-Storybook",
    "React-Hooks",
    "React-Bootstrap",
    "React Router",
    "Redux",
    "Redux thunk",
    "Redux saga",
    "Redux Toolkit",
    "MUI (Material UI)",
    "TailwindCSS",
    "Bootstrap",
    "styled-components",
    "HTML5",
    "CSS3",
    "SASS",
    "LESS",
    "BEM",
    "socket.io",
    "chartsJS",
    "Apexcharts",
    "Auth",
    "Vercel",
    "GitHub",
    "GitLab",
    "BitBucket",
    "Jira",
    "Trello",
  ],
};