import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import ContactForm from "./contactForm";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="tw-mx-auto tw-flex tw-w-full tw-max-w-2xl tw-flex-col tw-items-center tw-justify-start tw-px-4 tw-py-8 lg:tw-py-16"
    >
      <h2 className="tw-mb-8 tw-w-full tw-text-4xl tw-font-bold">Contact</h2>
      <p className="tw-mb-8 tw-w-full tw-text-xl">
        I'm always open to new opportunities and would love to hear from you!
      </p>
      <div className="tw-mb-20 tw-w-full tw-rounded-md tw-border tw-border-muted tw-p-6">
        <ContactForm />
      </div>
      <h2 className="tw-mb-8 tw-w-full tw-text-4xl tw-font-bold">Socials</h2>
      <p className="tw-mb-8 tw-w-full tw-text-xl">
        Feel free to reach out to me and connect!
      </p>
      <div className="tw-mb-8 tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-start tw-gap-8">
        <Link
          href="https://linkedin.com/in/chjrussell"
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-flex tw-flex-col tw-items-center tw-justify-center"
        >
          <FaLinkedin className="tw-text-4xl" />
        </Link>
        <Link
          aria-label="Email"
          href="mailto:chjrussell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tw-flex tw-flex-col tw-items-center tw-justify-center"
        >
          <FaMailBulk className="tw-text-4xl" />
        </Link>
      </div>
    </section>
  );
}
