"use client";
import Typewriter from "typewriter-effect";

export default function HeroTypeWriter() {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 40,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello World!")
          .pauseFor(2000)
          .deleteAll()
          .typeString("My name is <span style='color:orange'>Charles</span>.")
          .pauseFor(2000)
          .deleteAll()
          .typeString(
            'I am a <span style="color:orange">software developer</span>.'
          )
          .pauseFor(2000)
          .deleteAll()
          .typeString(
            'I am always trying to <span style="color:orange">learn</span>.'
          )
          .pauseFor(2000)
          .deleteAll()
          .typeString(
            'This website is still a <span style="color:orange">work in progress</span>.'
          )
          .pauseFor(2000)
          .deleteAll()
          .typeString(
            '<a href="/gaming">I recently added the <span style="color:cyan">gaming</span> section - check it out!</a>'
          )
          .pauseFor(2000)
          .start();
      }}
    />
  );
}
