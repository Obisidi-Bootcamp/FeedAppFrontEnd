import React from "react";
import { Spin } from "antd";

import "./loadingIndicator.css";

export default ({ fullPage }) => {
  return (
    <div className={`${fullPage && "center"}`}>
      <Spin size={`${fullPage ? "large" : "small"}`} />
    </div>
  );
};