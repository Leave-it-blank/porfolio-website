import React from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full 
    bg-gradient-to-b from-[#b00202]    to-[#270329] text-sky-50 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full 
        px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            id="name_text"
            className="text-4xl sm:text-5xl font-bold  text-sky-50 "
          >
            Hey, I am Mayank... <br /> I am a Full Stack Developer...
          </h2>
          <p className="text-sky-100 opacity-80 py-4 max-w-md text-justify">
            <span className="text-xl font-bold">
              {" "}
              Welcome to my portfolio website!
            </span>{" "}
            <br /> I'm a freelance developer with 2 years of experience,
            specializing in frontend development using React, NextJS, and VueJs.
            I'm also well-versed in backend technologies like Laravel, NodeJS,
            Express, and MySQL. Explore my projects and feel free to reach out
            for inquiries or collaboration opportunities.
          </p>

          <div>
            <a
              href="/resume.pdf"
              download="Mayank's Resume"
              smooth
              duration={500}
              className="group text-sky-100 w-fit px-6 py-3 my-2 flex
                    justify-center
                    hover:scale-105 duration-200
                    hover:shadow-purple-500
                    hover:shadow-md
                    items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={35} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={"https://avatars.githubusercontent.com/u/70465598"}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
