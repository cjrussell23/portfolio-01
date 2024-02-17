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
export default function SortSelect(props) {
  const { sort } = props;
  const router = useRouter();
  return (
    <SelectGroup className="items-center tw-flex tw-justify-center tw-gap-4">
      <SelectLabel className="justify-center tw-flex tw-items-center tw-text-lg tw-font-bold">
        Sort
      </SelectLabel>
      <Select
        value={sort}
        onValueChange={(value) => {
          router.push(`?sort=${value}`);
        }}
      >
        <SelectTrigger className="tw-min-w-36">
          <SelectValue>
            {sort === "name"
              ? "Name"
              : sort === "created"
              ? "Created"
              : sort === "updated"
              ? "Updated"
              : "Sort"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="created">Created</SelectItem>
          <SelectItem value="updated">Updated</SelectItem>
        </SelectContent>
      </Select>
    </SelectGroup>
  );
}
