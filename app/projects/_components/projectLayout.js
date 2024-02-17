import Project from "@/app/projects/_components/project";
import ProjectSelect from "@/app/projects/_components/projectSelect";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import ProjectPreview from "./projectPreview";
import { FaCode } from "react-icons/fa";
import SortSelect from "./sortSelect";

export default function ProjectLayout(props) {
  const { projects, selectedId, sort } = props;
  if (!projects || !projects.length) {
    return null;
  }
  // Sort the projects
  if (sort === "name") {
    projects.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "created") {
    projects.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  } else if (sort === "updated") {
    projects.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  }
  let projectNames = projects.map((project) => project.name);
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
    <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-8xl tw-flex-col tw-justify-center tw-gap-4 lg:tw-px-2 lg:tw-pb-4 lg:tw-pt-16">
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
        <div className="tw-flex tw-gap-4">
          <ProjectSelect selectedId={selectedId} projects={projects} />
          {selectedId ? (
            <Link href={`/projects`}>
              <Button>View All</Button>
            </Link>
          ) : (
            <SortSelect sort={sort} />
          )}
        </div>
        {selectedId ? (
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
        ) : null}
      </div>
      <div className="sm:tw-p-4">
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
