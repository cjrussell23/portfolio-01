import SteamSection from "@/components/steam/steamSection";

export const metadata = {
  title: "CR | Gaming",
  description: "Charles Russell's games on Steam",
};

export default function Page() {
  return (
    <div>
      <SteamSection />
    </div>
  );
}
