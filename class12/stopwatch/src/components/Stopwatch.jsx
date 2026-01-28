import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const startTimeRef = useRef(0);
  const pausedAtRef = useRef(null)
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = Math.floor(time / (1000 * 60));
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const hours = Math.floor(time / (3600 * 1000));
    const getHours = `0${hours}`.slice(-2);
    const milliseconds = `${Math.floor((time % 1000))}`
      .toString()
      .padStart(3, "0");
    return `${getHours} : ${getMinutes} : ${getSeconds} . ${milliseconds}`;
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [time]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  },[])

  const handleVisibilityChange = () => {
    if(document.hidden){
        pausedAtRef.current = Date.now()
    } else if(pausedAtRef.current !== null){
        const pausedDuration = Date.now() - pausedAtRef.current
        startTimeRef.current += pausedDuration
        pausedAtRef.current = null
    }
  }

  return (
    <>
      <div>Stopwatch</div>
      <div className="clock">
        <h1>{formatTime(time)}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
};

export default Stopwatch;
