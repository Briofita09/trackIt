import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #ebebeb;
  height: 100%;
`;

const HomeContainer = styled.div`
  background-color: #ebebeb;
  min-height: 95vh;
`;

const HabitsText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const HabitsTitle = styled.h1`
  margin-left: 17px;
  font-family: Lexend Deca;
  color: #126ba5;
  font-size: 23px;
  line-height: 29px;
`;

const PlusBtn = styled.button`
  margin-right: 28px;
  width: 40px;
  height: 35px;
  color: #fff;
  background-color: #52b6ff;
  text-align: center;
  font-family: Lexend Deca;
  font-weight: 400;
  font-size: 27px;
  line-height: 33px;
  border: none;
  border-radius: 4.63px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 10px 17px 0px 17px;
  border-radius: 5px;
`;

const HabitContainer = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  background-color: #fff;
  margin: 10px 17px 0px 17px;
  border-radius: 5px;
`;

const ButtonHabitContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  margin-top: 15px;
  margin-right: 16px;
  gap: 25px;
  justify-content: flex-end;
  align-items: baseline;
`;

const SaveBtn = styled.button`
  border: none;
  height: 35px;
  width: 84px;
  color: #fff;
  background-color: #52b6ff;
  border-radius: 4.63px;
`;

const CancelText = styled.p`
  color: #52b6ff;
  font-family: Lexend Deca;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  margin-left: 8px;
`;

const TextInput = styled.input`
  font-family: Lexend Deca;
  color: #666666;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  width: 80%;
  height: 45px;
  margin: 18px 18px 10px 18px;
  ::placeholder {
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
    line-height: 25px;
  }
`;

export {
  MainContainer,
  HomeContainer,
  HabitsText,
  HabitsTitle,
  PlusBtn,
  Container,
  HabitContainer,
  TextContainer,
  TextInput,
  ButtonHabitContainer,
  SaveBtn,
  CancelText,
};
