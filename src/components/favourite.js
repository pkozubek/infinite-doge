import React from "react";
import SingleImage from "./spinner/singleImage/singleImage";
import ImageContainer from "./imageContainer";

const favourite = props => {
  return (
    <ImageContainer>
      {props.images.map(singleImage => {
        return <SingleImage click={props.click} src={singleImage} />;
      })}
    </ImageContainer>
  );
};

export default favourite;
