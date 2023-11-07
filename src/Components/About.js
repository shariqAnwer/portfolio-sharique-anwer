import Coder from "../LottieFiles/coder.json";
import Lottie from "lottie-react";
import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            A passionate <b>Full Stack Web Developer</b> 🚀 having an experience of
            building Web applications with JavaScript / Reactjs / Redux / Nodejs
            / MongoDB / ExpressJS and some other cool libraries and frameworks.
            I strive to build immersive and beautiful web and mobile
            applications through carefully crafted code and user-centric design.
            Feel free to connect with me, links are in the footer.
            <br />
          
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Python" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
