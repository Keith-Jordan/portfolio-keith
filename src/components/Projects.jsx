import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/property.jpg";
import littleImg from "../assets/little.jpg";
import netflixImg from "../assets/netflix.jpg";
import twitchImg from "../assets/twitch.jpg";



const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                These are a few projects I have and curently working on.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
              <a href="https://keith-jordan.github.io/little/">
              <ProjectItem img={littleImg} title='Resturant App' />
              </a>
              {/*  <ProjectItem img={propertyImg} title='Property App' /> */}
              {/*  <ProjectItem img={netflixImg} title='Netflix App' /> */}
              {/* <ProjectItem img={twitchImg} title='Twitch App' /> */}
            </div>
        </div>
    );
};

export default Projects