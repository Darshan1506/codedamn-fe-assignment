import React from "react";
import Image from "next/image";
interface PlayGroundsCardProps {
  title: string;
  img: string;
}
const PlayGroundsCard: React.FC<PlayGroundsCardProps> = ({ title, img }) => {
  return (
    <div className="m-0 block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex">
        <Image src={img} alt="me" width="64" height="64" />
        <div className="">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <span className="block text-zink-500 font-normal font-inter text-sm leading-tight">
            HTML/CSS • 1 min ago
          </span>
        </div>
      </div>
      <div className="flex flex-row ml-20">
        <div className="flex flex-row mr-2">
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
        <p className="font-xl  dark:text-gray-400 text-zink-500  font-inter  leading-relaxed m-0 p-0">
          Shared with Adam, Anna.. +7 more
        </p>
      </div>
    </div>
  );
};

export default PlayGroundsCard;
