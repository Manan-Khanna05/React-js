import ClockName from "./components/ClockName";
import BelowText from "./components/BelowText";
import Clock from "./components/Clock";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("blue");
  const [mode, setMode] = useState("dark");
  const [bulbOn, setBulbOn] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", mode === "light");
    document.body.classList.toggle("dark-mode", mode === "dark");
    if (mode === "light") setBulbOn(true); // Force bulb on in light mode
    if (mode === "dark") setBulbOn(false); // Turn bulb off in dark mode
  }, [mode]);

  return (
    <center>
      <div className="theme-bar">
        <button
          className={`theme-btn blue${theme === "blue" ? " selected" : ""}`}
          onClick={() => setTheme("blue")}
          title="Blue theme"></button>
        <button
          className={`theme-btn green${theme === "green" ? " selected" : ""}`}
          onClick={() => setTheme("green")}
          title="Green theme"></button>
        <button
          className={`theme-btn purple${theme === "purple" ? " selected" : ""}`}
          onClick={() => setTheme("purple")}
          title="Purple theme"></button>
        <button
          className="theme-btn"
          style={{
            background: mode === "dark" ? "#222" : "#fff",
            color: mode === "dark" ? "#fff" : "#222",
            border: "2px solid #1fa2ff",
          }}
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          title="Toggle dark/light mode">
          {mode === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
      <div className="bulb-switch-row">
        <div className="bulb-switch-col">
          <label className="bulb-switch">
            <input
              type="checkbox"
              checked={bulbOn}
              onChange={() => setBulbOn((v) => !v)}
              disabled={mode === "light"}
            />
            <span className="slider"></span>
            <span className="lever"></span>
            <span className="glow"></span>
          </label>
        </div>
        <div className="bulb-svg-center right">
          <svg
            className={`svg-bulb ${bulbOn ? "on" : "off"}`}
            width="70"
            height="220"
            viewBox="0 0 70 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="33" y="0" width="4" height="90" rx="2" fill="#222" />
            <ellipse
              cx="35"
              cy="100"
              rx="18"
              ry="18"
              fill={bulbOn ? "#fffbe6" : "#444"}
              filter={bulbOn ? "url(#bulb-glow)" : undefined}
            />
            <ellipse
              cx="35"
              cy="100"
              rx="12"
              ry="12"
              fill={bulbOn ? "#fffde6" : "#222"}
            />
            <rect x="28" y="86" width="14" height="10" rx="4" fill="#222" />
            <ellipse cx="35" cy="96" rx="7" ry="3" fill="#888" opacity=".2" />
            {bulbOn && (
              <g>
                <ellipse
                  cx="35"
                  cy="100"
                  rx="28"
                  ry="28"
                  fill="#fffbe6"
                  opacity="0.18"
                />
                <ellipse
                  cx="35"
                  cy="100"
                  rx="38"
                  ry="38"
                  fill="#fffbe6"
                  opacity="0.08"
                />
              </g>
            )}
            <defs>
              <filter
                id="bulb-glow"
                x="-20"
                y="50"
                width="110"
                height="110"
                filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ClockName></ClockName>
      <div className="BelowText">
        <BelowText></BelowText>
      </div>
      <div
        className={`Clock clock-fade${
          mode === "light" || bulbOn ? " show" : " hide"
        }`}>
        <Clock theme={theme} />
      </div>
    </center>
  );
}

export default App;
