import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import React from "react";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    JuicyChemistryDesc:
      "An ecommerce website clone developed during the cw project week. Juicy Chemistry is about 100% organic skin care products in India",
    JuicyChemistryTech: "Tech: HTML, CSS, JavaScript",
    JuicyChemistryGithub:
      "https://github.com/shariqAnwer/Juicy-Chemistry-Clone.git",
    JuicyChemistryWebsite: "https://juicy-chemistry-clone.vercel.app/",

    FitmealsDesc:
      "This website clone was developed during the project week.The Fitmeals culinary team consists of very passionate and team is well versed in nutrition and our menus are designed by qualified nutrition experts.",
    FitmealsTech: "Tech: HTML, CSS,JavaScript, React, Redux, Node, Express",
    FitmealsGithub: "https://github.com/shariqAnwer/fitmeals-clone.git",
    FitmealsWebsite: "https://fitmeals-clone-naveen.vercel.app/",

    RelianceDesc:
      "This website clone was developed during the cw project week. Both frontend and backend was developed and integrated in the project",
    RelianceTech: "Tech: HTML, CSS,JavaScript, React, Redux, Node, Express",
    RelianceGithub: "https://github.com/shariqAnwer/Reliance-digital-Clone.git",
    RelianceWebsite: "https://reliance-digital-clone.herokuapp.com/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />
        <br />
        {desc[projectName + "Tech"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
