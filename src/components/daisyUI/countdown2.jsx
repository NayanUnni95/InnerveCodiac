import { useState, useEffect } from "react";
import './countdown2.css'

function Countdown2() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("March 8, 2025 08:00:00").getTime();
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
      {/*<h2 className="countdown-title"> starts in</h2>*/}
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

export default Countdown2;