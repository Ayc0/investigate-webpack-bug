import React from "react";
import { css } from "@emotion/css";

import { CommonRed } from "./common-red";

export const Green = () => {
  return (
    <CommonRed
      className={css`
        color: green;
      `}
    >
      Should be green
    </CommonRed>
  );
};
