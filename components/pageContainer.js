import Link from "next/link";

export default function PageContainer(props) {
  const { href, title, description, icon, children } = props;
  if (href && title && icon) {
    return (
      <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-6xl tw-flex-col tw-justify-center tw-gap-4 tw-pt-2 md:tw-px-6 md:tw-pt-6 lg:tw-px-6 lg:tw-pb-6 lg:tw-pt-6 xl:tw-pt-16">
        <PageContainerInner
          href={href}
          title={title}
          description={description}
          icon={icon}
        >
          {children}
        </PageContainerInner>
      </div>
    );
  }
  return (
    <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-6xl tw-flex-col tw-justify-center tw-gap-4 tw-pt-2 md:tw-px-6 md:tw-pt-6 lg:tw-px-6 lg:tw-pb-6 lg:tw-pt-6 xl:tw-pt-16">
      {children}
    </div>
  );
}

function PageContainerInner(props) {
  const { href, title, description, icon, children } = props;
  return (
    <div className="tw-flex tw-w-full tw-flex-col tw-justify-center tw-gap-4 tw-p-4">
      <Link
        href={href}
        className="tw-flex tw-cursor-pointer tw-gap-2 hover:tw-text-primary"
      >
        <h1 className="tw-flex tw-items-center tw-gap-4 tw-text-3xl tw-font-bold">
          {icon}
          {title}
        </h1>
      </Link>
      <p>{description}</p>
      {children}
    </div>
  );
}
