import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import {GrMail} from "react-icons/gr";
import Lottie from "lottie-react";
import React from "react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Tilt from "react-parallax-tilt";
import Typed from "./Typed.js";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>SHARIQUE ANWER</b>
          </h1>
          <Typed />
       
        <div className='footerLinks'>
        <a href="https://github.com/shariqAnwer" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sharique-anwer/" target='_blank'><FaLinkedin/></a>
        <a href='https://twitter.com/sharique_26' target='_blank'><FaTwitter/></a>

      </div>
       
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>Introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am a working professional and fluent in <b>
              JavaScript
            </b>{" "}
            and am working on projects in <b>MERN</b> stack.
            <br />I'm also learning <b>Next.js</b>, <b>Three.js</b> and in the
            near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
        
      </div>
    </div>
  );
};

export default Home;
