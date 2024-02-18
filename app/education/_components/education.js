import Link from "next/link";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { courses } from "./courses.js";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge.jsx";

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

export function Course({ course }) {
  // Function to get the badge background color based on the grade
  function getBadgeColor(grade) {
    switch (grade) {
      case "A+":
        return "tw-bg-secondary-dark";
      case "A":
        return "tw-bg-secondary";
      case "A-":
        return "tw-bg-secondary-light";
      case "B+":
        return "tw-bg-primary-dark";
      case "B":
        return "tw-bg-primary";
      case "B-":
        return "tw-bg-primary-light";
      default:
        return "tw-bg-gray-500";
    }
  }
  return (
    <Card>
      <CardHeader>
        <div className="tw-flex tw-flex-row tw-items-start tw-justify-start tw-gap-4">
          <div className="tw-pt-1 tw-text-6xl tw-text-primary">
            {course.icon}
          </div>
          <CardTitle className="tw-flex tw-flex-col tw-gap-2">
            <p className="tw-text-2xl tw-font-bold tw-text-primary">
              {course.title}
            </p>
            <p className="tw-text-lg tw-italic tw-text-primary">
              {course.code}
            </p>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="tw-space-y-4">
        <div
          className={`tw-w-fit tw-rounded-md tw-px-4 tw-py-2 tw-text-center tw-text-xs tw-text-white ${getBadgeColor(
            course.grade
          )}`}
        >
          Grade: {course.grade}
        </div>
        <p className="tw-p-1">{course.description}</p>
      </CardContent>
    </Card>
  );
}
