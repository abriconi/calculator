import { Launch } from "../screens/Launch";
import "./style.css";
import React from "react";
export const Phone = () => {
  return (
    <div className="screen">
      <div className="phoneWrapper">
        <div className="phoneFrame">
          <Launch />
          <div className="buttonsLeftPanel">
            <div className="mute button"></div>
            <div className="volume button"></div>
            <div className="volume button"></div>
          </div>
          <div className="siri button"></div>
        </div>
      </div>
    </div>
  );
};
