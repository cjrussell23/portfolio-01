"use client";
import Resume from "./resume";
import dynamic from "next/dynamic";

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
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Resume />
    </PDFViewer>
  );
}
