import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menue>
        <a href="#">Modal S</a>
        <a href="#">Modal 3</a>
        <a href="#">Modal X</a>
        <a href="#">Modal Y</a>
      </Menue>
      <RightMenue>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenue>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight:600;
    text-transform: uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenue =styled.div`
   a{
    font-weight:600;
    text-transform: uppercase;
    margin-right:10px;
  }
`
