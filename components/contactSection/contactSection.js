import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import ContactForm from "./contactForm";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="tw-flex tw-flex-col tw-items-center tw-justify-start tw-w-full tw-px-4 tw-py-8 tw-max-w-2xl tw-mx-auto lg:tw-py-16"
    >
      <h2 className="tw-text-4xl tw-font-bold tw-mb-8 tw-w-full">Contact</h2>
      <p className="tw-text-xl tw-mb-8 tw-w-full">
        I'm always open to new opportunities and would love to hear from you!
      </p>
      <div className="tw-p-6 tw-w-full tw-border tw-border-muted tw-rounded-md tw-mb-20">
        <ContactForm />
      </div>
      <h2 className="tw-text-4xl tw-font-bold tw-mb-8 tw-w-full">Socials</h2>
      <p className="tw-text-xl tw-mb-8 tw-w-full">
        Feel free to reach out to me and connect!
      </p>
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-start tw-w-full tw-gap-8 tw-mb-8">
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
