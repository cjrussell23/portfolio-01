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
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-cache",
    }
  );

  const projects = await response.json();
  return <ProjectLayout projects={projects} selectedId={null} />;
}
