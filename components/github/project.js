import ReactMarkdown from "react-markdown";
import { Octokit } from "octokit";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

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

  const response = await octokit.request(
    `GET /repos/cjrussell23/${project.name}/readme`,
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (response.status !== 200) {
    return (
      <div className="tw-flex tw-h-96 tw-items-center tw-justify-center">
        <p className="tw-text-2xl tw-font-bold tw-text-primary">
          Readme not found.
        </p>
      </div>
    );
  }
  const readme = atob(response.data.content);

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
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="tw-mb-4 tw-text-2xl">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="tw-mb-4 tw-text-xl">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="tw-mb-4 tw-text-lg">{children}</h3>
            ),
            p: ({ children }) => <p className="tw-mb-4">{children}</p>,
          }}
        >
          {readme}
        </ReactMarkdown>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
