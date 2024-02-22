import {
  SiCss3,
  SiExpress,
  SiHandlebarsdotjs,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiPhp,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export const work = [
  {
    company: "Moby",
    position: "Web Developer",
    start: "Jan 2024",
    description:
      "As Moby's Web Developer, I hold full responsibility for website management. I am currently leading the development of a new, Next.js-based website to bring Moby's online presence to the next level.",
    location: "Calgary, AB",
    map: "https://maps.app.goo.gl/XLSY5paRccDjr5MVA",
    bullets: [
      "Leading the development of a new website using Next.js and modern technologies, aiming to improve automation capabilities, enhance SEO, and elevate overall user experience.",
      "Continuously optimizing website performance and functionality through regular updates, maintenance, and the implementation of new features and enhancements.",
      "Collaborating with cross-functional teams to ensure that the website meets the needs of various stakeholders, including marketing, sales, and customer support.",
    ],
    website: "https://getmoby.com",
  },
  {
    company: "Moby",
    position: "Jr. Web Developer",
    start: "Jan 2023",
    end: "Dec 2023",
    description:
      "Quickly assumed full responsibility for Moby's website within six months of joining, implementing numerous automations to streamline processes and enhance operational efficiency.",
    location: "Calgary, AB",
    map: "https://maps.app.goo.gl/XLSY5paRccDjr5MVA",
    bullets: [
      "Enhanced website functionality and efficiency through customized automation solutions, significantly reducing manual workload and improving overall operational effectiveness.",
      "Designed and developed various pages for monthly promotions, ensuring optimal SEO performance and user engagement.",
      "Implemented a series of automation processes to streamline tasks such as updates to pricing, customer sign-ups, cancellations, and moving requests.",
    ],
    website: "https://getmoby.com",
  },
  {
    company: "Computer Upgrading Specialists",
    position: "IT Technician",
    start: "Oct 2022",
    end: "Dec 2022",
    description:
      "Provided technical support to customers, troubleshooting hardware and software issues, and installing and configuring new systems.",
    location: "Calgary, AB",
    map: "https://maps.app.goo.gl/rUdzW9QUoE75ngtq6",
    bullets: [
      "Acted as a primary point of contact for customers seeking technical support, providing timely and accurate responses to their inquiries and concerns.",
      "Performed a variety of technical tasks, including troubleshooting hardware and software issues, configuring and installing new systems, and upgrading existing systems.",
      "Maintained accurate records of all technical support interactions and resolution efforts, ensuring that all customer issues were resolved in a timely and satisfactory manner.",
    ],
    website: "http://www.computerupgraders.ca/",
  },
  {
    company: "The Sign Source",
    position: "Sign Production Specialist",
    start: "Oct 2018",
    end: "Dec 2022",
    description:
      "Developed a keen eye for detail and honed my project management skills while producing a wide range of signs and graphics for customers.",
    location: "Winnipeg, MB",
    map: "https://maps.app.goo.gl/YVY1fiLZUUtyoALH9",
    bullets: [
      "Operated a variety of sign production equipment, including large format printers, vinyl cutters, and laminators.",
      "Produced a wide range of signs and graphics, including banners, vehicle wraps, and window graphics.",
      "Assisted with the installation of signs and graphics at customer sites, ensuring that all work was completed to the highest standards of quality and safety.",
    ],
    website: "http://www.thesignsource.com/",
  },
];

export const skills = [
  {
    title: "Frameworks",
    technologies: [
      {
        title: "React",
        description: "JavaScript library for building user interfaces.",
        icon: <SiReact />,
        link: "https://reactjs.org/",
      },
      {
        title: "Next.js",
        description:
          "Full-stack React framework for server-rendered applications.",
        icon: <SiNextdotjs />,
        link: "https://nextjs.org/",
      },
      {
        title: "Express",
        description:
          "Fast, unopinionated, minimalist web framework for Node.js.",
        icon: <SiExpress />,
        link: "https://expressjs.com/",
      },
      {
        title: "EJS",
        description: "Embedded JavaScript templating.",
        icon: (
          <span
            style={
              ({ fontFamily: "Montserrat, sans-serif" }, { fontSize: "75%" })
            }
          >
            EJS
          </span>
        ),
        link: "https://ejs.co/",
      },
      {
        title: "Handlebars",
        description: "Minimal templating on steroids.",
        icon: <SiHandlebarsdotjs />,
        link: "https://handlebarsjs.com/",
      },
      {
        title: "Tailwind CSS",
        description: "Utility-first CSS framework.",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
      },
      {
        title: "Bootstrap",
        description: "Front-end component library.",
        icon: <SiBootstrap />,
        link: "https://getbootstrap.com/",
      },
    ],
  },
  {
    title: "Languages",
    technologies: [
      {
        title: "JavaScript",
        description: "High-level, interpreted programming language.",
        icon: <SiJavascript />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "TypeScript",
        description:
          "Typed superset of JavaScript that compiles to plain JavaScript.",
        icon: <SiTypescript />,
        tag: "New",
        link: "https://www.typescriptlang.org/",
      },
      {
        title: "Python",
        description:
          "High-level programming language for general-purpose programming.",
        icon: <SiPython />,
        link: "https://www.python.org/",
      },
      {
        title: "Java",
        description: "Class-based, object-oriented programming language.",
        icon: <FaJava />,
        link: "https://www.java.com/",
      },
      {
        title: "C#",
        description:
          "Simple, general-purpose, object-oriented programming language.",
        icon: <SiCsharp />,
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        title: "PHP",
        description:
          "Server-side scripting language designed for web development.",
        icon: <SiPhp />,
        link: "https://www.php.net/",
      },
      {
        title: "HTML",
        description:
          "Standard markup language for documents designed to be displayed in a web browser.",
        icon: <SiHtml5 />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        title: "CSS",
        description:
          "Style sheet language used for describing the presentation of a document written in HTML.",
        icon: <SiCss3 />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        title: "SASS",
        description: "CSS extension language.",
        icon: <SiSass />,
        link: "https://sass-lang.com/",
      },
      {
        title: "SQL",
        description: "Structured Query Language.",
        icon: <TbSql />,
        link: "https://www.w3schools.com/sql/",
      },
    ],
  },
  {
    title: "Runtime Environments",
    technologies: [
      {
        title: "Node.js",
        description:
          "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        icon: <SiNodedotjs />,
        link: "https://nodejs.org/",
      },
      {
        title: ".NET",
        description:
          "Free, cross-platform, open-source developer platform for building many different types of applications.",
        icon: <SiDotnet />,
        link: "https://dotnet.microsoft.com/",
      },
    ],
  },
  {
    title: "Databases",
    technologies: [
      {
        title: "MongoDB",
        description: "NoSQL database program.",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/",
      },
      {
        title: "MySQL",
        description: "Open-source relational database management system.",
        icon: <SiMysql />,
        link: "https://www.mysql.com/",
      },
      {
        title: "PostgreSQL",
        description: "Open-source object-relational database system.",
        icon: <SiPostgresql />,
        link: "https://www.postgresql.org/",
      },
      {
        title: "FireStore",
        description: "Cloud-hosted NoSQL database.",
        icon: <SiFirebase />,
        link: "https://firebase.google.com/",
      },
    ],
  },
  {
    title: "Design",
    technologies: [
      {
        title: "Figma",
        description: "Collaborative interface design tool.",
        icon: <SiFigma />,
        link: "https://www.figma.com/",
      },
      {
        title: "Photoshop",
        description: "Raster graphics editor.",
        icon: <SiAdobephotoshop />,
        link: "https://www.adobe.com/ca/products/photoshop.html",
      },
      {
        title: "Illustrator",
        description: "Vector graphics editor.",
        icon: <SiAdobeillustrator />,
        link: "https://www.adobe.com/ca/products/illustrator.html",
      },
    ],
  },
  {
    title: "Coding Tools",
    technologies: [
      {
        title: "Git",
        description: "Distributed version control system.",
        icon: <SiGit />,
        link: "https://git-scm.com/",
      },
      {
        title: "GitHub",
        description: "Web-based Git repository hosting service.",
        icon: <SiGithub />,
        link: "https://github.com/",
      },
      {
        title: "Visual Studio Code",
        description: "Source-code editor developed by Microsoft.",
        icon: <SiVisualstudiocode />,
        link: "https://code.visualstudio.com/",
      },
      {
        title: "Postman",
        description: "API development environment.",
        icon: <SiPostman />,
        link: "https://www.postman.com/",
      },
    ],
  },
];
