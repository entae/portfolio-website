"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import AboutTabButton from "./AboutTabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/hero-image.png"
          alt="about image"
          className="rounded-3xl mb-4"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I enjoy being challenged while learning to code in various languages
            such as C, C++, HTML, Javascript, CSS, and Java. I hope to work in
            an environment where I can not only be taught many things, but help
            add convenience to others' lives with the things I make. My other
            hobbies include film photography, playing the guitar, and finding
            delicious food.
          </p>
          <div className="flex flex-row mt-8">
            <AboutTabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </AboutTabButton>
            <AboutTabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </AboutTabButton>
            <AboutTabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </AboutTabButton>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
