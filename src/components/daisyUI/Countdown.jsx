// function Countdown (){
//     return(<>
//     <div className="grid grid-flow-col gap-5 text-center auto-cols-max countdowncontainer">
//   <div className="flex flex-col">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":15}}></span>
//     </span>
//     days
//   </div>
//   <div className="flex flex-col">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":10}}></span>
//     </span>
//     hours
//   </div>
//   <div className="flex flex-col">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":24}}></span>
//     </span>
//     min
//   </div>
//   <div className="flex flex-col">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":50}}></span>
//     </span>
//     sec
//   </div>
// </div></>)
// }

// export default Countdown;

// import { useState, useEffect } from "react";

// function Countdown() {
//   const calculateTimeLeft = () => {
//     const eventDate = new Date("March 6, 2025 10:00:00").getTime();
//     const now = new Date().getTime();
//     const difference = eventDate - now;

//     return difference > 0
//       ? {
//           Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           Minutes: Math.floor((difference / 1000 / 60) % 60),
//           Seconds: Math.floor((difference / 1000) % 60),
//         }
//       : { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="countdown-container">
//       {Object.entries(timeLeft).map(([unit, value]) => (
//         <div key={unit} className="time-box">
//           <span className="time-value">{value}</span>
//           <span className="time-label">{unit}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Countdown;

/*
import { useState, useEffect } from "react";

function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("March 6, 2025 10:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    return difference > 0
      ? {
          Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Minutes: Math.floor((difference / 1000 / 60) % 60),
          Seconds: Math.floor((difference / 1000) % 60),
        }
      : { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrapper">
      <h2 className="countdown-title">Starts In</h2>
      <div className="countdown-container">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-box">
            <div className="time-value animate">
              {value}
            </div>
            <span className="time-label">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown;
*/

import { useState, useEffect } from 'react';
import './countdown.css';

function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('March 6, 2025 10:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    return difference > 0
      ? {
          Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          Minutes: Math.floor((difference / 1000 / 60) % 60),
          Seconds: Math.floor((difference / 1000) % 60),
        }
      : { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTimeLeft(timeLeft);
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-wrapper">
      <h2 className="countdown-title"> starts in</h2>
      <div className="countdown-container">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-box">
            <div className="time-flip">
              <span key={value} className="time-value animate-change">
                {value}
              </span>
            </div>
            <span className="time-label">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown;
