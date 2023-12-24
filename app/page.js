import Header from "@/components/header";
import Image from "next/image";
import Hero from "@/components/hero/hero";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start w-full bg-background -mt-[100px]">
        <Hero />
        <section
          id="about"
          className="flex flex-col items-center justify-start w-full px-4 py-8 max-w-5xl text-2xl mt-8"
        >
          <h2 className="text-5xl font-bold text-center mb-8">About Me</h2>
          <p className="mb-4">
            {`Welcome to my corner of the web - very much a work in progress.
            I'm Charles, a software developer based in Calgary, Alberta.
            I'm passionate about all things tech and enjoy building
            innovative solutions that solve real-world problems. I'm a firm
            believer in the power of technology to transform lives and make the
            world a better place. I'm also a strong advocate for
            sectionersity and inclusion in the tech industry.`}
          </p>
          <p className="mb-4">
            {`In 2020, I made a pivotal decision to transition from the Math
            program to Computer Science at the University of Winnipeg. This move
            marked the beginning of an exciting journey that led me to graduate
            in 2022 with a Bachelor of Science in Applied Computer Science.`}
          </p>
          <p className="mb-4">
            {`Currently, I'm thriving as a Junior Web Developer at Moby, an
            independent Internet Service Provider based in Calgary. One of my
            key responsibilities is curating and enhancing the Moby online
            experience by managing and developing the company's website.
            It's a role that challenges me daily and allows me to contribute
            to the digital presence of a cutting-edge organization.`}
          </p>
          <p className="mb-4">
            {`My academic background, coupled with hands-on experience, has
            equipped me with a diverse skill set in web development. From coding
            intricate algorithms to crafting visually appealing and
            user-friendly interfaces, I am dedicated to pushing the boundaries
            of what is possible in the digital realm.`}
          </p>
          <p className="mb-4">
            {`That's it for now. I'm always open to new opportunities and
            collaborations, so feel free to reach out to me via email or
            LinkedIn.`}
          </p>
          {/* <p className="mb-4">
                Join me on this exciting journey as I continue to explore the ever-evolving landscape of computer science and web development. Feel free to explore my portfolio to get a glimpse of the projects that have fueled my passion and shaped my professional identity.
            </p>
            <p className="mb-4">
                Let's build the future together—one line of code at a time.
            </p> */}
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-start w-full px-4 py-8 max-w-5xl text-2xl"
        >
          {/* Social Links */}
          <h2 className="text-5xl font-bold text-center mb-8">Contact</h2>
          <div className="flex flex-row items-center justify-center w-full gap-8 mb-8">
            <a
              href="https://linkedin.com/in/chjrussell"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-custom-gray-100 hover:bg-custom-gray-200 transition-all duration-300 ease-in-out"
            >
              <FaLinkedin className="text-4xl text-custom-gray-900" />
            </a>
            <a
              aria-label="Email"
              href="mailto:chjrussell@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-custom-gray-100 hover:bg-custom-gray-200 transition-all duration-300 ease-in-out"
            >
              <FaMailBulk className="text-4xl text-custom-gray-900" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
