import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

import {GrMail} from "react-icons/gr";
import React from 'react';
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sharique Anwer</h4>
      <h4>Copyright &copy; 2023 SA</h4>
      <div className='footerLinks'>
        <a href="https://github.com/shariqAnwer" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sharique-anwer/" target='_blank'><FaLinkedin/></a>
        {/* <a href='mailTo:shariqueanwer002@gmail.com' target='_blank'><GrMail/></a> */}
        <a href='https://twitter.com/sharique_26' target='_blank'><FaTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer