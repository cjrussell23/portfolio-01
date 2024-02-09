import ProjectLayout from "@/components/github/projectLayout";

export async function generateStaticParams() {
  const response = await fetch(
    "https://api.github.com/users/cjrussell23/repos",
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-cache",
    }
  );
  const data = await response.json();
  const projects = data;
  const ids = projects.map((project) => ({ id: project.id.toString() }));
  return ids;
}

export default async function Page({ params }) {
  const { id } = params;
  const response = await fetch(
    "https://api.github.com/users/cjrussell23/repos",
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-cache",
    }
  );

  const projects = await response.json();
  return <ProjectLayout projects={projects} selectedId={id} />;
}
