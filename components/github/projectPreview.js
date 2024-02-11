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
        <p className="tw-text-background-foreground tw-text-sm">
          {new Date(project.created_at).toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <Button className="tw-w-24">View Project</Button>
    </Link>
  );
}
