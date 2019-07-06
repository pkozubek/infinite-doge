import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const menuTab = props => {
  return (
    <AppBar position="sticky">
      <Tabs centered value={props.currentMenu} onChange={props.changeTab}>
        <Tab value="Images" label="Images" />
        <Tab value="Favourite" label="Favourite" />
      </Tabs>
    </AppBar>
  );
};

export default menuTab;
