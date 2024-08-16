import React from "react";
import "./styles.css";
interface Props {
  src: string;
}
export const Button: React.FC<Props> = ({ src }) => {
  return (
    <button className="buttonImageWrapper">
      <img src={src} className="buttonImage" alt="Calculator Logo" />
      <div className="overlay"></div>
    </button>
  );
};
