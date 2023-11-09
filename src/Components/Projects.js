import ProjectBox from "./ProjectBox";
import React from "react";
import fitmeals from "../images/fitmeals.PNG";
import jc from "../images/JC.png";
import reliance from "../images/Reliance.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={jc} projectName="JuicyChemistry" />
        <ProjectBox projectPhoto={fitmeals} projectName="Fitmeals" />
        <ProjectBox projectPhoto={reliance} projectName="Reliance" />
      </div>
    </div>
  );
};

export default Projects;
