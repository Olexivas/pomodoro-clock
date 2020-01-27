import React, { Component } from "react";
import { Header } from "./Header";
import { LengthControl } from "./LengthControl";
import { Timer } from "./Timer";
import { TimerControl } from "./TimerControl";

import accurateInterval from "accurate-interval";

import './App.scss'


export class App extends Component {
  state = {
    session: 25,
    break: 5,
    currentMode: "session",
    currentTime: 25 * 60 * 1000,
    isClicked: false,
    isPause: false
  };

  componentDidUpdate() {
    if (this.state.currentTime === 0 && this.state.currentMode === "session") {
      this.setState({
        currentTime: this.state.break * 60 * 1000,
        currentMode: "break"
      });
      this.audioRef.play();
    }
    if (this.state.currentTime === 0 && this.state.currentMode === "break") {
      this.setState({
        currentTime: this.state.session * 60 * 1000,
        currentMode: "session"
      });
      this.audioRef.play();
    }
  }

  startHandler = () => {
    if (!this.state.isPause) {
      if (!this.state.isClicked) {
        this.setState({
          currentTime:
            this.state.currentMode === "session"
              ? this.state.session * 60000
              : this.state.break * 60000,
          isClicked: true
        });
      }
      this.countdown = accurateInterval(() => {
        this.setState({
          currentTime: this.state.currentTime - 1000,
          isPause: true
        });
      }, 1000);

    
    } else {
      this.countdown.clear();
      this.setState({
        isPause: false
      });
    }
  };

  resetHandler = () => {
    this.audioRef.pause();
    this.audioRef.currentTime = 0;
    this.countdown.clear();
    this.setState({
      session: 25,
      break: 5,
      currentMode: "session",
      currentTime: 25 * 60 * 1000,
      isClicked: false,
      isPause: false
    });
  };

  lengthHandler = (type, mode) => {
    switch (mode) {
      case "session":
        if (type === "inc" && this.state.session < 60) {
          this.setState({
            session: this.state.session + 1
          });
        } else if (type === "dec" && this.state.session > 1) {
          this.setState({
            session: this.state.session - 1
          });
        }
        break;
      default:
        if (type === "inc" && this.state.break < 60) {
          this.setState({
            break: this.state.break + 1
          });
        } else if (type === "dec" && this.state.break > 1) {
          this.setState({
            break: this.state.break - 1
          });
        }
        break;
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <LengthControl
          handleClick={this.lengthHandler}
          mode="session"
          time={this.state.session}
        />
        <LengthControl
          handleClick={this.lengthHandler}
          mode="break"
          time={this.state.break}
        />
        <Timer
          mode={this.state.currentMode}
          time={this.state.currentTime}
        />
        <TimerControl start={this.startHandler} reset={this.resetHandler} />

        <audio
          ref={input => (this.audioRef = input)}
          id="beep"
          preload="auto"
          src="https://goo.gl/65cBl1"
        ></audio>
      </div>
    );
  }
}

export default App;
