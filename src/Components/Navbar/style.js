import styled from "styled-components";

const Container = styled.div`
  background-color: #126ba5;

  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Image1 = styled.img`
  width: 97px;
  height: 49px;
  padding-left: 20px;
`;

const Image2 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding-right: 20px;
`;

export { Container, Image1, Image2 };
