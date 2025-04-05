"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "MoMA Art App",
    gitUrl: "https://github.com/entae/ArtApp",
    previewUrl: "https://art-app-seven.vercel.app/",
    description: "Project 1 description",
    // image: "/images/projects/art-app-image.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "React Portfolio Website",
    gitUrl: "https://github.com/entae/portfolio-website",
    previewUrl: "/",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <div className="grid lg:grid-cols-3 gap-x-8 md:gap-x-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
