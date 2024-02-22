import SteamGames from "@/app/gaming/_components/steamGames";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";
import SteamProfile from "./steamProfile";
import PageContainer from "@/components/pageContainer";

export default function SteamSection() {
  const description = (
    <p>This is a collection of my games on Steam pulled from the Steam API.</p>
  );
  return (
    <PageContainer
      href="/gaming"
      title="Gaming"
      description={description}
      icon={<FaGamepad />}
    >
      <SteamProfile />
      <SteamGames />
    </PageContainer>
  );
}
