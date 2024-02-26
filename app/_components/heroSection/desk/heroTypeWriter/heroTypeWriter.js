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
            'Thanks for checking out my <span style="color:orange">portfolio</span>.'
          )
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
    />
  );
}
