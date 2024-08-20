import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ media, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="mx-5 border border-black rounded-xl overflow-hidden">
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
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-80 transition-all duration-500 opacity-0 hover:opacity-100 pointer-events-none">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white pointer-events-auto"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white pointer-events-auto"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white bg-[#181818] py-6 px-4 rounded-b-xl">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
