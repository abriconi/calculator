import React, { useEffect, useState } from "react";
import "./style.css";
export const LiveClock = () => {
  const getTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const [ctime, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);
    setTime(getTime());
    return () => clearInterval(intervalId);
  }, []);
  return <p className="clock">{ctime}</p>;
};
