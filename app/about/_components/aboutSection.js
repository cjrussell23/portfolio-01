import PageContainer from "@/components/pageContainer";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

export default function AboutSection() {
  const paragraphs = [
    `
      I'm Charles, a software developer based in Calgary, Alberta.
      I'm passionate about all things tech and enjoy building
      innovative solutions that solve real-world problems. I'm a firm
      believer in the power of technology to transform lives and make the
      world a better place.`,
    `Currently, I'm working as the Web Developer at Moby, an
      independent Internet Service Provider based in Calgary. As Moby's Web Developer, 
      I hold full responsibility for website management. 
      I am currently leading the development of a new, 
      Next.js-based website to bring Moby's online presence to the next level.`,
    `I have a Bachelor of Science in Applied Computer Science from the
      University of Winnipeg which I was able to complete in 2 years 
      after transferring from the Candian Mennonite University where I was studying Mathematics.`,
  ];

  return (
    <PageContainer
      href="/about"
      title="About Me"
      description={null}
      icon={<FaUser />}
    >
      <div className="">
        <Image
          src="/img/portrait.png"
          alt="Charles"
          width={300}
          height={300}
          className="tw-float-right tw-m-4 tw-mx-8 tw-hidden tw-rounded-md tw-bg-neutral-400 sm:tw-block md:tw-hidden lg:tw-block"
        />
        <div className="tw-py-4">
          {paragraphs.map((paragraph, index) => (
            <p className="tw-mb-6" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <Image
        src="/img/portrait.png"
        alt="Charles"
        width={300}
        height={300}
        className="tw-mx-auto tw-rounded-md tw-bg-neutral-400 sm:tw-hidden md:tw-block lg:tw-hidden"
      />
    </PageContainer>
  );
}
