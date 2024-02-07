import Markdown from "react-markdown";

export default function Project({ project }) {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4 tw-px-2 tw-py-4 md:tw-px-4 md:tw-py-8 lg:tw-px-8 lg:tw-py-16">
      <h2 className="tw-text-2xl tw-font-bold tw-text-primary">
        {project?.name}
      </h2>
      <div className="tw-w-full tw-max-w-2xl tw-rounded-lg tw-bg-card tw-p-4">
        <Markdown>{project?.readme}</Markdown>
      </div>
    </div>
  );
}
