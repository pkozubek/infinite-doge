import React, { Component } from "react";
import SingleImage from "./singleImage";
import GridList from "@material-ui/core/GridList";

class ImagesContainer extends Component {
  render() {
    const images = this.props.imageArray.map((singleImage, index) => (
      <SingleImage click={this.props.click} key={index} src={singleImage} />
    ));

    return <GridList cols="4">{images}</GridList>;
  }
}

export default ImagesContainer;
