import { FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="tw-flex tw-flex-col tw-items-center tw-justify-start tw-w-full tw-px-4 tw-py-8 tw-max-w-5xl tw-text-2xl"
    >
      <h2 className="tw-text-5xl tw-font-bold tw-text-center tw-mb-8">
        Contact
      </h2>
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-full tw-gap-8 tw-mb-8">
        <a
          href="https://linkedin.com/in/chjrussell"
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-full tw-bg-custom-gray-100 tw-hover:bg-custom-gray-200 tw-transition-all tw-duration-300 tw-ease-in-out"
        >
          <FaLinkedin className="tw-text-4xl tw-text-custom-gray-900" />
        </a>
        <a
          aria-label="Email"
          href="mailto:chjrussell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-rounded-full tw-bg-custom-gray-100 tw-hover:bg-custom-gray-200 tw-transition-all tw-duration-300 tw-ease-in-out"
        >
          <FaMailBulk className="tw-text-4xl tw-text-custom-gray-900" />
        </a>
      </div>
    </section>
  );
}
