import React from "react";

export default function TopNavBar({ setIsJobSelected }) {
  return (
    <div className="top-nav-bar">
      <div onClick={() => setIsJobSelected(false)} className="home-button">
        <h3>devjob</h3>
      </div>

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
