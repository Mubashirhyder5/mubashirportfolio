"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Hunter Man",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072952/07_zbqun6.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Fox Man",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072942/20_1_nqus4o.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Robot Cat",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072942/16_vihtgx.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Human Robot ",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072942/21_hvriba.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Human Robot ",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072936/24_g6iicf.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Human Robot ",

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072932/23_zghabe.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Monkey",
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072931/22_g8tf3j.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Ninja",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072921/19_nfpein.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Black Man",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072918/01_c6g3eo.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Jack ",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072912/02_rroxls.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Madam",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072910/17_lazx3n.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mely",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072906/08_ovjckx.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Rish Doll ",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072905/05_oe5fci.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Roro Doll",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072904/14_fmikqn.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Jack Rigg",
    description: "Project 1 description",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072902/13_nc3ina.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Unicon Doll ",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072901/12_srsqrx.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Woodsman ",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072900/06_xvzcjk.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Mely Rigg",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072899/04_g96oit.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Jack Rigg",
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724072898/18_tlncea.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Robot Man Face Blendshape",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724072960/robot_jmmxt6.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Jack",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724072952/jack_th6vg8.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Monkey",
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724072963/monkey_dzo9tu.mp4",
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
    <section id="projects" className="bg-black">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
        className="grid bg-[#FDFDFF] md:grid-cols-3 gap-8 md:gap-12 px-24"
        style={{ minHeight: "1200px", padding: "20px", height: "100%" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            style={{ minHeight: "100px" }}
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

export default Characters;
