import { ProgressBar, Job, DateCircle } from "./workClient";
import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";

export default function Work() {
  const work = [
    {
      company: "Moby",
      position: "Web Developer",
      start: "Jan 2024",
      description:
        "As Moby's Web Developer, I hold full responsibility for website management. I am currently leading the development of a new, Next.js-based website to bring Moby's online presence to the next level.",
      location: "Calgary, AB",
      map: "https://maps.app.goo.gl/XLSY5paRccDjr5MVA",
      bullets: [
        "Leading the development of a new website using Next.js and modern technologies, aiming to improve automation capabilities, enhance SEO, and elevate overall user experience.",
        "Continuously optimizing website performance and functionality through regular updates, maintenance, and the implementation of new features and enhancements.",
        "Collaborating with cross-functional teams to ensure that the website meets the needs of various stakeholders, including marketing, sales, and customer support.",
      ],
      website: "https://getmoby.com",
    },
    {
      company: "Moby",
      position: "Jr. Web Developer",
      start: "Jan 2023",
      end: "Dec 2023",
      description:
        "Quickly assumed full responsibility for Moby's website within six months of joining, implementing numerous automations to streamline processes and enhance operational efficiency.",
      location: "Calgary, AB",
      map: "https://maps.app.goo.gl/XLSY5paRccDjr5MVA",
      bullets: [
        "Enhanced website functionality and efficiency through customized automation solutions, significantly reducing manual workload and improving overall operational effectiveness.",
        "Designed and developed various pages for monthly promotions, ensuring optimal SEO performance and user engagement.",
        "Implemented a series of automation processes to streamline tasks such as updates to pricing, customer sign-ups, cancellations, and moving requests.",
      ],
      website: "https://getmoby.com",
    },
    {
      company: "Computer Upgrading Specialists",
      position: "IT Technician",
      start: "Oct 2022",
      end: "Dec 2022",
      description:
        "Provided technical support to customers, troubleshooting hardware and software issues, and installing and configuring new systems.",
      location: "Calgary, AB",
      map: "https://maps.app.goo.gl/rUdzW9QUoE75ngtq6",
      bullets: [
        "Acted as a primary point of contact for customers seeking technical support, providing timely and accurate responses to their inquiries and concerns.",
        "Performed a variety of technical tasks, including troubleshooting hardware and software issues, configuring and installing new systems, and upgrading existing systems.",
        "Maintained accurate records of all technical support interactions and resolution efforts, ensuring that all customer issues were resolved in a timely and satisfactory manner.",
      ],
      website: "http://www.computerupgraders.ca/",
    },
    {
      company: "The Sign Source",
      position: "Sign Production Specialist",
      start: "Oct 2018",
      end: "Dec 2022",
      description:
        "Developed a keen eye for detail and honed my project management skills while producing a wide range of signs and graphics for customers.",
      location: "Winnipeg, MB",
      map: "https://maps.app.goo.gl/YVY1fiLZUUtyoALH9",
      bullets: [
        "Operated a variety of sign production equipment, including large format printers, vinyl cutters, and laminators.",
        "Produced a wide range of signs and graphics, including banners, vehicle wraps, and window graphics.",
        "Assisted with the installation of signs and graphics at customer sites, ensuring that all work was completed to the highest standards of quality and safety.",
      ],
      website: "http://www.thesignsource.com/",
    },
  ];
  return (
    <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-8xl tw-flex-col tw-justify-center tw-gap-4 lg:tw-px-2 lg:tw-pb-4 lg:tw-pt-16">
      <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 tw-p-4">
        <Link
          href="/work"
          className="tw-flex tw-cursor-pointer tw-gap-2 hover:tw-text-primary"
        >
          <h1 className="tw-flex tw-items-center tw-gap-4 tw-text-3xl tw-font-bold">
            <FaBriefcase />
            Work
          </h1>
        </Link>
        <p>
          I have held a variety of positions in different industries, which has
          allowed me to develop a diverse skill set and a broad understanding of
          business operations. I am passionate about leveraging technology to
          drive business success and am always looking for new opportunities to
          learn and grow.
        </p>
      </div>
      <div className="tw-flex tw-w-full tw-flex-row tw-justify-center tw-gap-4 tw-p-4">
        <div className="tw-relative tw-hidden tw-w-fit tw-flex-col tw-items-center tw-justify-around tw-gap-4 tw-p-4 lg:tw-flex">
          {work.map((job, index) => (
            <DateCircle date={job.start} index={index} />
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
    </div>
  );
}
