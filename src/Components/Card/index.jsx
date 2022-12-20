import React, { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../../AppContext/Context";
import Checkbox from "../Checkbox";
import {
  Container,
  CardTitle,
  CardSequence,
  TextContainer,
  SubTitleContainer,
} from "./style";

export default function Card({
  done,
  title,
  sequence,
  record,
  id,
  refresh,
  setRefresh,
}) {
  const [select, setSelect] = useState(done);
  const { token } = useContext(AppContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  async function handleClick(id) {
    try {
      if (done) {
        await axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
          {},
          config
        );
        setRefresh(!refresh);
        setSelect(!done);
      } else {
        await axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
          {},
          config
        );
        setRefresh(!refresh);
        setSelect(!done);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <SubTitleContainer>
          <CardSequence>
            Sequencia Atual: {sequence}
            <br />
            Seu Record: {record}
          </CardSequence>
        </SubTitleContainer>
      </TextContainer>
      <Checkbox handleCilck={handleClick} id={id} select={select} />
    </Container>
  );
}
