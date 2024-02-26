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
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    ),
  }
);

export default function ResumePage() {
  if (isMobile) {
    return (
      <PDFDownloadLink document={<Resume />} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    );
  }
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Resume />
    </PDFViewer>
  );
}
