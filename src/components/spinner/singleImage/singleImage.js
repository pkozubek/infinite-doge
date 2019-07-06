import React, { Component } from "react";
import Spinner from "../../spinner";
import "./singleImage.css";
import Delete from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/Favorite";

class singleImage extends Component {
  state = {
    isLoaded: false
  };

  render() {
    const imageStyle = this.state.isLoaded
      ? { display: "block" }
      : { display: "none" };

    console.log(this.props.canBeLiked);

    return (
      <div className="singleImageContainer">
        <Spinner isVisble={!this.state.isLoaded} />
        <img
          src={this.props.src}
          style={{ ...imageStyle, width: "100%", height: "100%" }}
          onLoad={() => this.setState({ isLoaded: true })}
        />
        <div
          className="hovered"
          onClick={() => this.props.click(this.props.src)}
        >
          <button className="likeButton">
            {this.props.canBeLiked ? (
              <Favorite fontSize="large" />
            ) : (
              <Delete fontSize="large" />
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default singleImage;
