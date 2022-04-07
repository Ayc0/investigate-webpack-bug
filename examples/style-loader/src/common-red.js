import React from "react";

import "./common-red.css";

export const CommonRed = ({ className, children }) => (
  <div className={`common-red ${className}`}>{children}</div>
);
