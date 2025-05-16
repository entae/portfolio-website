"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import AboutTabButton from "./AboutTabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-3">
        <div>
          <h3 className="text-lg font-semibold mb-2">Confident</h3>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-white">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Oracle DB</li>
            <li>Python</li>
            <li>GitHub</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Competent</h3>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-white">
            <li>C</li>
            <li>C++</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Practiced</h3>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-white">
            <li>AWS</li>
            <li>Java</li>
            <li>Selenium</li>
          </ul>
        </div>
      </div>
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
        <li className="indent-6 list-none">
          Issued: The Ontario Rights Commission (Nov 27, 2024)
        </li>
        <li className="font-bold">
          Integrated Accessibility Standards Regulations Training
        </li>
        <li className="indent-6 list-none">
          Issued: AccessForward (Nov 27, 2024)
        </li>
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
    <section id="about" className="text-white">
      <div className="md:grid lg:grid-cols-2 gap-8 align-top py-16 px-4 xl:gap-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          width={600}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Image of In Tae standing in in front of a rocky wall and a blue sky above."
          className="rounded-3xl mb-2"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I enjoy being challenged to problem solve and have learned to code
            in various languages such as C, C++, Javascript, Python, and Java. I
            hope to work in an environment where I can not only be faced with
            many interesting challenges, but help add convenience to others'
            lives with the things I make. My other hobbies include photography,
            playing the guitar, and rock climbing.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-4">
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
          <div className="mt-4 my-auto">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
