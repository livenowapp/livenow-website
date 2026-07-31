"use client";

import { useEffect, useState } from "react";
import { AppHeader, StatusBar } from "@/components/AppChrome";

function MiniTabs() {
  return (
    <div className="tabs">
      <span className="on">
        ⌂
        <small>home</small>
      </span>

      <span>
        ✦
        <small>moments</small>
      </span>

      <span>
        ▥
        <small>insights</small>
      </span>

      <span>
        ♙
        <small>profile</small>
      </span>
    </div>
  );
}

export default function HomeScreen() {
  const messages = [
    "today can be simpler\nthan your mind says",
    "not every thought\ndeserves your attention",
    "come back to\nwhat is real",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="app homeApp">
      <StatusBar />
      <AppHeader />

      <div className="homeTitle">
        <b>get out of</b>
        <strong>your head</strong>
      </div>

      <button className="resetOrb" type="button">
        <span>RESET</span>
        <small>clear your mind</small>
      </button>

      <p className="homeMessage">
        {messages[messageIndex].split("\n").map((line, index) => (
          <span key={`${line}-${index}`}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <MiniTabs />
    </div>
  );
}