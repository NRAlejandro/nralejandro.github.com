import React from "react";
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoContainer,
  Projectlink,
  Contactlink,
} from "./Navbar.styles";

function Navbar({ toggle }) {
  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer>
          <NavLogo
            href="https://www.linkedin.com/in/nicolasalejandroramirez/"
            target="_blank"
          >
            <FaLinkedin />
          </NavLogo>
          <NavLogo href="https://github.com/NRAlejandro" target="_blank">
            <FaGithubSquare />
          </NavLogo>
        </LogoContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About me
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="knowledge"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Knowledge
            </NavLinks>
          </NavItem>
          <NavItem>
            <Contactlink
              href="https://www.linkedin.com/in/nicolasalejandroramirez/"
              target="_blank"
            >
              Contact
            </Contactlink>
          </NavItem>
          <NavItem>
            <Projectlink href="https://github.com/NRAlejandro" target="_blank">
              Projects
            </Projectlink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
