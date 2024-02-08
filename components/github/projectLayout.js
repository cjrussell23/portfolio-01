import Project from "@/components/github/project";
import ProjectSelect from "@/components/github/projectSelect";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectPreview from "./projectPreview";
import { FaCode } from "react-icons/fa";

export default function ProjectLayout(props) {
  const { projects, selectedId } = props;

  let projectNames = projects.map((project) => project.name);
  // Sort the project names
  projectNames.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );
  let previousProjectId = null;
  let nextProjectId = null;
  if (selectedId) {
    let index = projectNames.indexOf(
      projects.find((project) => parseInt(project.id) === parseInt(selectedId))
        .name
    );
    previousProjectId = projects.find(
      (project) => project.name === projectNames[index - 1]
    )?.id;
    nextProjectId = projects.find(
      (project) => project.name === projectNames[index + 1]
    )?.id;
  }

  return (
    <div className="tw-max-w-8xl tw-mx-auto tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 lg:tw-px-16 lg:tw-pb-4 lg:tw-pt-16">
      <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 tw-p-4">
        <Link
          href="/projects"
          className="tw-flex tw-cursor-pointer tw-gap-2 hover:tw-text-primary"
        >
          <h1 className="tw-flex tw-items-center tw-gap-2 tw-text-3xl tw-font-bold">
            <FaCode />
            Projects
          </h1>
        </Link>
        <p>
          This is a collection of my public projects on GitHub pulled from the
          GitHub API.
        </p>
      </div>
      <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-4 tw-p-4">
        <ProjectSelect selectedId={selectedId} projects={projects} />
        <div className="tw-flex tw-gap-4">
          {previousProjectId ? (
            <Link href={`/projects/${previousProjectId}`}>
              <Button>Previous</Button>
            </Link>
          ) : (
            <Button disabled>Previous</Button>
          )}
          {nextProjectId ? (
            <Link href={`/projects/${nextProjectId}`}>
              <Button>Next</Button>
            </Link>
          ) : (
            <Button disabled>Next</Button>
          )}
        </div>
      </div>
      <div className="tw-p-4">
        {selectedId ? (
          <Project
            project={projects.find(
              (project) => parseInt(project.id) === parseInt(selectedId)
            )}
          />
        ) : (
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4 tw-rounded-md tw-bg-muted tw-p-4 lg:tw-p-16">
            {projects.map((project) => (
              <ProjectPreview key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
