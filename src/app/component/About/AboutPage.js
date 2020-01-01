import React, { Component } from "react";
import "../../css/index.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";
import Footer from "../Utils/Footer";
import AboutContent from "./AboutContent";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className={"about-page-parent-container"}>
          <div className={"about-page-left-container"}></div>
          <div className={"about-page-middle-container"}>
            <AboutContent />
          </div>
          <div className={"about-page-right-container"}>
            <div className={"blog-search-container"}>
              <Search />
            </div>
            <div className={"blog-social-media-container"}>
              <SocialMedia />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AboutPage;
