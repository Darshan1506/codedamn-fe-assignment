import Image from "next/image";
import React from "react";
interface ProjectCardProps {
  name: string;
  img: string;
  location: string;
  date: string;
  description: string;
}
const WorkComponent: React.FC<ProjectCardProps> = ({
  img,
  name,
  location,
  date,
  description,
}) => {
  return (
    <div className="p-4 mb-4 max-w-5xl	 bg-white border hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row">
        <Image src={img} alt="me" width="50" height="50" />

        <div className=" ">
          <h5 className="mb-1 mt-1 text-zink-900 font-semibold font-inter text-xl  dark:text-white leading-7">
            {name}
          </h5>
          <p className="mb-3 text-zink-500 font-normal font-inter text-sm  dark:text-gray-400 leading-5">
            {location}
          </p>
        </div>
        <p className="mb-3 text-zink-900 font-semibold font-inter text-sm  dark:text-gray-400 leading-5 ml-auto mt-8">
          {date}
        </p>
      </div>
      <p className="ml-20 mt-6 font-normal font-inter text-base text-gray-700 dark:text-gray-400 leading-6">
        {description}
      </p>
    </div>
  );
};

export default WorkComponent;
