import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryThreeQuarters, faSignal, faWifi } from "@fortawesome/free-solid-svg-icons";
import { LiveClock } from "../LiveClock/LiveClock";
import { CameraIsland } from "../CameraIsland/CameraIsland";
export const Launch = () => {
  return (
    <div className="launchWrapper">
      <div className="header">
        <LiveClock />
        <CameraIsland />
        <div className="net">
          <FontAwesomeIcon icon={faSignal} color="white" size="sm"/>
          <FontAwesomeIcon icon={faWifi} color="white" size="sm"/>
          <FontAwesomeIcon icon={faBatteryThreeQuarters} color="white" size="sm"/>
        </div>
      </div>
    </div>
  );
};
