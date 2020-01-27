import React from "react";

export const Timer = ({ mode, time }) => {
  let minutes = Math.floor(time / 60000);
  let seconds = ((time % 60000) / 1000).toFixed(0);
  return (
    <div className="timer column">
      <p id="timer-label">{mode}</p>
      <p id="time-left">
        {minutes + ":" + (seconds < 10 ? "0" : "") + seconds}
      </p>
    </div>
  );
};
