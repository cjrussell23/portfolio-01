"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

export default function ProjectSelect({ selectedId, projects }) {
  const router = useRouter();
  return (
    <SelectGroup className="items-center tw-flex tw-justify-center tw-gap-4">
      <SelectLabel className="justify-center tw-flex tw-items-center tw-text-lg tw-font-bold">
        Project
      </SelectLabel>
      <Select
        value={selectedId}
        onValueChange={(value) => {
          router.push(`/projects/${value}`);
        }}
      >
        <SelectTrigger className="tw-min-w-60">
          <SelectValue>
            {selectedId
              ? projects.find(
                  (project) => parseInt(project.id) === parseInt(selectedId)
                ).name
              : "Select Project"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {projects.map((project) => (
            <SelectItem key={project.id} value={project.id}>
              {project.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </SelectGroup>
  );
}
