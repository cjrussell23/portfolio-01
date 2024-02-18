import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaJava,
  FaPython,
  FaTable,
  FaTerminal,
} from "react-icons/fa";
import { IoCodeSlash, IoLogoJavascript } from "react-icons/io5";
import { BsDiagram3Fill } from "react-icons/bs";
import { SiCsharp } from "react-icons/si";
import { PiTreeStructureFill } from "react-icons/pi";
import { BsFiletypeHtml } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdBusiness } from "react-icons/md";

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
