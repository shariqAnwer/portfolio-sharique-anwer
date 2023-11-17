import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { BsCodeSlash, BsEnvelope, BsGear, BsPerson } from "react-icons/bs";
import React, { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { pdfjs } from "react-pdf";

// import pdf from "../Sharique_masai_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);
  const [wid, setwid] = useState(window.innerWidth);
  const handleResize = () => {
    setwid(window.innerWidth);
  };
  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        SA
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <a href="#About">
            <BsPerson /> About
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Skills">
            <BsGear /> Skills
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Project">
            <BsCodeSlash /> Project
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Contact">
            <BsEnvelope /> Contact
          </a>
        </li>
        <li onClick={hideMenu}>
          {/* <Link to="/Resume">
            <CgFileDocument /> Resume
          </Link> */}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1hCzSs_Ke7sIBVJnNChbeJNOlIpELDYM_/view?usp=drive_link"
            download="Sharique Anwer Resume"
            rel="noreferrer"
          >
            {/* <button className="downloadCV" type="button"> */}
            <h4 style={{ fontWeight: "500", fontSize: "22px" }}>
              <BsDownload />
              &nbsp; Resume
            </h4>
            {/* </button> */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
