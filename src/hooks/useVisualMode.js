import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, skip) => {
    if (!skip) {
      setHistory(prev => [...prev, mode]);
    }
    setMode(newMode)
  }

  const back = () => {
    if (history.length > 0 ) {
      setMode(history[history.length - 1]);
      setHistory(prev => [...prev.slice(0, -1)]);
    }
  }

  return { mode, transition, back };
}