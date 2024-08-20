"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./cards";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Jeep",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724099478/01_zy0c4g.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Tank",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724099269/06_yw2ybb.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Bomber aeroplane",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724099217/03_uwpie2.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
  {
    id: 1,
    title: "Boat ",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724099283/boat_nczfdm.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Army tank",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724099234/tank_plat8l.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Racing car",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724099224/car_vjwv67.mp4",
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
      {/* <div className="text-white bg-black flex flex-row justify-center items-center gap-2 py-6">
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
