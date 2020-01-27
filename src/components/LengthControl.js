import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'

export const LengthControl = ({ mode, time, handleClick }) => {
  return (
    <div className="length-control column">
      <p className="center label" id={`${mode}-label`}>
        {mode} length
      </p>
      <div className="center">
        <button
          className="btn"
          id={`${mode}-increment`}
          onClick={() => handleClick("inc", mode)}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p id={`${mode}-length`}>{time}</p>
        <button
          className="btn"
          id={`${mode}-decrement`}
          onClick={() => handleClick("dec", mode)}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
};
