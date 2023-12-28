"use client";

import Header from "@/components/header/header";
import AboutSection from "@/components/aboutSection/aboutSection";
import ContactSection from "@/components/contactSection/contactSection";
import HeroSection from "@/components/heroSection/heroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="tw-flex tw-flex-col tw-items-center tw-justify-start tw-w-full">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
