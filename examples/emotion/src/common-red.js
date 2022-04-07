import React from "react";
import { css, cx } from "@emotion/css";

export const CommonRed = ({ className, children }) => (
  <div
    className={cx(
      css`
        color: red;
        font-style: italic;
      `,
      className
    )}
  >
    {children}
  </div>
);
