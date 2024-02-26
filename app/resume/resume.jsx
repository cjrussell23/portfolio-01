import { work, skills } from "@/data/content.js";
import { resumeSocials } from "@/data/socials";
import { keywords } from "./keywords";

import {
  Text,
  Font,
  Page,
  Link,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { useEffect, useState } from "react";

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    fontFamily: "Lato",
  },
  text: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  date: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: "Lato Bold",
    fontWeight: "bold",
  },
  bold: {
    fontSize: 10,
    fontFamily: "Lato Bold",
    fontWeight: "bold",
  },
  italic: {
    fontSize: 10,
    fontFamily: "Lato Italic",
  },
});

export default function Resume() {
  const resumeStyles = StyleSheet.create({
    resume: {
      flexDirection: "column",
      paddingTop: 15,
      paddingHorizontal: 20,
      paddingBottom: 10,
      gap: 10,
    },
  });
  const props = {
    title: `Charles Russell Resume - ${new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`,
    author: "Charles Russell",
    subject: "Web Developer",
    keywords: keywords.join(", "),
    creator: "Charles Russell",
    language: "en",
  };
  return (
    <Document {...props}>
      <Page size="A4" style={styles.page}>
        <Header />
        <View style={resumeStyles.resume}>
          <Education />
          <WorkExperience />
          <Skills />
          <Projects />
        </View>
      </Page>
    </Document>
  );
}

function Header(props) {
  const headerStyles = StyleSheet.create({
    header: {
      flexDirection: "column",
      backgroundColor: "#252929",
      color: "#E4E4E4",
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 10,
      margin: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      textAlign: "center",
      marginBottom: 10,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 14,
      textAlign: "center",
      marginBottom: 10,
    },
    socials: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      alignItems: "center",
      width: "100%",
      borderTop: "1px solid #E4E4E4",
    },
    social: {
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: 5,
      alignItems: "center",
    },
    icon: {
      width: 12,
      height: 12,
    },
    link: {
      fontSize: 10,
      color: "#E4E4E4",
      textDecoration: "none",
      "&:hover": {
        color: "#E4E4E4",
        textDecoration: "underline",
      },
    },
  });
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.title}>Charles Russell</Text>
      <Text style={headerStyles.subtitle}>Web Developer</Text>
      <View style={headerStyles.socials}>
        {resumeSocials.map((social) => (
          <View key={social.social} style={headerStyles.social}>
            <Image src={social.icon} style={headerStyles.icon} />
            <Link style={headerStyles.link} src={social.href}>
              {social.title}
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}

function Education(props) {
  const educationStyles = StyleSheet.create({
    columns: {
      paddingTop: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
    },
    Degree: {
      fontSize: 10,
      fontWeight: "bold",
      fontFamily: "Lato Bold",
    },
    University: {
      fontSize: 10,
      fontFamily: "Lato Italic",
      fontWeight: "light",
    },
    Achievement: {
      fontSize: 10,
      textAlign: "right",
    },
  });
  return (
    <Section title="Education" href="https://chjrussell.com/education">
      <View style={educationStyles.columns}>
        <View>
          <Text style={educationStyles.Degree}>
            Bachelor of Science, Applied Computer Science
          </Text>
          <Text style={educationStyles.University}>University of Winnipeg</Text>
        </View>
        <View style={educationStyles.columns}>
          <View>
            <Text style={educationStyles.Achievement}>Major GPA: 4.2</Text>
            <Text style={educationStyles.Achievement}>Deans Honour List</Text>
          </View>
          <View>
            <Text style={styles.date}>Sep 2020 - </Text>
            <Text style={styles.date}>Apr 2022</Text>
          </View>
        </View>
      </View>
    </Section>
  );
}

function WorkExperience(props) {
  return (
    <Section title="Work Experience" href="https://chjrussell.com/work">
      <View style={{ flexDirection: "column", gap: 10, paddingTop: 10 }}>
        {work.map((job) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View style={{ flexDirection: "column", gap: 5, width: "90%" }}>
              <WorkHeading job={job} />
              <WorkList job={job} />
            </View>
            <WorkDate job={job} />
          </View>
        ))}
      </View>
    </Section>
  );
}

function WorkDate(props) {
  const { job } = props;
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 5,
        width: "10%",
        alignItems: "flex-end",
      }}
    >
      <Text style={styles.date}>{job.start} -</Text>
      <Text style={styles.date}>{job.end ? job.end : "Present"}</Text>
    </View>
  );
}

function WorkList(props) {
  const { job } = props;
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 2,
        padding: 5,
      }}
    >
      {job.bullets.map((bullet) => (
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={styles.text}>•</Text>
          <Text style={{ fontSize: 10, fontFamily: "Lato" }}>{bullet}</Text>
        </View>
      ))}
    </View>
  );
}

function WorkHeading(props) {
  const { job } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 2,
          width: "100%",
        }}
      >
        <Text style={styles.bold}>{job.position}</Text>
        <Text style={styles.text}>-</Text>
        <Link
          style={{ fontSize: 10, color: "#252929", textDecoration: "none" }}
          href={job.website}
        >
          {job.company}
        </Link>
      </View>
      <Link
        style={{
          fontSize: 10,
          color: "#252929",
          fontFamily: "Lato Italic",
          textDecoration: "none",
        }}
        href={job.map}
      >
        {job.location}
      </Link>
    </View>
  );
}

function Skills(props) {
  return (
    <Section title="Skills" href="https://chjrussell.com/skills">
      <View style={{ flexDirection: "col", gap: 5, paddingTop: 10 }}>
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </View>
    </Section>
  );
}

function Skill(props) {
  const { skill } = props;
  return (
    <View style={{ flexDirection: "row", gap: 2 }}>
      <Text
        style={{ fontFamily: "Lato Bold", fontWeight: "bold", fontSize: 10 }}
      >
        {skill.title} :
      </Text>
      <Text style={{ fontSize: 10, fontFamily: "Lato" }}>
        {skill.technologies.map((technology) => technology.title).join(", ")}
      </Text>
    </View>
  );
}

function Projects(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <View break style={{ marginTop: 30 }}>
      <Section title="Projects" href="https://chjrussell.com/projects">
        <View style={{ flexDirection: "column", gap: 15, paddingTop: 10 }}>
          {projects.map &&
            projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
        </View>
      </Section>
    </View>
  );
}

function Project(props) {
  const { project } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "column", gap: 5, width: "90%" }}>
        <ProjectHeading project={project} />
        <ProjectDescription project={project} />
      </View>
      <ProjectDate project={project} />
    </View>
  );
}

function ProjectHeading(props) {
  const { project } = props;
  function formatURL(url) {
    return url.split("/").slice(-2).join("/");
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        width: "100%",
      }}
    >
      <Link
        href={`https://chjrussell.com/projects/${project.id}`}
        style={{
          fontSize: 10,
          fontFamily: "Lato Bold",
          fontWeight: "bold",
          color: "#252929",
          textDecoration: "none",
        }}
      >
        {project.name}
      </Link>
      <Link
        href={project.html_url}
        style={{
          fontSize: 10,
          fontFamily: "Lato",
          color: "#252929",
          textDecoration: "none",
        }}
      >
        {formatURL(project.html_url)}
      </Link>
    </View>
  );
}

function ProjectDescription(props) {
  const { project } = props;
  return (
    <Text style={{ fontSize: 10, fontFamily: "Lato" }}>
      {project.description}
    </Text>
  );
}

function ProjectDate(props) {
  const { project } = props;
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  }
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 5,
        width: "10%",
        alignItems: "flex-end",
      }}
    >
      <Text style={styles.date}>{formatDate(project.created_at)}</Text>
    </View>
  );
}

function Section(props) {
  const sectionStyles = StyleSheet.create({
    title: {
      fontSize: 14,
      borderBottom: "1px solid #252929",
      width: "100%",
      color: "#252929",
      textDecoration: "none",
      "&:hover": {
        color: "#252929",
        textDecoration: "underline",
      },
      fontFamily: "Lato Bold",
      fontWeight: "bold",
      paddingBottom: 2,
    },
    section: {},
  });
  return (
    <View style={sectionStyles.section}>
      <Link style={sectionStyles.title} src={props.href}>
        {props.title}
      </Link>
      <View>{props.children}</View>
    </View>
  );
}
