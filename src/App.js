import React from "react"
import './App.css';
// import { interval } from 'rxjs';

// const digital = document.getElementById('digital');
// const source = interval.Observable
//   .interval(100 /* ms */ )
//   .timeInterval();

// let started = false;
// let time = 0; // 1/10 seconds

// const subscribe = source.subscribe(
//   x => {
//     if(!started) return;
//     time++;
//     digital.innerHTML = Math.floor(time / 600) + ":" + Math.floor((time / 10) % 60) + ":" + (time % 10) + "0";
//   });

// interval.Observable.fromEvent(document.getElementById('start'), 'click')
//   .subscribe(e => {
//     started = true;
//   });

// interval.Observable.fromEvent(document.getElementById('stop'), 'click')
//   .subscribe(e => {
//     started = false;
//   });


// interval.Observable.fromEvent(document.getElementById('reset'), 'click')
//   .subscribe(e => {
//     started = false;
//     time = 0;
//     digital.innerHTML = "0:0:00";
//   });

function App() {
const [time, setTime] = React.useState(0)
const [timerOn, setTimeOn] = React.useState(false)

React.useEffect(() => {
  let interval = null;

  if(timerOn) {
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    }, 10)
  } else {
    clearInterval(interval)
  }

  return () => clearInterval(interval)

}, [timerOn])

  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setTimeOn(true)}>Start</button>
        <button onClick={() => setTimeOn(false)}>Stop</button>
        <button onClick={() => setTimeOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>

      {/* <div>
        <h1 id="digital">0:0:00</h1>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
        <button id="reset">Reset</button>
      </div> */}
  
    </div>
  );
}

export default App;
