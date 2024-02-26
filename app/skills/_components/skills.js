import { FaTools } from "react-icons/fa";
import PageContainer from "@/components/pageContainer";
import { skills } from "@/data/content";

export default function SkillsPage() {
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
      <h2 className="tw-text-lg ">{skill.title}</h2>
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
      <div className="tw-text-3xl tw-text-primary">
        {technology.icon && technology.icon}
      </div>
      <div className="tw-flex tw-flex-col tw-gap-0.5">
        <div className="tw-flex tw-items-center tw-gap-4">
          <h3 className="tw-font-bold">{technology.title}</h3>
          {technology.tag && (
            <span className="tw-rounded-md tw-border tw-p-1 tw-text-xs">
              {technology.tag}
            </span>
          )}
        </div>
        <p className="tw-text-sm tw-text-muted-foreground">
          {technology.description}
        </p>
      </div>
    </a>
  );
}
