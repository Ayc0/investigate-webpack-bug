import React from "react";

import { CommonRed } from "./common-red";

import styles from "./green.css";

export const Green = () => {
  return <CommonRed className={styles.green}>Should be green</CommonRed>;
};
