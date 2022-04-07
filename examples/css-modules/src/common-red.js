import React from "react";

import styles from "./common-red.css";

export const CommonRed = ({ className, children }) => (
  <div className={`${styles["common-red"]} ${className}`}>{children}</div>
);
