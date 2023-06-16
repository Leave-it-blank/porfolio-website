import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#b00202]    to-[#270329] text-sky-50 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500s">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a passionate and dedicated individual with a strong background in
          web development and a particular focus on ReactJS and full stack
          development. With a [Degree/Major] from [Institution], I have gained a
          solid foundation in programming principles and software development
          practices. Through personal projects, I have actively applied my
          knowledge, exploring various technologies and assuming key roles in
          project delivery. My proficiency extends beyond ReactJS, encompassing
          other programming languages and frameworks. I am a driven and
          enthusiastic team player, eager to contribute my skills and make a
          positive impact. With a commitment to continuous learning and staying
          up-to-date with industry trends, I am excited to embark on new
          challenges and opportunities.
        </p>

        <br />

        <p className="text-xl">
          In addition to my technical expertise, I possess strong
          problem-solving abilities and a keen eye for detail. I thrive in
          dynamic and collaborative environments, where I can contribute
          innovative ideas and work alongside diverse teams. With excellent
          communication skills and a passion for delivering high-quality
          results, I approach each project with a growth mindset and a
          determination to exceed expectations. I am constantly seeking new
          opportunities to expand my skill set and contribute to meaningful
          projects that make a difference. Overall, I bring a combination of
          technical proficiency, a strong work ethic, and a genuine enthusiasm
          for creating impactful solutions to every endeavor I undertake.
        </p>
      </div>
    </div>
  );
};

export default About;
