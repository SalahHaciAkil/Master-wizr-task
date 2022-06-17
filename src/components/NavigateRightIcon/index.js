import React from "react";
import classes from "../Slider/slider.module.scss";
const NavigateRightIcon = ({ onClick }) => {
  return (
    <div
      style={{ fontSize: "50px", marginLeft: "100px", cursor: "pointer" }}
      onClick={onClick}
      className={classes["navigation-icon"]}
    >
      <i className="fa-solid fa-circle-chevron-right"></i>
    </div>
  );
};

export default NavigateRightIcon;
