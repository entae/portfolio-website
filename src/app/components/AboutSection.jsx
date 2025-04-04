"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import AboutTabButton from "./AboutTabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 marker:text-white">
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 marker:text-white">
        <li className="font-bold">
          Computer Programming - Ontario College Diploma
        </li>
        <li className="indent-6 list-none">Seneca College (2024)</li>
        <li className="font-bold">
          Honours Law & Society - Bachelor's of Arts
        </li>
        <li className="indent-6 list-none">York University (2021)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 marker:text-white">
        <li className="font-bold">Human Rights 101</li>
        <li className="indent-6 list-none">Issued: The Ontario Rights Commission (Nov 27, 2024)</li>
        <li className="font-bold">
          Integrated Accessibility Standards Regulations Training
        </li>
        <li className="indent-6 list-none">Issued: AccessForward (Nov 27, 2024)</li>
      </ul>
    ),
  },
];

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
          src="/images/display2.png"
          alt="about image"
          className="rounded-3xl mb-4"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I enjoy being challenged while learning to code in various languages
            such as C, C++, HTML, Javascript, CSS, and Java. I hope to work in
            an environment where I can not only be taught many things, but help
            add convenience to others' lives with the things I make. My other
            hobbies include film photography, playing the guitar, and finding
            delicious food.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </AboutTabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
