import React from "react";

import "./common.css";

export const Common = ({ className, children }) => (
  <div className={`${className} common`}>{children}</div>
);
