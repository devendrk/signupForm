import React from 'react';

import MappleLogo from "../../images/logo100x100.png";

const Logo = () => {
    return (
        <div className="titles">
        <div className="title_main">
          <div className="logo">
            <img src={MappleLogo} alt="mapple logo" />
          </div>
          <div className="title_main_text">MAPPLE</div>
          <div className="title_sub">Analyst</div>
        </div>
      </div>
    );
}

export default Logo;
