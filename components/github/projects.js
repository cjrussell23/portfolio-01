"use client";

import { FaBox } from "react-icons/fa";
import Project from "./project.js";
import { useState } from "react";

/**
 * Display a list of GitHub projects with their READMEs
 * Has a left pane with a list of projects and a right pane with the README for the selected project
 */
export default function Projects({ projects }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="tw-flex tw-w-full tw-gap-4">
      <div className="tw-w-full tw-overflow-y-auto tw-p-4">
        <Project project={projects[selected]} />
      </div>
      <div className="tw-w-60  tw-bg-card tw-p-4">
        <div className="tw-text-2xl tw-font-bold tw-text-primary">
          <FaBox className="tw-mr-2 tw-inline" />
          Projects
        </div>
        {projects.map((project, i) => (
          <button
            key={i}
            className={`tw-w-full tw-overflow-hidden tw-overflow-ellipsis tw-rounded-lg tw-p-2 tw-text-left tw-text-lg tw-font-bold ${
              selected === i
                ? "tw-bg-muted tw-text-foreground"
                : "tw-text-muted-foreground"
            }`}
            onClick={() => setSelected(i)}
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
  );
}
