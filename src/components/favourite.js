import React from "react";
import GridList from "@material-ui/core/GridList";
import SingleImage from "./singleImage";

const favourite = props => {
  return (
    <GridList>
      {props.images.map(singleImage => {
        return <SingleImage src={singleImage} />;
      })}
    </GridList>
  );
};

export default favourite;
