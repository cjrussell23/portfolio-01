import Project from "@/app/projects/_components/project";
import ProjectSelect from "@/app/projects/_components/projectSelect";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import ProjectPreview from "./projectPreview";
import { FaCode } from "react-icons/fa";
import SortSelect from "./sortSelect";
import PageContainer from "@/components/pageContainer";

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

  const description = (
    <p>
      This is a collection of my public projects on GitHub pulled from the
      GitHub API.
    </p>
  );

  return (
    <PageContainer
      href="/projects"
      title="Projects"
      description={description}
      icon={<FaCode />}
    >
      <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-4 tw-rounded tw-py-4">
        <div className="tw-flex tw-flex-wrap tw-gap-4">
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
      {selectedId ? (
        <Project
          project={projects.find(
            (project) => parseInt(project.id) === parseInt(selectedId)
          )}
        />
      ) : (
        <div className="tw-grid tw-gap-4 lg:tw-grid-cols-2 xl:tw-grid-cols-3">
          {projects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </div>
      )}
    </PageContainer>
  );
}
