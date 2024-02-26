import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const projects = await fetchProjects();
  return NextResponse.json(projects);
}

async function fetchProjects() {
  const response = await fetch(
    "https://api.github.com/users/cjrussell23/repos",
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
  const projects = await response.json();
  const filteredProjects = projects.filter(
    (project) =>
      project.full_name !== `${project.owner.login}/${project.owner.login}`
  );
  //  Sort by created_at
  filteredProjects.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  return filteredProjects;
}
