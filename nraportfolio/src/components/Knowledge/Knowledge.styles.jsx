import styled from "styled-components";

export const KnowledgeContainer = styled.div`
  height: 890px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: fit-content;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const KnowledgeH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 699px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const KnowledgeH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const KnowledgeWrapper = styled.div`
  //max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`;

export const KnowledgeCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const KnowledgeIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 1300px) {
    height: 100px;
    width: 100px;
  }
`;
