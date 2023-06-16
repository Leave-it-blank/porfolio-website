import React from "react";
import html5 from "../assets/tools/html5.png";
import css from "../assets/SVG files/CSS.svg.png";
import javascript from "../assets/SVG files/javascript.svg";
import react from "../assets/SVG files/react.svg";
import tailwind from "../assets/SVG files/tailwind.svg";
import github from "../assets/SVG files/github.svg";
import unity from "../assets/tools/unity.png";
import blender from "../assets/SVG files/blender.svg";
import figma from "../assets/SVG files/figma.svg";
import android from "../assets/SVG files/android.svg";

import nextjs from "../assets/tools/unity.png";
import python from "../assets/tools/unity.png";

const Experience = () => {
  const tools = [
    {
      id: 1,
      src: html5,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-700",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: figma,
      title: "VueJs",
      style: "shadow-lime-500",
    },
    {
      id: 10,
      src: android,
      title: "Express Js",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: android,
      title: "Laravel",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: android,
      title: "Docker",
      style: "shadow-green-500",
    },
    {
      id: 13,
      src: android,
      title: "Python",
      style: "shadow-green-500",
    },
    {
      id: 14,
      src: android,
      title: "Flask",
      style: "shadow-green-500",
    },
    {
      id: 15,
      src: android,
      title: "Redis",
      style: "shadow-green-500",
    },
    {
      id: 16,
      src: android,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 17,
      src: android,
      title: "Java",
      style: "shadow-green-500 ",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-[#b00202]    to-[#270329] text-sky-50 
     w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {" "}
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:shadow-white ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
