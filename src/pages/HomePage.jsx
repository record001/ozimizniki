import React, {useEffect} from "react";
import Hero from "../components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "../components/About";
import Media from "../components/Media";
import Achivemnets from "../components/Achivemnets";

function HomePage() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh();

  },[])

  

  return (
    <main>

      <Hero />
      <span id="about"></span>
      <About />
      <Media />
      <span id="roadMap"></span>
      <Achivemnets />
   
    </main>
  );
}

export default HomePage;
