import { FaExternalLinkAlt } from "react-icons/fa";
import ReadMe from "@/app/projects/_components/readme";
import ThisReadMe from "../../../README.md";

export default async function Project({ project }) {
  if (!project) {
    return null;
  }

  if (!project.name) {
    return null;
  }
  let readme = "";
  if (project.name === "portfolio-2024") {
    // This is this repo, get the readme from the file
    readme = ThisReadMe;
  } else {
    const response = await fetch(
      `https://api.github.com/repos/cjrussell23/${project.name}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: {
          revalidate: 3600,
        },
      }
    );
    const data = await response.json();
    const downloadUrl = data.download_url;
    console.log(downloadUrl);
    const readmeResponse = await fetch(downloadUrl);
    readme = await readmeResponse.text();
  }

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-rounded-t-md tw-border-b tw-bg-primary tw-p-6 tw-text-primary-foreground">
        <div className="tw-flex tw-flex-col tw-gap-4">
          <div>{project.name}</div>
          <div>
            <p className="tw-text-sm tw-text-primary-foreground">
              Created:{" "}
              {new Date(project.created_at).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="tw-text-sm tw-text-primary-foreground">
              Last Updated:{" "}
              {new Date(project.updated_at).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <a href={project.html_url} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt className="tw-ml-2 tw-h-6 tw-w-6 tw-shrink-0 tw-opacity-50" />
        </a>
      </div>
      <div className="tw-break-words">
        <ReadMe readme={readme} />
      </div>
      <div className="tw-mb-2 tw-flex tw-flex-wrap tw-gap-2 tw-rounded-b-md tw-bg-primary tw-p-6 tw-text-primary-foreground">
        {project.topics.map((topic) => (
          <span
            key={topic}
            className="tw-text-s tw-rounded-md tw-border-2 tw-border-muted-foreground tw-p-1 tw-text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
