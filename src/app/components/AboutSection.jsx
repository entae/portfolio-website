"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import AboutTabButton from "./AboutTabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 marker:text-white list-outside [&_ul]:list-[revert]">
        <li>
          <p className="font-bold pr-2">
            Junior Full Stack Engineer - Alltourage (Startup)
          </p>
          <p>Jan 2025 - Current</p>
          <ul className="ml-6">
            <li>
              Engineered full-stack features for an HR SaaS referral platform
              using RESTful APIs, GraphQL, TypeScript, and Material UI,
              enhancing referral efficiency across client organizations
            </li>
            <li>
              Built and maintained CI/CD pipelines with GitHub Actions, Docker,
              and AWS, decreasing deployment time by 10% and enabling more
              reliable production pushes.
            </li>
            <li>
              Collaborated closely with design, QA, and product teams in Agile
              sprints to deliver continuous value and drive rapid iteration.
            </li>
          </ul>
        </li>
        <li>
          <p className="font-bold">
            Software Engineer Co-op - MCCSS (Ontario Ministry)
          </p>
          <p>Jan 2024 - Dec 2024</p>
          <ul className="ml-6">
            <li>
              Developed microservices RESTful APIs in Java Spring Boot, and SQL
              for a government case management platform processing over 10,000
              applicant records per month.
            </li>
            <li>
              Supported automated end-to-end testing using Selenium to ensure
              system reliability.
            </li>
            <li>
              Validated UI designs against user story requirements and reported
              updates during Agile scrums.
            </li>
            <li>
              Applied Test-Driven Development (TDD) to maintain 80%+ code
              coverage, creating unit and integration tests that reduced
              production bugs.
            </li>
            <li>
              Initiated the development of a calculator tool, which later
              accelerated workflows by 200%.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-3">
        <div>
          <h3 className="text-lg font-semibold mb-2">Expert</h3>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-white">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>GitHub</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Experienced</h3>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-white">
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>Oracle DB</li>
            <li>Jira</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Hands-on</h3>
          <ul className="list-disc list-inside space-y-1 pl-2 marker:text-white">
            <li>AWS</li>
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
        <li className="indent-6 text-green-500 font-thin list-none">4.0 GPA</li>
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
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white scroll-mt-10">
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
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </AboutTabButton>
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
