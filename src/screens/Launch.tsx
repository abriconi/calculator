import React from "react";
import "./style.css";
import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import calculatorLogo from "../../public/img/calculator-logo-min.webp";

export const Launch = () => {
  return (
    <div className="launchWrapper">
      <Header />
      <div className="menu">
        <Button src={calculatorLogo} />
      </div>
    </div>
  );
};
