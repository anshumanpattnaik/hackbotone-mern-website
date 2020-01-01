import React, { Component } from "react";
import "../../css/index.css";
import HackbotOne from "../../icons/app_logo.png";

class NavBar extends Component {
  render() {
    return (
      <div className={"header-div-container"}>
        <div></div>
        <div>
          <a href="/">
            <img src={HackbotOne} className={"app-logo"} />
          </a>
        </div>
      </div>
    );
  }
}
export default NavBar;
