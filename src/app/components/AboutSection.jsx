"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Autodesk Maya </li>
        <li>Zbursh </li>
        <li>
          Substance Painter & Designer
        </li>
        <li>Character Creator </li>
        <li>Blendar</li>
        <li>
          3Ds Max </li>
        <li>

          Davinci Resolve  </li>

          <li>


          Adobe After effect  </li>

          <li>


          Adobe Premiere Pro  </li>
          <li>



          Adobe Photoshop  </li>
          <li>


          marvelous designer  </li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>CS SUKKUR IBA UNIVERISTY</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Udemy Character Modeling & Texturing For Game </li>
        <li> Diploma 3D Animation & Vfx </li>
        <li>  Udemy Cinematic Lighting 
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <video src="https://res.cloudinary.com/debs4xanw/video/upload/v1724099224/car_vjwv67.mp4"></video>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">

            I am a skilled 3D artist, VFX artist, video editor, and texture designer with over 10 years of experience. I specialize in 3D modeling, texturing, VFX design, and character creation, using software like Adobe After Effects, Adobe Premiere Pro, DaVinci Resolve, Photoshop, Autodesk Maya, 3Ds Max, Blender, ZBrush, Substance Painter, Unity, and Unreal Engine.

            I'm passionate about creating stunning visuals and always aim for perfection. Let's discuss how I can help with your project. Contact me anytime for a free Zoom call to discuss your ideas.

            Thank you, and I look forward to speaking with you.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
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
