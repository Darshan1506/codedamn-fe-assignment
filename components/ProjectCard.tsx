import Image from "next/image";
import React from "react";
interface ProjectCardProps {
  img: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ img }) => {
  return (
    <div className="max-w-md bg-white border hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image src={img} alt="me" width="500" height="100" className="p-5" />

      <div className="pl-5 pt-1 pb-2">
        <h5 className="mb-2  font-semibold font-inter text-2xl text-gray-900 dark:text-white leading-6">
          Personal Portfolio Website
        </h5>
        <p className="mb-3 text-zink-500 font-normal font-inter text-sm  dark:text-gray-400 leading-5">
          HTML/CSS • Javascript • 1 min ago
        </p>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <Image
              src="/group1.svg"
              alt="me"
              width="30"
              height="30"
              className="h-auto mb-5"
            />
            <Image
              src="/group2.svg"
              alt="me"
              width="30"
              height="30"
              className="h-auto mb-5"
            />
          </div>
          <p className="font-normal  dark:text-gray-400 text-zink-500  font-inter text-center mt-1  leading-relaxed m-0 p-0">
            3 contributors
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
