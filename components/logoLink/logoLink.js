import Link from "next/link";
import Image from "next/image";

export default function LogoLink() {
  return (
    <div className="tw-flex tw-flex-row tw-gap-4">
      <div className="tw-flex tw-items-center tw-justify-center">
        {/* Profile Image */}
        <Link href="/" alt="Home Page">
          <Image
            src="/img/fishing.jpg"
            alt="Charles Russell"
            width={50}
            height={50}
            className="tw-aspect-square tw-rounded-full tw-object-cover tw-object-bottom"
          />
        </Link>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-text-start">
        <p className="tw-text-xl tw-font-bold">Charles Russell</p>
        <p className="tw-text-m tw-text-muted-foreground">
          Software Developer.
        </p>
      </div>
    </div>
  );
}
