import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default async function Project({ project }) {
  if (!project) {
    return null;
  }

  if (!project.name) {
    return null;
  }
  if (project.name === "CodeSnippets") {
    return null;
  }

  const response = await fetch(
    `https://api.github.com/repos/cjrussell23/${project.name}/readme`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const downloadUrl = data.download_url;
  console.log(downloadUrl);
  const readmeResponse = await fetch(downloadUrl);
  const readme = await readmeResponse.text();

  return (
    <Card>
      <div className="tw-mb-4 tw-flex tw-justify-between tw-space-y-1.5 tw-rounded-t-md tw-border-b tw-bg-primary tw-p-6 tw-text-primary-foreground">
        <div className="tw-flex tw-flex-col tw-gap-4">
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>
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
          </CardDescription>
        </div>
        <Link href={project.html_url}>
          <FaExternalLinkAlt className="tw-ml-2 tw-h-6 tw-w-6 tw-shrink-0 tw-opacity-50" />
        </Link>
      </div>
      <CardContent className="tw-break-words">
        <div
          dangerouslySetInnerHTML={{ __html: readme }}
          className="tw-prose tw-prose-primary tw-p-6"
        />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
