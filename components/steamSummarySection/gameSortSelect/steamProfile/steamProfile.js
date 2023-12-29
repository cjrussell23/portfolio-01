import Link from "next/link";
import Image from "next/image";

function formatCreatedTime(timecreated) {
  return new Date(timecreated * 1000).toLocaleDateString("en-US");
}

export default function SteamProfile({ profile }) {
  const { avatarfull, personaname, profileurl, timecreated, gameCount } =
    profile;

  return (
    <div className="tw-flex tw-flex-row tw-items-center tw-gap-4 tw-w-full">
      <Link href={profileurl} alt="Steam Profile" target="_blank">
        <Image
          src={avatarfull}
          alt="Steam Profile"
          width={64}
          height={64}
          className="tw-rounded-full"
          priority={true}
        />
      </Link>
      <div className="tw-flex tw-flex-col tw-text-start tw-items-start">
        <h3 className="tw-text-xl tw-font-bold">{personaname}</h3>
        <span className="tw-text-sm tw-text-muted-foreground">
          Created: {formatCreatedTime(timecreated)}
        </span>
        <span className="tw-text-sm tw-text-muted-foreground">
          Games: {gameCount}
        </span>
      </div>
    </div>
  );
}
