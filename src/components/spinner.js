import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const spinner = props => {
  return props.isVisble ? (
    <CircularProgress
      style={{
        width: "30%",
        height: "100%",
        position: "relative",
        left: "40%",
        top: "50%"
      }}
      color="primary"
    />
  ) : null;
};

export default spinner;
