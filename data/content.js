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
import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaJava,
  FaPython,
  FaTable,
  FaTerminal,
} from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { IoCodeSlash, IoLogoJavascript } from "react-icons/io5";
import { BsDiagram3Fill } from "react-icons/bs";
import { PiTreeStructureFill } from "react-icons/pi";
import { BsFiletypeHtml } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdBusiness } from "react-icons/md";

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

export const courses = [
  {
    code: "ACS-2112",
    title: "Scientific Computing with Python",
    grade: "A",
    icon: <FaPython />,
    description:
      "This Python language course shows students how to create basic programming structures in Python including decisions, loops and more advanced topics such as object-oriented programming with classes and exceptions. Unique Python data structures such as tuples and dictionaries are introduced. Students learn how to create Python programs with graphic elements as well as data visualization and publication quality figures. Applications from a variety of scientific fields are discussed when appropriate.",
  },
  {
    code: "ACS-2941",
    title: "Unix",
    grade: "A+",
    icon: <FaTerminal />,
    description:
      "This course provides students with advanced concepts and knowledge of Unix, one of the most widely used operating systems. The course introduces students to such topics as shells, filters and pipelines, the Unix file system, processes and job control, and Internet communications. Emphasis is placed on Unix shell programming, which provides valuable tools for developing powerful applications with a minimal amount of written code.",
  },
  {
    code: "ACS-3909",
    title: "Advanced Internet Programming",
    grade: "A-",
    icon: <IoLogoJavascript />,
    description:
      "This course provides students with a thorough knowledge of server-side web programming. Topics include n-tiered systems, session tracking, interfaces and stereotypes, dynamic web page design, database connections, and XML processing. Students gain considerable knowledge and experience by learning important features needed for e-commerce, applying advanced web application techniques, and utilizing web databases.",
  },
  {
    code: "ACS-3913",
    title: "Software Design and Architecture",
    grade: "A",
    icon: <BsDiagram3Fill />,
    description:
      "This is an advanced course in software design that examines recent advances in the design of larger application systems. Topics include software architecture, object-oriented analysis and design, software patterns, and the Unified Modeling Language (UML)",
  },
  {
    code: "ACS-3922",
    title: "Introduction to Game Development",
    grade: "A+",
    icon: <SiCsharp />,
    description:
      "This course is an introduction to game design and development, with a focus on the development of 2D and 3D interactive video games. Topics include the iterative process of game design: analysis, design, prototyping, development, and playtesting; game architecture and mechanics, working with art assets (sprites, textures and models), animation, collision detection, basic artificial intelligence, game management, game user interface, development and deployment for different platforms. Through the exploration of classic video game designs and the use of industry-standard game development tools, students gain hands-on practical experience and a thorough understanding of the basics of game design and development.",
  },
  {
    code: "ACS-2947",
    title: "Data Structures and Algorithms",
    grade: "A+",
    icon: <PiTreeStructureFill />,
    description:
      "This course introduces fundamental data structures using an object-oriented programming language. Topics to be covered include vectors, multidimensional arrays, linked lists, stacks, queues, trees, graphs, recursion and algorithms",
  },
  {
    code: "ACS-3902",
    title: "Database Systems",
    grade: "A",
    icon: <FaDatabase />,
    description:
      "This course introduces the theory of relational, network, and hierarchical models. It covers in detail the techniques utilized in various stages of a relational database software development life cycle. These techniques include ERDs, relational models, functional dependencies, normalization, and physical data storage mechanisms. Query language fundamentals including relational algebra and SQL are also covered. A project involving the design and implementation of a database is required.",
  },
  {
    code: "ACS-1904",
    title: "Programming Fundamentals II",
    grade: "A+",
    icon: <FaJava />,
    description:
      "This course examines more advanced programming concepts using an object-oriented programming language. Topics to be covered include inheritance, polymorphism, sorting techniques, string processing, interfaces, files and packages.",
  },
  {
    code: "ACS-2814",
    title: "Applications of Database Systems",
    grade: "B+",
    icon: <FaTable />,
    description:
      "This course introduces students with limited computing experience to the principles of data management. The emphasis is on practical database experience reinforced through assignments and weekly laboratory work. Students learn first to work with a workstation-based database system and subsequently they are introduced to the design of databases and their implementation in relational systems. Topics include tables, queries, forms, reports, importing and exporting data, structured query language, entity relationship models, the relational data model, and normalization of databases. Examples, assignments, and laboratory work are drawn from a variety of different disciplines.",
  },
  {
    code: "ACS-2909",
    title: "Internet Programming",
    grade: "A-",
    icon: <BsFiletypeHtml />,
    description:
      "This course provides students with an overview of Internet and World Wide Web programming, development tools, resources, utilities, multimedia, and security issues. Students will gain hands-on experience in a scripting language such as JavaScript, Rich Internet Applications (RIAs), Web Services, and Mobile Application Development.",
  },
  {
    code: "ACS-2913",
    title: "Software Requirements Analysis and Design",
    grade: "A",
    icon: <BiTask />,
    description:
      "This course introduces students to the requirements definition phase of software development. It provides coverage of both traditional and object-oriented approaches to requirements analysis and design of software used in business, real-time and embedded applications. Models, notations and processes for requirements elicitation, representation, and design are discussed.",
  },
  {
    code: "ACS-2916",
    title: " Business Application Systems",
    grade: "A-",
    icon: <MdBusiness />,
    description:
      "This course firstly presents structured models for business processes and data needed in common transaction processing systems such as order entry, invoicing, accounts receivable and payable, purchasing, inventory and general ledger. Also, system support for manufacturing (e.g., supply chain management, robotics), for marketing (e.g., sales force automation, customer relationship management), and for human resource management (e.g., candidate selection, collective bargaining support) is highlighted, and inter-system interfaces are considered. Large, organization-wide, integrated enterprise resource planning (ERP) systems are discussed in the context of a business case. System controls and security issues are outlined for the systems studied. ",
  },
  {
    code: "ACS-1803",
    title: "Introduction to Information Systems",
    grade: "B+",
    icon: <AiOutlineDatabase />,
    description:
      "This course examines applications of information technology to businesses and other organizations. After an introduction to computers and data management, the course outlines various categories of information systems, (e.g., systems for transaction processing, managerial reporting, customer relationship management, decision support, enterprise resource planning, and e-commerce), with examples from current practice. System development, system security, systems consulting, and IT administration are also discussed. Focus is mostly on functional aspects of systems providing a valuable background for students in applied computer science, business and administration, and other disciplines.",
  },
  {
    code: "ACS-1805",
    title: "Introduction to Programming",
    grade: "A",
    icon: <IoCodeSlash />,
    description:
      "This course covers elementary procedural programming concepts. Topics include: primitive data types and their manipulation, basic input and output and elementary control structures. In addition, topics related to a specific programming paradigm that is chosen for the course is covered. Students will gain hands-on programming experience in the laboratory component of the course.",
  },
  {
    code: "ACS-1809",
    title: "Website Design and Development",
    grade: "A-",
    icon: <FaGlobe />,
    description:
      "This course introduces students to the concepts, programming skills, and tools related to website design and development. The topics include: website layout; creating tables, frames, menus and forms; presenting multimedia on web pages; and Internet Protocols such as HTTP and FTP. Students gain hands-on programming experience in designing websites using HTML and Cascading Style Sheets. ",
  },
  {
    code: "ACS-1903",
    title: "Programming Fundamentals I",
    grade: "A+",
    icon: <FaCode />,
    description:
      "This course introduces fundamental programming concepts using an object-oriented programming language. Topics to be covered include primitive data types and their manipulation, control structures, classes, objects and arrays.",
  },
];
