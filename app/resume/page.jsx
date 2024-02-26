"use client";
import Resume from "./resume";
import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { isMobile, isBrowser } from "react-device-detect";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="tw-flex tw-items-center tw-justify-center tw-p-6 tw-text-2xl tw-font-bold">
        Loading...
      </div>
    ),
  }
);

export default function ResumePage() {
  if (isMobile) {
    return (
      <div className="tw-flex tw-size-full tw-flex-col tw-gap-4 tw-p-6">
        <h1 className="tw-text-2xl">
          PDF Preview is not available on mobile devices
        </h1>
        <p>To view the resume, please download the PDF using the link below.</p>
        <PDFDownloadLink
          document={<Resume />}
          fileName="charles_russell_resume.pdf"
          className="tw-mt-2 tw-w-fit tw-rounded-md tw-bg-primary tw-px-4 tw-py-2 tw-text-white"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Resume PDF"
          }
        </PDFDownloadLink>
      </div>
    );
  }
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Resume />
    </PDFViewer>
  );
}
