import { Octokit } from "octokit";

import Projects from "./projects.js";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function Github() {
  let repos = await octokit.request(`GET /users/cjrussell23/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  repos = repos.data;
  for (let repo of repos) {
    if (repo.private) {
      continue;
    }
    try {
      const readme = await octokit.request(
        `GET /repos/cjrussell23/${repo.name}/readme`,
        {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      repo.readme = atob(readme.data.content);
    } catch (error) {
      // Remove the repo from the list if we can't get the readme
      repos = repos.filter((r) => r.name !== repo.name);
    }
  }

  return <Projects projects={repos} />;
}
