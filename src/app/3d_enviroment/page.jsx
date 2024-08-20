"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./cards";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Snooker game ",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724080150/04_aapcak.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 1,
    title: "Lake house",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724080245/01_v5wd5t.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Housing society",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724081239/02_mx8u00.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Characters = () => {
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
    <section id="projects bg-black">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
     
      <ul
        ref={ref}
        className="grid bg-[FDFDFF] md:grid-cols-3 gap-8 md:gap-12 px-24"
        style={{ minHeight: "1200px", padding: "20px", height: "100%" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            style={{ minHeight: "100px" }}
          >
            <ProjectCard
              key={project.id}
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

export default Characters;
