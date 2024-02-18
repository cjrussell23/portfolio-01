import UnderConstruction from "@/components/underConstruction/underConstruction";
import Work from "@/app/work/_components/work";
export const metadata = {
  title: "CR | Work",
  description: "Work history for Charles Russell",
};

export default function Page() {
  return (
    <div className="tw-flex tw-h-full tw-min-h-screen tw-flex-col tw-items-center tw-justify-center tw-gap-4 tw-px-2 tw-py-4 md:tw-px-4 md:tw-py-8 lg:tw-px-8 lg:tw-py-16">
      {/* <UnderConstruction /> */}
      <Work />
    </div>
  );
}
