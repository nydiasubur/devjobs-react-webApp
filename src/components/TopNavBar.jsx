import React from "react";
import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import useLocalStorage from "use-local-storage";

export default function TopNavBar({ setIsJobSelected }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false);

  return (
    <div className="top-nav-bar">
      <div onClick={() => setIsJobSelected(false)} className="home-button">
        <h3>devjob</h3>
      </div>
      <ToggleThemeButton
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/*
           <img
        src="../src/assets/desktop/bg-pattern-header.svg"
        alt="background pattern header"
        className="img-fluid"
      />
          */}
    </div>
  );
}
