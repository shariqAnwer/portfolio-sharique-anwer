import {
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import React from "react";

const Projects = () => {
  return (
    <div id="Contact">
      <h1 className="projectHeading">
        <b>Contact Details</b>
      </h1>
      <div className="contactPage">
        <table>
          <tr>
            <td>
              <BsFillEnvelopeFill />
            </td>
            <td>shariqueanwer002@gmail.com</td>
          </tr>
          <tr>
            <td>
              <BsFillTelephoneFill />
            </td>
            <td>+91 - 8210605730</td>
          </tr>
          <tr>
            <td>
              <BsFillGeoAltFill />
            </td>
            <td>Bengaluru, India</td>
          </tr>
          {/* <tr>
            <div className="footerLinks">
              <a
                href="https://github.com/shariqAnwer"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sharique-anwer/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/sharique_26"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </tr> */}
        </table>
      </div>
      <div className="footerLinks-contact">
        <a
          href="https://github.com/shariqAnwer"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sharique-anwer/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/sharique_26"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Projects;
