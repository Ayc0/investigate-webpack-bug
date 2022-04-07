import React from "react";
import { css, cx } from "@emotion/css";

import "./mimic-external-dependency.css";

export const CommonRed = ({ className, children }) => (
  <div
    className={cx(
      css`
        color: red;
        font-style: italic;
      `,
      className,
      "external"
    )}
  >
    {children}
  </div>
);
