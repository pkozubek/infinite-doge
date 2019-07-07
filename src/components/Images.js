import React, { Component } from "react";
import SingleImage from "./singleImage/singleImage";
import ImageContainer from "./imageContainer";

class Images extends Component {
  render() {
    const images = this.props.imageArray.map((singleImage, index) => (
      <SingleImage
        canBeLiked
        click={this.props.click}
        key={index}
        src={singleImage}
      />
    ));

    return <ImageContainer>{images}</ImageContainer>;
  }
}

export default Images;
