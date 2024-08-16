import React from "react";
import "./style.css";
import { faSignal, faWifi, faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CameraIsland } from "../CameraIsland/CameraIsland";
import { LiveClock } from "../LiveClock/LiveClock";
export const Header = () => {
  return (
    <div className="header">
      <LiveClock />
      <CameraIsland />
      <div className="net">
        <FontAwesomeIcon icon={faSignal} color="white" size="sm" />
        <FontAwesomeIcon icon={faWifi} color="white" size="sm" />
        <FontAwesomeIcon icon={faBatteryThreeQuarters} color="white" size="sm" />
      </div>
    </div>
  );
};
