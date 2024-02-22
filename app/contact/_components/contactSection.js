import { FaMailBulk } from "react-icons/fa";
import ContactForm from "./contactForm";
import Link from "next/link";
import Socials from "@/data/socials";
import PageContainer from "@/components/pageContainer";

export default function ContactSection() {
  const description = (
    <p>
      {`I'm always open to new opportunities and would love to hear from you!`}
    </p>
  );
  return (
    <PageContainer
      href="/contact"
      title="Contact"
      description={description}
      icon={<FaMailBulk />}
    >
      <div className="tw-w-full tw-max-w-2xl tw-rounded-md tw-border tw-border-muted-foreground tw-p-6">
        <ContactForm />
      </div>
      <div className="tw-flex tw-w-full tw-flex-row tw-flex-wrap tw-items-center tw-justify-start tw-gap-8 tw-p-4">
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
    </PageContainer>
  );
}
