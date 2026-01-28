import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {
  const [count, setCount] = useState(0);
  const [format, setFormat] = useState("");

  useEffect(() => {
    setInterval(() => {
      setCount((prevValue) => prevValue + 1);
    }, 1000);
  }, []);

  const getDate = () => {
    let result = "";
    const date = new Date();
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if (format === "24H") {
      //24 hour format
      result = `${hour.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
      return result;
    } else {
        const ampm = hour > 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        result = `${hour.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} ${ampm}`
        return result
    }
  };
  return (
    <>
      <div>Digital Clock using locale time string</div>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <div>Digital Clock using calculation</div>
      <button onClick={() => setFormat("24H")}>24-Hour Format</button>
      <button onClick={() => setFormat("12H")}>12-Hour Format</button>
      <h1>{getDate()}</h1>
    </>
  );
};

export default DigitalClock;
