"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./cards";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Mr Cockroach",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098614/01_vuwy1h.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098610/08_kqthdg.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098609/20_gfxxww.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098606/05_ftwazt.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098603/07_jkvfb4.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098597/09_psedoc.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098596/03_jjzqmo.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098590/04_jmzqhz.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098589/18_v7nf5t.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098583/02_ytroox.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098580/11_urwjpz.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098578/06_bfqzhb.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",
  
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098578/14_mtofdr.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098575/13_muiodd.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mr Cockroach",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098575/10_z5clxj.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098568/17_lpaa9a.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098567/15_qre8fi.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098561/19_dl7mfg.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098559/16_blvge1.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "BigNoseApe",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724098557/12_vqkfhv.png",
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
