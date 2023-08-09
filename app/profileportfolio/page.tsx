"use client";
import PortfolioComponent from "@/components/PortfolioComponents";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeComponent from "@/components/ResumeComponent";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/Card";
const skills: string[] = [
  "HTML 5",
  "CSS 3",
  "Javascript",
  "ReactJs",
  "Mongodb",
  "NextJs",
  "NodeJs",
  "Python",
  "Django",
  "Java",
  "Firebase",
];
import { FcGoogle } from "react-icons/fc";

import { FaInstagram, FaLinkedin, FaCopy } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Stats from "@/components/Stats";
interface UserData {
  about: string;
  achievement: boolean;
  displayName: string;
  dob: string;
  followers: boolean;
  gender: string;
  profession: string;
  xp: boolean;
}
const Page = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedDataString = localStorage.getItem("profileValues");
    if (storedDataString) {
      const storedData: UserData = JSON.parse(storedDataString);
      setUserData(storedData);
    }
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-6xl mx-auto relative">
          {/* 2nd div */}
          <div className="absolute top-[9rem] left-5">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          {/* 1st div */}
          <Image
            src="/rectangle.png"
            alt="me"
            width={880}
            height={180}
            className="h-[11.25rem] m-0"
          />

          {/* 3rd div */}
          <div className="m-0 pl-[20%] border border-solid border-zink-200 rounded-b-md p-4 mb-4">
            <div className="flex flex-row">
              <p className="text-zink-900 font-bold font-inter text-3xl leading-6 m-2">
                {userData?.displayName}
              </p>
              <div className="flex items-center justify-center gap-3 px-3 py-1 rounded-md bg-green-500 m-2 ml-4">
                <span className="text-zink-900 text-center font-semibold font-inter text-sm md:text-base md:font-medium leading-5 md:leading-6">
                  Pro
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 px-3 py-1 rounded-md ml-4 bg-blue-400 m-2">
                Looking For a Job
              </div>
            </div>
            <p className="text-zink-500 font-normal font-inter text-base leading-6 ml-4 mb-2">
              {userData?.profession}| Harvard’22”
            </p>
            <p className="text-zink-400 font-normal font-inter text-base leading-6 ml-4 mb-8">
              Mumbai, India
            </p>
            <div className="mb-8">
              {skills.map((skill, index) => (
                <Card key={index} content={skill} />
              ))}
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex justify-between">
                <div className="mr-2 p-2 border border-solid border-zink-200 rounded-md">
                  <FaLinkedin class="w-6 h-6" />
                </div>
                <div className="mr-2 p-2 border border-solid border-zink-200 rounded-md">
                  <FcGoogle class="w-6 h-6" />
                </div>
                <div className="mr-2 p-2 border border-solid border-zink-200 rounded-md">
                  <FaInstagram class="w-6 h-6" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="p-2 border border-solid border-zink-200 rounded-md bg-green-50">
                  <FaCopy class="w-6 h-6" />
                </div>
                <Button className="ml-2">Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start w-5xl">
        <Tabs defaultValue="portfolio" className="">
          <TabsList className="flex justify-start">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>
          <TabsContent value="portfolio" className="">
            {" "}
            <Stats />
            <PortfolioComponent />
          </TabsContent>
          <TabsContent value="resume">
            <div>
              {" "}
              <ResumeComponent />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
