import { Octokit } from "octokit";
import ProjectLayout from "@/components/github/projectLayout";

export const metadata = {
  title: "CR | Projects",
  description: "Coding projects made by Charles Russell",
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function Page() {
  const response = await octokit.request(`GET /users/cjrussell23/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const projects = response.data;
  return <ProjectLayout projects={projects} selectedId={null} />;
}
