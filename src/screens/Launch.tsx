import React from "react";
import "./style.css";
import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import { APPS_DATA } from "../helpers/inputData";

export const Launch = () => {
  return (
    <div className="launchWrapper">
      <Header />
      <div className="menu">
        {APPS_DATA.map((app) => (
          <Button src={app.logoPath} key={app.name} />
        ))}
      </div>
    </div>
  );
};
