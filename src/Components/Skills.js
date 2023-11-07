import {DiJavascript1, DiNodejs} from "react-icons/di";
import {FaBootstrap, FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNpm, FaPython, FaReact} from "react-icons/fa";
import {SiExpress, SiMongodb, SiVercel} from "react-icons/si";

import { CgCPlusPlus } from "react-icons/cg";
import React from 'react';

const Skills = ({skill}) => {
    const icon = {
        // 'C++': <CgCPlusPlus/>,
        // Python: <FaPython/>,
        HTML: <FaHtml5/>,
        CSS: <FaCss3/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
