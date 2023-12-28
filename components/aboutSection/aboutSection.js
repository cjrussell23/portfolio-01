export default function AboutSection() {
  return (
    <section
      id="about"
      className="tw-flex tw-flex-col tw-items-center tw-justify-start tw-w-full tw-px-4 tw-py-8 tw-text-2xl tw-mt-8"
    >
      <h2 className="tw-text-4xl tw-font-bold tw-text-center tw-mb-8">
        About Me
      </h2>
      <article className="tw-flex tw-flex-col tw-md:flex-row tw-items-center tw-justify-between tw-w-full">
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full">
          <p className="tw-p-6 tw-max-w-screen-lg">
            {`Welcome to my corner of the web - very much a work in progress.
      I'm Charles, a software developer based in Calgary, Alberta.
      I'm passionate about all things tech and enjoy building
      innovative solutions that solve real-world problems. I'm a firm
      believer in the power of technology to transform lives and make the
      world a better place.`}
          </p>
        </div>
      </article>
      <article className="tw-flex tw-flex-col tw-md:flex-row tw-items-center tw-justify-between tw-w-full">
        <div>
          <p className="tw-p-6 tw-max-w-screen-lg">
            {`In 2020, I made a pivotal decision to transition from the Math
      program to Computer Science at the University of Winnipeg. This move
      marked the beginning of an exciting journey that led me to graduate
      in 2022 with a Bachelor of Science in Applied Computer Science.`}
          </p>
        </div>
      </article>
      <article className="tw-flex tw-flex-col tw-md:flex-row tw-items-center tw-justify-between tw-w-full">
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full">
          <p className="tw-p-6 tw-max-w-screen-lg">
            {`Currently, I'm thriving as a Junior Web Developer at Moby, an
      independent Internet Service Provider based in Calgary. One of my
      key responsibilities is curating and enhancing the Moby online
      experience by managing and developing the company's website.
      It's a role that challenges me daily and allows me to contribute
      to the digital presence of a cutting-edge organization.`}
          </p>
        </div>
      </article>
      <article className="tw-flex tw-flex-col tw-md:flex-row tw-items-center tw-justify-between tw-w-full">
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full">
          <p className="tw-p-6 tw-max-w-screen-lg">
            {`My academic background, coupled with hands-on experience, has
      equipped me with a diverse skill set in web development. From coding
      intricate algorithms to crafting visually appealing and
      user-friendly interfaces, I am dedicated to pushing the boundaries
      of what is possible in the digital realm. That's it for now. I'm always open to new opportunities and
      collaborations, so feel free to reach out to me via email or
      LinkedIn.`}
          </p>
        </div>
      </article>
    </section>
  );
}
