import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ media, title, description, gitUrl, previewUrl }) => {
  return (
    <Link href={previewUrl} className="block">
      <div className="mx-5 border border-black rounded-xl overflow-hidden cursor-pointer">
        <div className="relative h-64 md:h-96">
          {media ? (
            media.type === "image" ? (
              <img
                src={media.url}
                alt={title}
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={media.url}
                className="w-full h-full object-contain"
                controls
              />
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">No media available</p>
            </div>
          )}
        </div>
        <div className="text-white bg-[#181818] py-6 px-4 rounded-b-xl">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
