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
  let readmes = [];
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
      readmes[repo.id] = atob(readme.data.content);
    } catch (error) {
      console.error(`Error fetching readme for ${repo.name}:`, error);
      continue;
    }
  }

  return (
    <Projects
      projects={repos.map((repo) => ({ ...repo, readme: readmes[repo.id] }))}
    />
  );
}
