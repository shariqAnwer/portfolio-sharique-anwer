import {CgFileDocument} from "react-icons/cg";
import {FaGithub} from "react-icons/fa";
import React from 'react';

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TindogDesc : "An ecommerce website clone developed during the cw project week. Juicy Chemistry is about 100% organic skin care products in India",
    TindogGithub : "https://github.com/shariqAnwer/Juicy-Chemistry-Clone.gitg",
    TindogWebsite : "https://juicy-chemistry-clone.vercel.app/",

    RogFreeDesc : "This website clone was developed during the project week and have used technologies like HTML, CSS, React, Node, Express, MongoDB",
    RogFreeGithub : "https://github.com/shariqAnwer/fitmeals-clone.git",
    RogFreeWebsite : "https://fitmeals-clone-naveen.vercel.app/",

    NewsletterDesc:"This website clone was developed during the cw project week. Both frontend and backend was developed and integrated in the project",
    NewsletterGithub:"https://github.com/shariqAnwer/Reliance-digital-Clone.git",
    NewsletterWebsite:"https://reliance-digital-clone.herokuapp.com/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox