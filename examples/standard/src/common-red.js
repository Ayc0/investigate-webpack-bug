import React from "react";

import "./mimic-external-dependency.css";
import "./common-red.css";

export const CommonRed = ({ className, children }) => (
  <div className={`external common-red ${className}`}>{children}</div>
);
