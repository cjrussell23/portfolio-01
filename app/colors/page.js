export default function Page() {
  const bgcolors = [
    "tw-bg-border", 
    "tw-bg-input", 
    "tw-bg-ring", 
    "tw-bg-background", 
    "tw-bg-foreground"
  ];
  const bgdefaultColors = [
    "tw-bg-primary",
    "tw-bg-secondary",
    "tw-bg-destructive",
    "tw-bg-muted",
    "tw-bg-accent",
    "tw-bg-popover",
    "tw-bg-card",
  ];
  const bgforegroundColors = [
    "tw-bg-primary-foreground",
    "tw-bg-secondary-foreground",
    "tw-bg-destructive-foreground",
    "tw-bg-muted-foreground",
    "tw-bg-accent-foreground",
    "tw-bg-popover-foreground",
    "tw-bg-card-foreground",
  ];
  const bgshades = [
    "tw-bg-primary-dark",
    "tw-bg-primary-light",
    "tw-bg-secondary-dark",
    "tw-bg-secondary-light",
  ]

  const textcolors = [
    "tw-text-border", 
    "tw-text-input", 
    "tw-text-ring", 
    "tw-text-background", 
    "tw-text-foreground"
  ];

  const textdefaultColors = [
    "tw-text-primary",
    "tw-text-secondary",
    "tw-text-destructive",
    "tw-text-muted",
    "tw-text-accent",
    "tw-text-popover",
    "tw-text-card",
  ];

  const textforegroundColors = [
    "tw-text-primary-foreground",
    "tw-text-secondary-foreground",
    "tw-text-destructive-foreground",
    "tw-text-muted-foreground",
    "tw-text-accent-foreground",
    "tw-text-popover-foreground",
    "tw-text-card-foreground",
  ];

  const textshades = [
    "tw-text-primary-dark",
    "tw-text-primary-light",
    "tw-text-secondary-dark",
    "tw-text-secondary-light",
  ];

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-16">
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Colors</h2>
      <ColorGrid colors={bgcolors} />
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-mt-8">
        Default Colors
      </h2>
      <ColorGrid colors={bgdefaultColors} />
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-mt-8">
        Foreground Colors
      </h2>
      <ColorGrid colors={bgforegroundColors} />
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-mt-8">
        Shades
      </h2>
      <ColorGrid colors={bgshades} />
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-mt-8">
        Text Colors
      </h2>
      <TextGrid colors={textcolors} />
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-mt-8">
        Default Text Colors
      </h2>
      <TextGrid colors={textdefaultColors} />
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-mt-8">
        Foreground Text Colors
      </h2>
      <TextGrid colors={textforegroundColors} />
      <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-mt-8">
        Shades
      </h2>
      <TextGrid colors={textshades} />
    </div>
  );
}

function ColorGrid({ colors }) {
  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 xl:tw-grid-cols-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-lg tw-bg-gradient-to-b tw-from-black tw-to-white tw-w-52"
        >
          <div
            className={`tw-w-full tw-aspect-video tw-rounded-t-lg ${color}`}
          ></div>
          <div className="tw-text-sm tw-font-medium tw-mt-2 tw-p-3 tw-text-white dark:tw-text-black">
            {color}
          </div>
        </div>
      ))}
    </div>
  );
}

function TextGrid({ colors }) {
  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 xl:tw-grid-cols-4 tw-text-orange-500">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`tw-flex tw-h-20 tw-flex-col tw-items-center tw-justify-center tw-rounded-lg tw-bg-gray-500 tw-w-52 ${color}`}
        >
          {color}
        </div>
      ))}
    </div>
  );
}