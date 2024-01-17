import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import ContactForm from "./contactForm";
import Link from "next/link";
import Socials from "@/data/socials";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="tw-mx-auto tw-flex tw-h-full tw-min-h-dvh tw-max-w-2xl tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-py-8 lg:tw-py-16"
    >
      <h2 className="tw-mb-8 tw-w-full tw-text-4xl tw-font-bold">Contact</h2>
      <p className="tw-mb-8 tw-w-full tw-text-xl">
        I'm always open to new opportunities and would love to hear from you!
      </p>
      <div className="tw-mb-20 tw-w-full tw-rounded-md tw-border tw-border-muted-foreground tw-p-6">
        <ContactForm />
      </div>
      <h2 className="tw-mb-8 tw-w-full tw-text-4xl tw-font-bold">Socials</h2>
      <p className="tw-mb-8 tw-w-full tw-text-xl">
        Feel free to reach out to me and connect!
      </p>
      <div className="tw-mb-8 tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-start tw-gap-8 tw-text-2xl">
        {Socials.map((link, index) => (
          <Link
            href={link.href}
            className="tw-flex tw-flex-row tw-items-center tw-justify-between tw-rounded-md tw-bg-primary tw-px-2 tw-py-1 tw-text-primary-foreground hover:tw-ring"
            key={index}
          >
            <span className="tw-flex tw-flex-row tw-items-center tw-gap-2">
              {link.icon}
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
