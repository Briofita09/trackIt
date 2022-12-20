import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt"; // carregar sob demanda

import AppContext from "../../AppContext/Context";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ProgressBar from "../../Components/CircularProgressBar";
import { CalendarDiv, CalendarCard, CalendarCheckbox } from "./style";
import { HomeContainer, MainContainer } from "../Today/style";
import { HabitsTitle } from "../Habits/style";
import { CardTitle } from "../../Components/Card/style";

export default function Historic() {
  const [date, setDate] = useState(new Date());
  const [habitsList, setHabitsList] = useState();
  const [day, setDay] = useState();
  const [habits, setHabits] = useState();
  const { token } = useContext(AppContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  function setHabitDay(d) {
    console.log(dayjs(d).format("DD/MM/YYYY"));
    const result = habitsList.filter(
      (day) => day.day === dayjs(d).format("DD/MM/YYYY")
    );
    setDay(result);
  }

  useEffect(() => {
    async function fetchHabits() {
      try {
        const res = await axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
          config
        );
        setHabitsList(res.data);
        setHabits(
          res.data.map((h) => {
            return {
              day: h.day,
              completed: h.habits.reduce((a, b) => a && b.done, true),
            };
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchHabits();
  }, []);

  return (
    <MainContainer>
      <HomeContainer>
        <Navbar />
        <HabitsTitle>Histórico</HabitsTitle>
        {!habits && (
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        )}
        {habits && (
          <CalendarDiv>
            <Calendar
              className="calendar"
              onChange={(d) => {
                setDate(d);
                setHabitDay(d);
              }}
              value={date}
              tileClassName={({ date }) =>
                habits.map((habit) => {
                  if (
                    habit.day === dayjs(date).locale("pt").format("DD/MM/YYYY")
                  ) {
                    return habit.completed ? "completed" : "incompleted";
                  }
                })
              }
            />
          </CalendarDiv>
        )}
        {day &&
          day.map((d) => {
            return (
              <>
                <HabitsTitle>{d.day}</HabitsTitle>
                {d.habits.map((habit) => {
                  return (
                    <CalendarCard>
                      <CardTitle>{habit.name}</CardTitle>
                      <CalendarCheckbox type="checkbox" checked={habit.done} />
                    </CalendarCard>
                  );
                })}
              </>
            );
          })}
      </HomeContainer>
      <Footer />
      <ProgressBar />
    </MainContainer>
  );
}
