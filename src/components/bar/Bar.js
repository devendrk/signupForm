import React from "react";

import Logo from "../logo";

import "./Bar.css";

const Bar = ({ children }) => (
  <div className="bar">
    <div className="title-container">
      <Logo />
      <div />
      {children}
    </div>
  </div>
);

export default Bar;
