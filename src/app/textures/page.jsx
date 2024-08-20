"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./cards";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095649/09_kledcg.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095646/40_bwhe3e.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095644/39_zxt5rz.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095643/44_aik43x.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095639/23_ltrsnm.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095634/17_z0mvvh.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095622/33_ogmple.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095617/24_znytin.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095615/10_ek9sy0.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095613/35_pf067l.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095610/11_sjcqh6.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095608/08_thdisp.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095596/32_ydo1rv.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095590/36_oljqry.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095589/25_jutpas.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095589/19_ul2dcs.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095585/06_uqfrfd.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095574/37_mb0kh6.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095570/02_ccjcer.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095562/18_sw42bg.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095562/22_ueoubt.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "/texture/24.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095557/05_v4xx8p.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095557/42_h2mr9o.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095552/07_aigmxg.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095551/16_iqtyxb.png",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095545/43_lwkfj0.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095539/34_q5r5jc.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095534/31_rq3dz3.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095530/38_mqbtum.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095527/20_h03iej.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095522/27_lwioyd.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
 
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095517/30_vsf4dk.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095514/12_jmphs4.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
 
    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095508/46_zqs5uw.jpg",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724095488/14_ueagf6.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724095677/15_r5tkmy.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724095659/01_xovpip.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724095639/dress_hiijym.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
   
    media: {
      type: "video",
      url: "https://res.cloudinary.com/debs4xanw/video/upload/v1724095488/14_ueagf6.mp4",
    },
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,

    media: {
      type: "image",
      url: "https://res.cloudinary.com/debs4xanw/image/upload/v1724095487/45_bz9uzz.jpg",
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
