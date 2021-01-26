// import React, { Component } from 'react'

// export default class Timer extends Component {
//     state = {
//         minutes: 1,
//         seconds: 0,
//     }

//     componentDidMount() {
//         this.myInterval = setInterval(() => {
//             const { seconds, minutes } = this.state
//             const { start, setStart } = this.state
            
          

//             if (seconds > 0) {
//                 this.setState(({ seconds }) => ({
//                     seconds: seconds - 1
//                 }))
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(this.myInterval)
//                 } else {
//                     this.setState(({ minutes }) => ({
//                         minutes: minutes - 1,
//                         seconds: 10
//                     }))
//                 }
//             } 
//         }, 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.myInterval)
//     }
//     render() {
//         const { minutes, seconds } = this.state
//         return (
//             <div>      
              
//                 <button onClick={this.handleClick}>Start</button>
//                 <div>
//                 { minutes === 0 && seconds === 0
                
//                     ? <h1>Kuhle</h1>
                    
//                     : <h1>start {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>

                   
//                 }
//                 </div>
//             </div>
            
          
//         )
//     }
// }



// import React from 'react'
// import './App.css';

// function Timer() {
  
//   const [seconds, setSeconds] = React.useState(10);

//   const handleSubmit = event => {
//     event.preventDefault();
//   }

  
//     if (seconds > 0) {
//       setTimeout(() => setSeconds(seconds - 1), 1000);
//     } else {
//       setSeconds('Kuhle!');
//     }
  

//   return (
//     <div className="timer">
//       <div>
//       <form onSubmit={handleSubmit}>
//       <button type='start' >
//           Start
//         </button>
      
//         <h1>{seconds}</h1>
//         </form>
//       </div>
//     </div>
//   );
// }


//     export default Timer

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      seconds:10
    }
    this.secondsInput = React.createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  convertToSeconds = (seconds) => {
    return seconds ;
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const  { seconds } = this.state;
    let c_seconds = this.convertToSeconds(seconds);

    if(c_seconds) {

      // seconds change
      seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 10});

      // minutes change
      if(c_seconds % 60 === 0 && seconds) {
        this.setState({seconds: seconds -1});
      }

    
    } else {
      clearInterval(this.timer);
    }
  }


  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      seconds: 0
    });
    this.secondsInput.current.value = 0;
  }


  render() {
    const { minutes, seconds } = this.state;

    return (
      <div className="App">
         <h1 className="title"> Timer </h1>
         <div className="inputGroup">
           
            <h3>Sec</h3>
            <input   ref={this.secondsInput} type="number"  placeholder={0}  name="seconds"  onChange={this.inputHandler} />
         </div>
         <div>
            <button onClick={this.startTimer} className="start">start</button>
            </div>
         <h1> Timer {seconds} </h1>
      </div>

    );
  }
}

export default App;
