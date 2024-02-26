"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Course({ course }) {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}
