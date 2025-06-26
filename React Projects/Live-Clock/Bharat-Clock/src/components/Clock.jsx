import { useState, useEffect } from "react";
import "./Clock.css";

function pad(num) {
  return num.toString().padStart(2, "0");
}

function FlipDigit({ value }) {
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setFlipping(false);
        setPrev(value);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [value, prev]);

  if (!flipping) {
    return (
      <span className="flip-digit">
        <span className="flip-digit-half top">
          <span className="flip-digit-top-static">{value}</span>
        </span>
        <span className="flip-digit-half bottom">
          <span className="flip-digit-bottom-static">{value}</span>
        </span>
      </span>
    );
  }

  return (
    <span className="flip-digit flipping">
      <span className="flip-digit-top flipping-top">{prev}</span>
      <span className="flip-digit-bottom flipping-bottom">{value}</span>
    </span>
  );
}

function Clock({ theme = "blue" }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const timeStr = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="live-clock-container">
      <div className={`digital-clock flipping-style theme-${theme}`}>
        {timeStr.split("").map((char, i) =>
          char === ":" ? (
            <span key={i} className="colon">
              :
            </span>
          ) : (
            <FlipDigit key={i} value={char} />
          )
        )}
      </div>
    </div>
  );
}

export default Clock;
