import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt"; // carregar sob demanda

import AppContext from "../../AppContext/Context";
import Navbar from "../../Components/Navbar";
import Card from "../../Components/Card/";
import { MainContainer, HomeContainer, Day, HabitPercentage } from "./style";
import Footer from "../../Components/Footer";
import ProgressBar from "../../Components/CircularProgressBar";

function Today() {
  const [habits, setHabits] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { setProgress } = useContext(AppContext);
  const { token } = useContext(AppContext);

  function habitsPercentage() {
    let count = 0;
    habits.map((habit) => habit.done && count++);
    const result = (count / habits.length) * 100;
    setProgress(result.toFixed(2));
    return result.toFixed(2);
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };
  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        config
      )
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);
  return (
    <MainContainer>
      <HomeContainer>
        <Navbar />
        <div>
          <Day>
            {dayjs().locale("pt").format("dddd").replace("-feira", "")},{" "}
            {dayjs().format("DD/MM")}
          </Day>
          {!habits && (
            <>
              <HabitPercentage>Nenhum hábito concluido ainda</HabitPercentage>
              <HabitPercentage>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear
              </HabitPercentage>
            </>
          )}
          {habits && (
            <>
              <HabitPercentage>
                Você concluiu {habitsPercentage()}% habitos
              </HabitPercentage>
              {habits.map((habit) => {
                return (
                  <Card
                    key={habit.id}
                    id={habit.id}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    done={habit.done}
                    title={habit.name}
                    sequence={habit.currentSequence}
                    record={habit.highestSequence}
                  />
                );
              })}
            </>
          )}
        </div>
      </HomeContainer>
      <Footer />
      <ProgressBar />
    </MainContainer>
  );
}

export default Today;
