import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=cold-snow-dawn-618833.jpg&fm=jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/35">
        <div className="mx-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Keith Jordan
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front End Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
                "Student",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/keith-jordan-a98114275"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/Keith-Jordan" // Update with your GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
