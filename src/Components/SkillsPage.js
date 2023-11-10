// import React from "react";
// import Skills from "./Skills.js";

// const SkillsPage = () => {
//   return (
//     <>
//       <div id="Skills">
//         <h1 className="SkillsHeading">Professional Skillset</h1>
//         <div className="skills">
//           <Skills skill="React" />
//           <Skills skill="Node" />
//           <Skills skill="Express" />
//           <Skills skill="MongoDb" />
//           <Skills skill="Git" />
//           <Skills skill="Github" />
//           <Skills skill="Javascript" />
//           <Skills skill="Figma" />
//           <Skills skill="Vercel" />
//           <Skills skill="Npm" />
//           <Skills skill="Bootstrap" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SkillsPage;

import React, { useEffect, useState } from "react";

import CSSImg from "../images/skills/css.png";
import { Container } from "react-bootstrap";
import HashLoader from "react-spinners/HashLoader";
import HtmlImg from "../images/skills/html.png";
import JsImg from "../images/skills/js.png";
import MongoDBImg from "../images/skills/mongo-db.png";
import NodeImg from "../images/skills/nodejs.png";
import PropTypes from "prop-types";
import ReactImg from "../images/skills/react.png";
import ReactMarkdown from "react-markdown";
import TypescriptImg from "../images/skills/typescript.png";
import gitHubImg from "../images/skills/github.png";
import gitImg from "../images/skills/git.png";

// import skills from "../profile/skillsData.json";

// import endpoints from "../constants/endpoints";

// import Header from "./Header";

// import FallbackSpinner from "./FallbackSpinner";

const Skilldata = {
  intro:
    "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
  skills: [
    {
      title: "Languages & Databases",
      items: [
        {
          icon: TypescriptImg,
          title: "TypeScript",
        },
        {
          icon: JsImg,
          title: "JavaScript",
        },
        {
          icon: MongoDBImg,
          title: "MongoDB",
        },
      ],
    },
    {
      title: "Frameworks & Technologies",
      items: [
        {
          icon: HtmlImg,
          title: "HTML",
        },
        {
          icon: CSSImg,
          title: "CSS",
        },
        {
          icon: ReactImg,
          title: "React",
        },
        {
          icon: NodeImg,
          title: "Nodejs",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        {
          icon: gitImg,
          title: "Git",
        },
        {
          icon: gitHubImg,
          title: "Github",
        },
      ],
    },
  ],
};

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: "pre-wrap",
  },
};

function Skills() {
  // const { header } = props;
  const [data, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    // let resData = JSON.stringify(skills);
    setData(Skilldata);
  }, []);
  // console.log("skillsdddd", data);

  return (
    <>
      <div id="Skills" style={{ paddingTop: "1px" }}>
        <div className="headerSkills" style={{ textAlign: "center" }}>
          Skills
        </div>
        {data ? (
          <div className="section-content-container">
            <Container>
              {renderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div
                      key={item.title}
                      style={{ display: "inline-block", marginRight: "12px" }}
                    >
                      <img
                        style={styles.iconStyle}
                        src={item.icon}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        ) : (
          <HashLoader />
        )}
      </div>
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
