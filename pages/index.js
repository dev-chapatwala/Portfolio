import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HappyClient from "../Components/HappyClient";
import Promotion from "../Components/Promotion";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Preloader from "./Preloader";
export default function Home() {

  const [loaded,setLoaded] = useState(true);

  useEffect(()=>{
    setTimeout(()=> setLoaded(false), 7500)
  },[])
  

  return (
    <>
    {/* <Navbar /> */}
    {loaded ? <Preloader /> : <> <Hero />
      <Promotion />
      <HappyClient />
      <About />
      <Contact /> </>}
      
      {/* https://relatablecode.com/how-to-easily-trigger-react-spring-animation-when-in-view */}
      {/* https://ryo-irago.com/ */}
    </>
  );
}
