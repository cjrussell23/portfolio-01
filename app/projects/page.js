import ProjectLayout from "@/components/github/projectLayout";

export const metadata = {
  title: "CR | Projects",
  description: "Coding projects made by Charles Russell",
};

export default async function Page() {
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

  return <ProjectLayout projects={filteredProjects} selectedId={null} />;
}
