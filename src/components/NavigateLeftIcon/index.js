import React from "react";
import classes from "../Slider/slider.module.scss";
const NavigateLeftIcon = ({ onClick }) => {
  return (
    <div
      style={{ fontSize: "50px", marginRight: "100px", cursor: "pointer" }}
      onClick={onClick}
      className={classes["navigation-icon"]}
    >
      <i className="fa-solid fa-circle-chevron-left"></i>
    </div>
  );
};

export default NavigateLeftIcon;
