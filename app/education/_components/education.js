import Link from "next/link";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { courses } from "./courses.js";
import Image from "next/image";
import Course from "./course.js";

export default function Education() {
  return (
    <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-8xl tw-flex-col tw-justify-center tw-gap-4 lg:tw-px-2 lg:tw-pb-4 lg:tw-pt-16">
      <div className="tw-flex tw-w-full tw-flex-row tw-flex-wrap tw-justify-center tw-gap-4 lg:tw-flex-nowrap">
        <EducationDescription />
        <Courses />
      </div>
    </div>
  );
}

function EducationDescription() {
  const university = {
    name: "University of Winnipeg",
    href: "https://www.uwinnipeg.ca/",
    location: "Winnipeg, Manitoba",
    degree: "Bachelor of Science",
    major: "Applied Computer Science",
  };
  return (
    <div className="tw-h-full tw-w-full lg:tw-sticky lg:tw-top-16 lg:tw-w-1/2">
      <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 tw-p-4">
        <Link
          href="/education"
          className="tw-flex tw-cursor-pointer tw-gap-2 hover:tw-text-primary"
        >
          <h1 className="tw-flex tw-items-center tw-gap-4 tw-text-3xl tw-font-bold">
            <FaGraduationCap />
            Education
          </h1>
        </Link>
        <p>
          This page contains information about my education and the courses I
          have taken.
        </p>
        <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 tw-rounded-md tw-bg-card tw-text-card-foreground tw-shadow-md">
          <Image
            src="/img/about-uwinnipeg-wesley-758x381.jpg"
            alt="University of Winnipeg"
            width={758}
            height={381}
            className="tw-rounded-t-md"
          />
          <div className="tw-flex tw-flex-col tw-justify-center tw-gap-6 tw-p-4">
            <h2 className="">
              <p className="tw-text-3xl tw-font-bold tw-text-primary">
                {university.degree}
              </p>
              <p className="tw-text-lg tw-italic tw-text-primary">
                {" "}
                {university.major}
              </p>
            </h2>
            <p>
              I graduated from the University of Winnipeg with a Bachelor of
              Science in Applied Computer Science. The program provided me with
              a strong foundation in computer science and software development.
            </p>
            <p>
              The University of Winnipeg is a public research university in
              Winnipeg, Manitoba, Canada that offers undergraduate faculties of
              art, business and economics, education, science and kinesiology,
              and graduate programs. It is home to the renowned Richardson
              College for the Environment and Science Complex.
            </p>
          </div>
          <div className="tw-flex tw-justify-center tw-gap-4 tw-rounded-b-md tw-bg-primary tw-p-4 tw-text-primary-foreground">
            <a href={university.href} target="_blank" rel="noreferrer">
              {university.name}
            </a>
            <span className="tw-italic">{university.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <div className="tw-h-full tw-w-full lg:tw-top-16 lg:tw-w-1/2">
      <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 tw-p-4">
        <Link
          href="/education"
          className="tw-flex tw-cursor-pointer tw-gap-2 hover:tw-text-primary"
        >
          <h1 className="tw-flex tw-items-center tw-gap-4 tw-text-3xl tw-font-bold">
            <FaBookOpen />
            Courses
          </h1>
        </Link>
        <p>
          These are some of the relevant courses I have taken during my studies
          at the University of Winnipeg.
        </p>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
        {courses.map((course) => (
          <Course key={course.code} course={course} />
        ))}
      </div>
    </div>
  );
}
