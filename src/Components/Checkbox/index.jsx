import React from "react";
import { CheckInput } from "./style";

function Checkbox({ select, id, handleCilck }) {
  return (
    <CheckInput
      checked={select}
      type="checkbox"
      id="check"
      name="check"
      onClick={() => handleCilck(id)}
    />
  );
}
export default Checkbox;
