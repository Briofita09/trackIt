import { useState } from "react";

import { DayButton, DaySelected } from "./style";

export default function Day({ children, days, setDays, index, selected }) {
  const [clicked, setClicked] = useState(false);
  function disclick(day) {
    const result = days.filter((d) => d !== day);
    setDays(result);
    setClicked(false);
  }
  function selectDay(index) {
    setDays([...days, index]);
    setClicked(true);
  }
  return (
    <>
      {!clicked && !selected && (
        <DayButton type="button" onClick={() => selectDay(index)}>
          {children}
        </DayButton>
      )}
      {(clicked || selected) && (
        <DaySelected type="button" onClick={() => disclick(index)}>
          {children}
        </DaySelected>
      )}
    </>
  );
}
