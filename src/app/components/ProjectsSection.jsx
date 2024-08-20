"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Characters",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072906/08_ovjckx.png",
    },
    tag: ["All", "Web"],
    previewUrl: "/character",
  },
  {
    id: 2,
    title: "Textures",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095615/10_ek9sy0.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/textures",
  },
  {
    id: 3,
    title: "3D Enviorment",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724113646/3d-env_hcvnhn.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/3d_enviroment",
  },
  {
    id: 4,
    title: "Vehicle",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724113641/vlcsnap-2024-08-20-05h06m15s081_gl2z8e.png",
    },
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/vehicles",
  },
  {
    id: 5,
    title: "Jewllery",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098197/02_o4evdo.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/jewellery",
  },
  
  {
    id: 7,
    title: "Weapons",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724097926/04_nrzpbi.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/gun",
  },
  {
    id: 8,
    title: "3D Game trailer",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724113638/game-snap_whmutk.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/3d_game_trailer",
  },
  {
    id: 9,
    title: "VFX Portfolio",
    media: {
      type: "image",
      url: "/vfx-snap.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/VFX",
  },
  {
    id: 10,
    title: "Video Editing Showrell",
    media: {
      type: "image",
      url: "/edit.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/videoediting$vfx",
  },
  {
    id: 10,
    title: "Game Assests",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724097518/01_j57apb.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/game_assets",
  },
  {
    id: 10,
    title: "NFT 3d creative arts",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098567/15_qre8fi.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/NFT",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <h2 className="text-center text-xl  text-white mt-4 mb-8 md:mb-12">
        Click Cards to view Portfolio
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              media={project.media}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;