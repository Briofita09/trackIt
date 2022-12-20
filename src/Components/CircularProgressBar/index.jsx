import { React, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext/Context";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "./style";

function ProgressBar() {
  const { progress } = useContext(AppContext);
  return (
    <Progress>
      <Link to="/hoje">
        <CircularProgressbar
          value={progress}
          maxValue={100}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52b6ff",
            textSize: "22px",
            trailColor: "transparent",
            textColor: "#fff",
            pathColor: "#fff",
          })}
        />
      </Link>
    </Progress>
  );
}
export default ProgressBar;
