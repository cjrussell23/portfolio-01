"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { PiCaretUpDownLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";

export default function ProjectSelect({ selectedId, projects }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSelect = (value) => {
    setOpen(false);
    selectedId === value ? "" : router.push(`/projects/${value}`);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="tw-w-72 tw-justify-between"
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
          {selectedId
            ? projects.find(
                (project) => parseInt(project.id) === parseInt(selectedId)
              )?.name
            : "Select project..."}
          <PiCaretUpDownLight className="tw-ml-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tw-w-72 tw-p-0">
        <Command>
          <CommandInput placeholder="Search project..." />
          <CommandEmpty>No project found.</CommandEmpty>
          <CommandGroup>
            {projects.map((project) => (
              <CommandItem
                key={project.id}
                value={project.id}
                onSelect={() => handleSelect(project.id)}
              >
                {project.name}
                {parseInt(project.id) === parseInt(selectedId) && (
                  <FaCheck className="tw-ml-auto tw-text-primary" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
