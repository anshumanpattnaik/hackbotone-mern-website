import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className={"about-container"}>
        <div className={"about-me-container"}>
          <span className={"about-label"}>About</span>
        </div>
        <div className={"about-profile-container"}>
          <div className={"about-profile-pic-container"}>
            <a href={`/about`}>
              <img
                src="https://assets.hackbotone.com/images/icons/anshuman_pattnaik.jpg"
                className={"about-profile-pic"}
              />
            </a>
          </div>
          <div className={"about-profile-details-container"}>
            <div className={"about-profile-name-div"}>
              <a href={`/about/`}>
                <span className={"about-profile-name"}>Anshuman Pattnaik</span>
              </a>
            </div>
            <div className={"about-social-profile-div"}>
              <div className="about-social-media-icon-div" align="center">
                <a
                  href="https://twitter.com/anspattnaik"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="https://assets.hackbotone.com/images/icons/ic_twitter.png"
                    className={"about-social-media-icon-size"}
                  />
                </a>
              </div>
              <div className="about-social-media-icon-div" align="center">
                <a
                  href="https://www.youtube.com/anshumanpattnaik"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="https://assets.hackbotone.com/images/icons/ic_youtube.png"
                    className={"about-social-media-icon-size"}
                  />
                </a>
              </div>
              <div className="about-social-media-icon-div" align="center">
                <a
                  href="https://www.facebook.com/hackbotone"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="https://assets.hackbotone.com/images/icons/ic_facebook.png"
                    className={"about-social-media-icon-size"}
                  />
                </a>
              </div>
              <div className="about-social-media-icon-div" align="center">
                <a
                  href="https://www.linkedin.com/in/anshuman123/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="https://assets.hackbotone.com/images/icons/ic_linkedin.png"
                    className={"about-social-media-icon-size"}
                  />
                </a>
              </div>
              <div className="about-social-media-icon-div" align="center">
                <a
                  href="https://github.com/anshumanpattnaik"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="https://assets.hackbotone.com/images/icons/ic_github.png"
                    className={"about-social-media-icon-size"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
