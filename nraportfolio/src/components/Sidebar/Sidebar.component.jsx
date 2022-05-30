import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarExternalLink,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About me
          </SidebarLink>
          <SidebarLink to="knowledge" onClick={toggle}>
            Knowledge
          </SidebarLink>
          <SidebarExternalLink
            href="https://www.linkedin.com/in/nicolasalejandroramirez/"
            target="_blank"
            onClick={toggle}
          >
            Contact
          </SidebarExternalLink>
          <SidebarExternalLink
            href="https://github.com/NRAlejandro"
            target="_blank"
            onClick={toggle}
          >
            Projects
          </SidebarExternalLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
