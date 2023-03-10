import React from "react";
import styled from "styled-components";

function Section(props) {
  return (
    <Wrap bgimg={props.backgroundimg}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftbuttontext}</LeftButton>
          {props.rightbuttontext && (
            <RightButton>{props.rightbuttontext}</RightButton>
          )}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-image: url("/images/model-s.jpg"); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgimg}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  opacity: 0.85;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled.div`
  background-color: #fff;
  height: 40px;
  width: 256px;
  color: #000000;
  display: flex;
  justify-content: center;
  opacity: 0.65;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  margin: 8px;
`;

const DownArrow = styled.img`
  height: 40px;
  padding-left: 245px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  @media (max-width: 768px) {
    padding-left: 120px;
  }
`;

const Buttons = styled.div``;
