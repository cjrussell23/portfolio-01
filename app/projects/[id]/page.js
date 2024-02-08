import { Octokit } from "octokit";
import ProjectLayout from "@/components/github/projectLayout";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function generateStaticParams() {
  const response = await octokit.request(`GET /users/cjrussell23/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const projects = response.data;
  const ids = projects.map((project) => ({ id: project.id.toString() }));
  return ids;
}

export default async function Page({ params }) {
  const { id } = params;
  const response = await octokit.request(`GET /users/cjrussell23/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const projects = response.data;
  return <ProjectLayout projects={projects} selectedId={id} />;
}
