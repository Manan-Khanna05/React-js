import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addition, subtract } from "../store/index.js";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [bump, setBump] = useState(false);
  const prevCounter = useRef(counter);
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    if (prevCounter.current !== counter) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 200);
      prevCounter.current = counter;
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const handleAddition = () => {
    const value = Number(inputValue);
    if (!isNaN(value)) {
      dispatch(addition(value));
    }
  };

  const handleSubtract = () => {
    const value = Number(inputValue);
    if (!isNaN(value)) {
      dispatch(subtract(value));
    }
  };

  return (
    <div className="counter-container">
      <h2>
        Counter:{" "}
        <span className={`counter-animate${bump ? " bump" : ""}`}>
          {counter}
        </span>
      </h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: "80px", marginRight: "8px" }}
        />
        <button className="btn btn-success mx-1" onClick={handleAddition}>
          Add
        </button>
        <button className="btn btn-warning mx-1" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Counter;
