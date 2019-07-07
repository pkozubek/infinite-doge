import React from "react";
import SingleImage from "./singleImage/singleImage";
import ImageContainer from "./imageContainer";

const favourite = props => {
  return (
    <ImageContainer>
      {props.images.map((singleImage, index) => {
        return (
          <SingleImage key={index} click={props.click} src={singleImage} />
        );
      })}
    </ImageContainer>
  );
};

export default favourite;
