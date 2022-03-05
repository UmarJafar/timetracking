import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class StartBtn extends React.Component {
  render() {
    return <button className="tbtn">Start</button>;
  }
}

class StopBtn extends React.Component {
  render() {
    return <button className="tbtn">Stop</button>;
  }
}

class TScreen extends React.Component {
  render() {
    return (
      <div>
        <p>1223</p>
      </div>
    );
  }
}

class TimeTracker extends React.Component {
  render() {
    return (
      <div className="timeapp">
        <StartBtn />
        <TScreen />
        <StopBtn />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<TimeTracker />, document.getElementById("root"));
