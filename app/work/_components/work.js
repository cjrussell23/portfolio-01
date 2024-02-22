import { ProgressBar, Job, DateCircle } from "./workClient";
import { FaBriefcase } from "react-icons/fa";
import { work } from "@/app/content";
import PageContainer from "@/components/pageContainer";
export default function Work() {
  const description = (
    <p>
      I have held a variety of positions in different industries, which has
      allowed me to develop a diverse skill set and a broad understanding of
      business operations. I am passionate about leveraging technology to drive
      business success and am always looking for new opportunities to learn and
      grow.
    </p>
  );
  return (
    <PageContainer
      href="/work"
      title="Work"
      description={description}
      icon={<FaBriefcase />}
    >
      <div className="tw-flex tw-w-full tw-flex-row tw-justify-center tw-gap-4 tw-p-4">
        <div className="tw-relative tw-hidden tw-w-fit tw-flex-col tw-items-center tw-justify-around tw-gap-4 tw-p-4 lg:tw-flex">
          {work.map((job, index) => (
            <DateCircle
              date={job.start}
              index={index}
              key={job.start + "_circle"}
            />
          ))}
          <ProgressBar />
        </div>
        <div className="tw-relative tw-flex tw-w-fit tw-flex-col tw-items-center tw-gap-4 tw-p-4 ">
          {work.map((job) => (
            <Job key={job.start} job={job} className="tw-py-8" />
          ))}
          <ProgressBar className="lg:tw-hidden" />
        </div>
      </div>
    </PageContainer>
  );
}
