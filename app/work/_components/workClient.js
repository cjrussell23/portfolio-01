"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function ProgressBar({ className }) {
  const { scrollYProgress } = useScroll();
  return (
    <div
      className={`tw-absolute tw-left-1/2 tw-top-0 tw-z-negative-10 tw-flex tw-h-full tw-w-2 tw-grow -tw-translate-x-1/2 tw-items-center tw-justify-center tw-bg-card ${className}`}
    >
      <motion.div
        style={{ scaleY: scrollYProgress, originY: 0 }}
        className="tw-h-full tw-w-2 tw-bg-primary"
      ></motion.div>
    </div>
  );
}

export function DateCircle({ date, index }) {
  const { scrollYProgress } = useScroll();
  const [isActive, setIsActive] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let shouldSetActive = false;
    const offset = 0.5;
    const value = (index + offset) / 4;
    if (latest >= value) {
      shouldSetActive = true;
    }
    if (shouldSetActive !== isActive) {
      setIsActive(shouldSetActive);
    }
  });
  const shortDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const [month, year] = shortDate.split(" ");

  return (
    <div
      className={`tw-flex tw-aspect-square tw-flex-col tw-items-center tw-justify-center tw-rounded-full tw-border-8 tw-bg-background tw-p-4 tw-pb-6 tw-text-2xl ${
        isActive ? "tw-border-primary" : "tw-border-card"
      }`}
    >
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
}

export function Job({ job, className }) {
  const startdate = new Date(job.start);
  const enddate = job.end ? new Date(job.end) : new Date();
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="tw-max-w-lg">
        <CardHeader>
          <CardTitle>
            <p className="tw-text-2xl tw-font-bold tw-text-primary">
              {job.position}
            </p>
            <p className="tw-text-lg tw-italic tw-text-primary">
              <a href={job.website} target="_blank" rel="noreferrer">
                {job.company}
              </a>
            </p>
          </CardTitle>
          <div>
            <p className="tw-text-lg tw-italic tw-text-primary">
              {startdate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}{" "}
              -{" "}
              {enddate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="tw-text-lg tw-italic tw-text-primary">
              <a href={job.map} target="_blank" rel="noreferrer">
                {job.location}
              </a>
            </p>
          </div>
        </CardHeader>
        <CardContent className="tw-space-y-4 tw-p-4">
          <p className="">{job.description}</p>
          <ul className="tw-list-outside tw-list-disc tw-pl-4">
            {job.bullets.map((bullet, index) => (
              <li key={index} className="tw-p-1">
                {bullet}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
