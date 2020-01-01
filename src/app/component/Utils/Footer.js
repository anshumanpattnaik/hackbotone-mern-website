import React, { Component } from "react";
import "../../css/index.css";
import facebook from "../../icons/ic_facebook_black_large.png";
import twitter from "../../icons/ic_twitter_black_large.png";
import linkedin from "../../icons/ic_linkedin_black_large.png";
import github from "../../icons/ic_github_black_large.png";
import youtube from "../../icons/ic_youtube_black_large.png";

class Footer extends Component {
  render() {
    return (
      <div className={"footer-container"}>
        <div className={"footer-social-media-container"}>
          <div className={"footer-social-media-icon-container"}>
            <a
              href="https://www.facebook.com/hackbotone"
              target="_blank"
              rel="noopener"
            >
              <img src={facebook} className={"footer-social-media-icon-size"} />
            </a>
            <a
              href="https://twitter.com/anspattnaik"
              target="_blank"
              rel="noopener"
            >
              <img src={twitter} className={"footer-social-media-icon-size"} />
            </a>
            <a
              href="https://www.youtube.com/anshumanpattnaik"
              target="_blank"
              rel="noopener"
            >
              <img src={youtube} className={"footer-social-media-icon-size"} />
            </a>
            <a
              href="https://www.linkedin.com/in/anshuman123/"
              target="_blank"
              rel="noopener"
            >
              <img src={linkedin} className={"footer-social-media-icon-size"} />
            </a>
            <a
              href="https://github.com/anshumanpattnaik"
              target="_blank"
              rel="noopener"
            >
              <img src={github} className={"footer-social-media-icon-size"} />
            </a>
          </div>
        </div>
        <div className={"footer-copyright-container"}>
          <p className={"footer-copyright-label"}>
            © 2019 HACKBOTONE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    );
  }
}
export default Footer;
