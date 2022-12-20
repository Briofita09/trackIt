import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  align-self: center;
`;

const Input = styled.input`
  width: 303px;
  height: 45px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  text-align: left;
  margin-top: 10px;
  font-size: 20px;
  line-height: 25px;
  color: #afafaf;
  font-family: Lexend Deca;
  margin-left: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #52b6ff;
  border-radius: 5px;
  width: 310px;
  height: 45px;
  color: #fff;
  font-family: Lexend Deca;
  font-size: 21px;
  line-height: 26px;
  margin-left: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  font-family: Lexend Deca;
  text-decoration: underline;
  color: #52b6ff;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

export { Input, Form, Button, Paragraph, Image };
