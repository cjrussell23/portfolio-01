import SteamGame, {
  SteamGameSkeleton,
} from "@/components/steamSummarySection/gameSortSelect/steamGames/steamGame/steamGame";

export default function SteamGames({ games, gameCount }) {
  return (
    <div className="tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4">
      {games.length > 0
        ? games.map((game, index) => <SteamGame key={index} game={game} />)
        : Array.from({ length: gameCount }).map((_, index) => (
            <SteamGameSkeleton key={index} />
          ))}
    </div>
  );
}
