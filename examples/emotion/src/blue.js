import React from "react";
import { css } from "@emotion/css";

import { CommonRed } from "./common-red";

export const Blue = () => {
  return (
    <CommonRed
      className={css`
        color: blue;
      `}
    >
      Should be blue
    </CommonRed>
  );
};
