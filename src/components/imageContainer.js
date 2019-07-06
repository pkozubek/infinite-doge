import React from "react";

const imageContainer = props => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {props.children}
    </div>
  );
};

export default imageContainer;
