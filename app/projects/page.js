import Github from "@/components/github/github";
import UnderConstruction from "@/components/underConstruction/underConstruction";
export const metadata = {
  title: "CR | Projects",
  description: "Coding projects made by Charles Russell",
};

export default function Page() {
  return (
    <div className="tw-flex tw-size-full tw-min-h-screen tw-items-center tw-justify-center">
      <UnderConstruction />
    </div>
  );
}
