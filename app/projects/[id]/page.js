import ProjectLayout from "@/components/github/projectLayout";

export async function generateStaticParams() {
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
  if (!projects || !projects.length) {
    console.log("No projects found");
    return [];
  }
  const filteredProjects = projects.filter(
    (project) =>
      project.full_name !== `${project.owner.login}/${project.owner.login}`
  );

  const ids = filteredProjects.map((project) => ({
    id: project.id.toString(),
  }));

  return ids;
}

export default async function Page({ params }) {
  const { id } = params;
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

  return <ProjectLayout projects={filteredProjects} selectedId={id} />;
}
