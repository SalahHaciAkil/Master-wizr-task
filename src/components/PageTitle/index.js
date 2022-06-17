import React from "react";
import classes from "./pageTitle.module.scss";
const PageTitle = ({ title }) => {
  return <h1 className={classes.title}>{title}</h1>;
};

export default PageTitle;
