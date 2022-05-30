import React, { useState } from "react";

import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutP,
  AboutBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./AboutMe.styles";

import { Button } from "../Button/Button.styles";

import Video from "../../videos/video.mp4";
// Video by Juan Manuel Ferraro from Pexels
const AboutMe = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <AboutContainer id="home">
      <AboutBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </AboutBg>
      <AboutContent>
        <AboutH1>Nicolas Alejandro Ramirez</AboutH1>
        <AboutP>Jr Developer</AboutP>
        <AboutBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </AboutBtnWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutMe;
