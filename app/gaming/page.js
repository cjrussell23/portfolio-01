import SteamSummarySection from "@/components/steamSummarySection/steamSummarySection";

export const metadata = {
  title: "CR | Gaming",
  description: "Charles Russell's games on Steam",
};

export default function Page() {
  return (
    <div>
      <SteamSummarySection />
    </div>
  );
}
