import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HashLoader from "react-spinners/HashLoader";
import Home from "./Components/Home";
import Lottie from  "lottie-react";
import MoveToTop from "./Components/MoveToTop";
import Nav from './Components/Navbar';
import Project from "./Components/Projects";
import Resume from "./Components/Resume";
import SkillsPage from "./Components/SkillsPage";
import nightsky from "./LottieFiles/night-sky.json";

function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <HashLoader
          color={'#9067C6'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
      <Lottie className="bg" animationData={nightsky} loop={true} />  
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/SkillsPage" element={<SkillsPage/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
