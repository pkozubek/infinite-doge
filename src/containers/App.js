import React, { Component } from "react";
import Images from "../components/Images";
import "./App.css";
import MenuTab from "../components/menuTab";
import Favourite from "../components/favourite";
import axios from "axios";
import { Waypoint } from "react-waypoint";

const API_URL = "http://shibe.online/api/shibes?count=16";
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  state = {
    currentMenu: "Images",
    favourite: [],
    imageArray: [],
    waypointActivated: false
  };

  componentDidMount() {
    this.loadImages();
  }

  loadImages = () => {
    let localArray = [];
    axios
      .get(CORS_ANYWHERE + API_URL)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          localArray.push(response.data[i]);
        }
        this.setState({
          imageArray: [...this.state.imageArray, ...localArray],
          waypointActivated: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeTab = (event, menu) => {
    this.setState({
      currentMenu: menu
    });
  };

  addToFavourite = image => {
    if (!this.state.favourite.includes(image))
      this.setState({
        favourite: [...this.state.favourite, image]
      });
  };

  removeFromFavourite = image => {
    this.setState({
      favourite: this.state.favourite.filter(favImg => favImg !== image)
    });
  };

  render() {
    let mainDiv = null;

    switch (this.state.currentMenu) {
      case "Images":
        mainDiv = (
          <Images
            imageArray={this.state.imageArray}
            click={image => this.addToFavourite(image)}
          />
        );
        break;
      case "Favourite":
        mainDiv = (
          <Favourite
            images={this.state.favourite}
            click={image => this.removeFromFavourite(image)}
          />
        );
        break;
      default:
        mainDiv = null;
        break;
    }

    return (
      <div className="App">
        <MenuTab
          fullWidth={true}
          currentMenu={this.state.currentMenu}
          changeTab={this.changeTab}
        />
        {mainDiv}
        <Waypoint
          onEnter={() => {
            if (
              this.state.waypointActivated &&
              this.state.currentMenu === "Images"
            ) {
              this.loadImages();
            }
          }}
        >
          <div style={{ display: "block", height: "200px" }} />
        </Waypoint>
      </div>
    );
  }
}

export default App;
