import React from "react";

import "./mimic-external-dependency.css";
import styles from "./common-red.css";

export const CommonRed = ({ className, children }) => (
  <div className={`external ${styles["common-red"]} ${className}`}>
    {children}
  </div>
);
