import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #fff;
  border-radius: 5px;
  width: 340px;
  height: 100px;
  margin-top: 10px;
  margin-left: 17px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 8px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h1`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;
`;

const CardSequence = styled.p`
  font-family: Lexend Deca;
  font-size: 13px;
  line-height: 16px;
  color: #666666;
  padding-bottom: 20px;
`;

export { Container, TextContainer, CardTitle, SubTitleContainer, CardSequence };
