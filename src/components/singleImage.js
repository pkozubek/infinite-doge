import React, { Component } from "react";
import Spinner from "./spinner/spinner";

class singleImage extends Component {
  state = {
    isLoaded: false
  };

  render() {
    const imageStyle = this.state.isLoaded
      ? { display: "block" }
      : { display: "none" };

    return (
      <div style={{ width: "25%", height: "auto", display: "flex" }}>
        <Spinner isVisble={!this.state.isLoaded} />
        <img
          onClick={() => this.props.click(this.props.src)}
          src={this.props.src}
          style={{ ...imageStyle, width: "100%", height: "100%" }}
          onLoad={() => this.setState({ isLoaded: true })}
        />
      </div>
    );
  }
}

export default singleImage;
