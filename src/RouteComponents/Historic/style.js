import styled from "styled-components";

export const CalendarDiv = styled.div`
  width: 80%;
  margin-top: 50px;
  margin-left: 40px;
  .completed {
    background-color: #8cc654;
    border-radius: 20px;
  }
  .incompleted {
    background-color: #ea5766;
    border-radius: 20px;
  }
`;

export const CalendarCard = styled.div`
  width: 80%;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const CalendarCheckbox = styled.input`
  width: 30px;
`;
