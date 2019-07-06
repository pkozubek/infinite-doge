import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const spinner = props => {
  return props.isVisble ? (
    <CircularProgress
      style={{ width: "100%", height: "100%", margin: "0 auto" }}
      color="primary"
    />
  ) : null;
};

export default spinner;
