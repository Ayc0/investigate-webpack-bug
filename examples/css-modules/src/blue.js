import React from "react";

import { CommonRed } from "./common-red";

import styles from "./blue.css";

export const Blue = () => {
  return <CommonRed className={styles.blue}>Should be blue</CommonRed>;
};
