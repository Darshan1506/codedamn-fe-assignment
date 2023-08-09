"use client";
import BaseLayout from "@/components/BaseLayout";
import PlayGroundsCard from "@/components/PlayGroundsCard";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
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

const Page: React.FC = () => {
  const router = useRouter();
  return (
    <BaseLayout>
      <div className="mt-8">
        <div className="mt-8 flex items-center t-8 mb-2">
          <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8 ">
            Playgrounds
          </h1>
        </div>
        <div className="flex justify-start items-center ml-0">
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
        </div>
        <div className="flex justify-start items-center ml-0">
          <div className="grid grid-cols-2 gap-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} img={project.img} />
            ))}
          </div>
        </div>
        <div className="ml-4 mt-4 mb-20">
          <Button type="submit" onClick={() => router.push("/resume")}>
            Submit
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Page;
