import { useState, useContext, useEffect } from "react";
import axios from "axios";

import trash from "../../assets/imgs/trash.png";

import ProgressBar from "../../Components/CircularProgressBar";
import Day from "../../Components/Day";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import AppContext from "../../AppContext/Context";

import {
  HomeContainer,
  MainContainer,
  HabitsText,
  HabitsTitle,
  PlusBtn,
  Container,
  HabitContainer,
  ButtonHabitContainer,
  SaveBtn,
  CancelText,
  TextContainer,
  TextInput,
} from "./style";
import { DaysContainer } from "../../Components/Day/style";
import { CardTitle } from "../../Components/Card/style";

export default function Habits() {
  const [clicked, setClicked] = useState(false);
  const [habit, setHabit] = useState("");
  const [days, setDays] = useState([]);
  const [habits, setHabits] = useState();
  const [refresh, setRefresh] = useState(false);
  const weekday = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { token } = useContext(AppContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  useEffect(() => {
    async function fetchHabits() {
      try {
        const response = await axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          config
        );
        setHabits(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchHabits();
  }, [refresh]);

  async function handleDelete(id) {
    try {
      if (window.confirm("Tem certeza que deseja deletar o hábito?")) {
        await axios.delete(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
          config
        );
        setRefresh(!refresh);
      }
    } catch (err) {
      alert("Não foi possível deletar o hábito");
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        { name: habit, days },
        config
      );
      setHabit("");
      setClicked(false);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MainContainer>
      <HomeContainer>
        <Navbar />
        <HabitsText>
          <HabitsTitle>Meus hábitos</HabitsTitle>
          <PlusBtn
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            {!clicked ? "+" : "-"}
          </PlusBtn>
        </HabitsText>
        {clicked && (
          <HabitContainer>
            <div>
              <TextInput
                placeholder="nome do hábito"
                onChange={(e) => setHabit(e.target.value)}
                value={habit}
              />
              <DaysContainer>
                {weekday.map((day, index) => {
                  return (
                    <Day days={days} index={index} setDays={setDays}>
                      {day}
                    </Day>
                  );
                })}
              </DaysContainer>
            </div>
            <ButtonHabitContainer>
              <CancelText onClick={() => setClicked(false)}>
                Cancelar
              </CancelText>
              <SaveBtn onClick={handleSubmit}>Salvar</SaveBtn>
            </ButtonHabitContainer>
          </HabitContainer>
        )}
        <div>
          {!habits && <p>Você ainda não tem nenhum hábito cadastrado</p>}
          {habits &&
            habits.map((habit) => {
              return (
                <Container>
                  <TextContainer>
                    <CardTitle>{habit.name}</CardTitle>
                    <img
                      width={15}
                      height={15}
                      style={{ marginTop: "11px", marginRight: "10px" }}
                      onClick={() => handleDelete(habit.id)}
                      src={trash}
                      alt="trash logo"
                    />
                  </TextContainer>
                  <DaysContainer>
                    {weekday.map((day, index) => {
                      if (habit.days.find((el) => el === index) !== undefined) {
                        return (
                          <Day selected="true" key={index}>
                            {day}
                          </Day>
                        );
                      } else {
                        return <Day>{day}</Day>;
                      }
                    })}
                  </DaysContainer>
                </Container>
              );
            })}
        </div>
      </HomeContainer>
      <Footer />
      <ProgressBar />
    </MainContainer>
  );
}
