import React, { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar.component";
import Navbar from "../components/Navbar/Navbar.component";
import AboutMe from "../components/AboutMeSection/AboutMe.component";
import DynamicSection from "../components/DynamicSection/DynamicSection.component";
import { AboutMeObj } from "../components/DynamicSection/Data";
import Knowledge from "../components/Knowledge/Knowledge.component";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutMe />
      <DynamicSection {...AboutMeObj} />
      <Knowledge />
    </>
  );
};

export default Home;
