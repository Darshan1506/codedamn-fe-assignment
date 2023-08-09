import React, { useEffect, useState } from "react";
import BaseLayout from "./BaseLayout";
import { WordEducationCard } from "./WordEducationCard";
import Work from "./Work";
import { SkillForm } from "./SkillsForm";
import Card from "./Card";
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
const interests: string[] = [
  "Semantics",
  "Ted Talks",
  "Udemy",
  "Behavioral",
  "Economics",
  "Hiking",
];
const Languages: string[] = ["English", "Mandarin", "Cantonese Chinese"];
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
const ResumeComponent = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedDataString = localStorage.getItem("profileValues");
    if (storedDataString) {
      const storedData: UserData = JSON.parse(storedDataString);
      setUserData(storedData);
    }
  }, []);
  return (
    <div>
      <div>
        <div>
          <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8">
            About
          </h1>
          <div className="m-0 block max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="pb-4">{userData?.about}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center mt-8 mb-2 justify-between">
            <div>
              <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8 ">
                Work Experience
              </h1>
            </div>
          </div>
          {experiences.map((experience, index) => (
            <Work
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
          </div>
          {educations.map((education, index) => (
            <Work
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
        </div>
        {skills.map((skill, index) => (
          <Card key={index} content={skill} />
        ))}
      </div>
      <div>
        <div className="flex items-center mt-8 mb-2 justify-between">
          <h1 className="text-zink-900 font-bold font-inter text-2xl leading-8">
            Interest
          </h1>
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
        </div>
        {Languages.map((skill, index) => (
          <Card key={index} content={skill} />
        ))}
      </div>
    </div>
  );
};

export default ResumeComponent;
