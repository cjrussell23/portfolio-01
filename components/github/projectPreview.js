import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectPreview({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="tw-text-background-foreground tw-flex tw-w-full tw-max-w-96 tw-cursor-pointer tw-flex-col tw-gap-4 tw-rounded-md tw-bg-background tw-p-4 hover:tw-bg-primary-foreground dark:hover:tw-bg-primary-dark"
    >
      <div className="tw-flex tw-items-center tw-justify-between">
        <h2 className="tw-p-1 tw-text-xl tw-font-bold">{project.name}</h2>
        <p className="tw-text-background-foreground tw-text-right tw-text-sm">
          {new Date(project.created_at).toLocaleString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-2">
        {project.topics.map((topic) => (
          <span
            key={topic}
            className="tw-rounded-md tw-border-2 tw-border-muted-foreground tw-p-1 tw-text-xs tw-text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>
      <p className="tw-text-sm tw-text-muted-foreground">
        {project.description}
      </p>
      <Button className="tw-w-24">View Project</Button>
    </Link>
  );
}
