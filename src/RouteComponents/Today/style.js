import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #ebebeb;
  height: 100%;
`;

const HomeContainer = styled.div`
  background-color: #ebebeb;
  min-height: 95vh;
`;

const Day = styled.h1`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: #126ba5;
  margin-bottom: 0px;
  margin-left: 15px;
`;

const HabitPercentage = styled.h2`
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #bababa;

  margin-top: 0px;
  margin-left: 15px;
  margin-bottom: 28px;
`;

export { MainContainer, HomeContainer, Day, HabitPercentage };
