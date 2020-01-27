import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons"
import {faStopCircle} from '@fortawesome/free-regular-svg-icons'

export const TimerControl = ({ start, reset }) => {
  return (
    <div className="timer-control">
      <button className="btn" id="start_stop" onClick={start}>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button className="btn" id="reset" onClick={reset}>
        <FontAwesomeIcon icon={faStopCircle} />
      </button>
    </div>
  );
};
