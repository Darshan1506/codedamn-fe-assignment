import React from "react";
import BaseLayout from "./BaseLayout";
import PlayGroundsCard from "./PlayGroundsCard";
import ProjectCard from "./ProjectCard";

type Playground = {
  title: string;
  img: string;
};
type Project = {
  img: string;
};

const playgrounds: Playground[] = [
  { title: "Playground title 1", img: "/htmlcss.svg" },
  { title: "Playground title 2", img: "/javascript.svg" },
  { title: "Playground title 3", img: "/htmlcss.svg" },
  { title: "Playground title 4", img: "/javascript.svg" },
];
const projects: Project[] = [
  { img: "/portfolio.png" },
  { img: "/portfolio2.png" },
  { img: "/portfolio2.png" },
  { img: "/portfolio2.png" },
];

const PortfolioComponent: React.FC = () => {
  return (
    <div>
      <div className="mt-8 flex items-center t-8 mb-2 ml-0">
        <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8 ">
          Playgrounds
        </h1>
        <p className="text-zink-500 font-normal font-inter text-base leading-6 text-center ml-auto ">
          See all
        </p>
      </div>
      <div className="flex justify-start items-center">
        <div className="grid grid-cols-2 gap-2">
          {playgrounds.map((playground, index) => (
            <PlayGroundsCard
              key={index}
              title={playground.title}
              img={playground.img}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center mt-8 mb-2">
        <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8 ">
          Projects
        </h1>
        <p className="text-zink-500 font-normal font-inter text-base leading-6 text-center ml-auto ">
          See all
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} img={project.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
