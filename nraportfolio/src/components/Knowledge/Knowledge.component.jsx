import React from "react";
import ReactIcon from "../../images/react-icon.svg";
import JavascriptIcon from "../../images/javascript-icon.svg";
import HtmlIcon from "../../images/html-icon.svg";
import CssIcon from "../../images/css-icon.svg";
import ExpressIcon from "../../images/expressjs-icon.svg";
import NodeIcon from "../../images/node-icon.svg";
import JestIcon from "../../images/jest-icon.svg";
import ReduxIcon from "../../images/redux-icon.svg";
import MongoIcon from "../../images/mongodb-icon.svg";
import SqlIcon from "../../images/sql-icon.svg";

import {
  KnowledgeContainer,
  KnowledgeH1,
  KnowledgeH2,
  KnowledgeWrapper,
  KnowledgeCard,
  KnowledgeIcon,
} from "./Knowledge.styles";

const Knowledge = () => {
  return (
    <KnowledgeContainer id="knowledge">
      <KnowledgeH1>Current Knowledge</KnowledgeH1>
      <KnowledgeH2>More on CV or LinkedIn</KnowledgeH2>
      <KnowledgeWrapper>
        <KnowledgeCard>
          <KnowledgeIcon src={ReactIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={ReduxIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={JavascriptIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={HtmlIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={CssIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={JestIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={NodeIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={ExpressIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={MongoIcon} />
        </KnowledgeCard>
        <KnowledgeCard>
          <KnowledgeIcon src={SqlIcon} />
        </KnowledgeCard>
      </KnowledgeWrapper>
    </KnowledgeContainer>
  );
};

export default Knowledge;
