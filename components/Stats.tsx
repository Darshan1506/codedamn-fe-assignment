import Image from "next/image";
import React from "react";

type Stat = {
  img: string;
  score: string;
  desc: string;
};

const stats: Stat[] = [
  {
    img: "/thunder.svg",
    score: "2",
    desc: "Longest streak",
  },
  {
    img: "/star.svg",
    score: "1200",
    desc: "Experience points",
  },
  {
    img: "/cup.svg",
    score: "Novice",
    desc: "Current league",
  },
  {
    img: "/heart.svg",
    score: "120",
    desc: "Karma points",
  },
];

const Stats = () => {
  return (
    <div>
      <div className="mt-8 flex items-center t-8 mb-2 ml-0">
        <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8 ">
          Stats
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="m-0 block max-w-md p-2 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex">
              <Image src={stat.img} height="50" width="50" alt="stat-img" />
              <div className="pl-4">
                <h2 className="text-zink-900 text-xl font-bold font-inter text-1.25rem leading-1.75rem">
                  {stat.score}
                </h2>
                <p className="text-zink-500 text-base font-normal font-inter text-1rem leading-1.5rem">
                  {stat.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
