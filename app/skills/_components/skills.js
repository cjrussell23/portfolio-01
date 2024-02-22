import Link from "next/link";
import { FaTools } from "react-icons/fa";
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
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import PageContainer from "@/components/pageContainer";

export default function SkillsPage() {
  const skills = [
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
      ],
    },
  ];

  const description = (
    <p>
      Tools and technologies I have experience with. If you have any questions
      please feel free to{" "}
      <a href="/contact" className="tw-italic">
        contact me
      </a>
      .
    </p>
  );

  return (
    <PageContainer
      href="/skills"
      title="Skills"
      description={description}
      icon={<FaTools />}
    >
      <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4">
        {skills.map((skill) => (
          <Skill key={skill.title} skill={skill} />
        ))}
      </div>
    </PageContainer>
  );
}

function Skill({ skill }) {
  return (
    <div className="tw-flex tw-flex-col tw-gap-4 tw-rounded-md tw-border tw-p-4">
      <h2 className="tw-text-xl ">{skill.title}</h2>
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 xl:tw-grid-cols-3">
        {skill.technologies.map((technology) => (
          <Technology key={technology.title} technology={technology} />
        ))}
      </div>
    </div>
  );
}

function Technology({ technology }) {
  return (
    <a
      href={technology.link}
      className="tw-flex tw-items-center tw-gap-4 tw-rounded-md tw-p-4 hover:tw-bg-card"
    >
      <div className="tw-text-6xl tw-text-primary">
        {technology.icon && technology.icon}
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <div className="tw-flex tw-items-center tw-gap-4">
          <h3 className="tw-text-lg tw-font-bold">{technology.title}</h3>
          {technology.tag && (
            <span className="tw-rounded-md tw-border tw-p-1 tw-text-xs">
              {technology.tag}
            </span>
          )}
        </div>
        <p className="tw-text-muted-foreground">{technology.description}</p>
      </div>
    </a>
  );
}
