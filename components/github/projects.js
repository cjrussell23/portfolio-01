"use client";

import { FaBox } from "react-icons/fa";
import Project from "./project.js";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

/**
 * Display a list of GitHub projects with their READMEs
 * Has a left pane with a list of projects and a right pane with the README for the selected project
 */
export default function Projects({ projects }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || null;
  const setId = (id) => {
    router.push(`?id=${id}`);
  };
  const findProject = (id) => {
    return projects.find((project) => parseInt(project.id) === parseInt(id));
  };
  return (
    <div className="tw-flex tw-h-full tw-w-full tw-gap-4">
      <div className="tw-w-full tw-overflow-y-auto tw-p-4">
        {id ? (
          <Project project={findProject(id)} />
        ) : (
          <div className="tw-text-2xl tw-font-bold tw-text-primary">
            <FaBox className="tw-mr-2 tw-inline" />
            Select a project
          </div>
        )}
      </div>
      <div className="tw-flex tw-w-60 tw-flex-col tw-gap-2 tw-overflow-y-auto tw-bg-card tw-p-4">
        <div className="tw-text-2xl tw-font-bold tw-text-primary">
          <FaBox className="tw-mr-2 tw-inline" />
          Projects
        </div>
        {projects.map((project, i) => (
          <button
            key={i}
            className={`tw-w-full tw-overflow-hidden tw-overflow-ellipsis tw-rounded-lg tw-p-2 tw-text-left tw-text-lg tw-font-bold ${
              id === project.id
                ? "tw-bg-background tw-text-foreground"
                : "tw-text-muted-foreground"
            }`}
            onClick={() => setId(project.id)}
          >
            {project.name || "Unnamed Project"}
          </button>
        ))}
      </div>
    </div>
  );
}
