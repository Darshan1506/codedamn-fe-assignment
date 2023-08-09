"use client";
import { AddEducation } from "@/components/AddEducation";
import { WordEducationCard } from "@/components/WordEducationCard";
import BaseLayout from "@/components/BaseLayout";
import Work from "@/components/Work";
import React, { useEffect, useState } from "react";
import { SkillForm } from "@/components/SkillsForm";
import Card from "@/components/Card";
import WorkComponent from "@/components/WorkComponent";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
type Experience = {
  name: string;
  img: string;
  location: string;
  date: string;
  description: string;
};
type Education = {
  name: string;
  img: string;
  location: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    name: "Front-end developer at Google",
    img: "/google.svg",
    location: "London • Google Inc",
    date: "May 2021 - Present",
    description:
      "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.",
  },
  {
    name: "Junior Front-end  Developer at Meta",
    img: "/facebook.svg",
    location: "New York • Meta",
    date: "July 2020 - May 2021",
    description:
      "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. ",
  },
];
const educations: Education[] = [
  {
    name: "Harvard university",
    img: "/harvard.png",
    location: "Cambridge, GA • Bachelor degree, Computer Science(Bsc) ",
    date: "May 2020 - Present",
    description:
      "Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website",
  },
  {
    name: "Mister Bim High School",
    img: "/harvard.png",
    location: "Atlanta, GA",
    date: "September 2016 - 2020",
    description: "",
  },
];
const skillsExample: string[] = [
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
const interests: string[] = [
  "Semantics",
  "Ted Talks",
  "Udemy",
  "Behavioral",
  "Economics",
  "Hiking",
];
const Languages: string[] = ["English", "Mandarin", "Cantonese Chinese"];

const page = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const router = useRouter();
  useEffect(() => {
    const storedSkillsArrayString = localStorage.getItem("skillsArray");
    if (storedSkillsArrayString) {
      const storedSkillsArray = JSON.parse(storedSkillsArrayString);
      setSkills(storedSkillsArray);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("skillsArray", JSON.stringify(skills));
  }, [skills]);
  return (
    <BaseLayout>
      <div className="mt-8">
        <div>
          <div className="flex items-center mt-8 mb-2 justify-between">
            <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8">
              Work Experience
            </h1>
            <WordEducationCard />
          </div>
          {experiences.map((experience, index) => (
            <WorkComponent
              key={index}
              name={experience.name}
              date={experience.date}
              location={experience.location}
              description={experience.description}
              img={experience.img}
            />
          ))}
        </div>
        <div>
          <div className="flex items-center mt-8 mb-2 justify-between">
            <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8">
              Education
            </h1>
            <WordEducationCard />
          </div>
          {educations.map((education, index) => (
            <WorkComponent
              key={index}
              name={education.name}
              date={education.date}
              location={education.location}
              description={education.description}
              img={education.img}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center mt-8 mb-2 justify-between">
          <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8">
            Tech Skills
          </h1>
          <SkillForm />
        </div>
        {skillsExample?.map((skill, index) => (
          <Card key={index} content={skill} />
        ))}
      </div>
      <div>
        <div className="flex items-center mt-8 mb-2 justify-between">
          <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8">
            Interest
          </h1>
          <SkillForm />
        </div>
        {interests.map((skill, index) => (
          <Card key={index} content={skill} />
        ))}
      </div>
      <div>
        <div className="flex items-center mt-8 mb-2 justify-between">
          <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8">
            Languages
          </h1>
          <SkillForm />
        </div>
        {Languages.map((skill, index) => (
          <Card key={index} content={skill} />
        ))}
      </div>
      <Button
        type="submit"
        onClick={() => router.push("/profileportfolio")}
        className="ml-6 mt-8 mb-20"
      >
        Done
      </Button>
    </BaseLayout>
  );
};

export default page;
