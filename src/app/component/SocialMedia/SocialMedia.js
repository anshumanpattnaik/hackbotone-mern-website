import React, { Component } from "react";

class SocialMedia extends Component {
  render() {
    return (
      <div className={"social-media-container"}>
        <div className={"social-media-label-container"}>
          <span className={"social-media-label"}>Like us on Facebook</span>
        </div>
        <div className={"social-media-fb-container"}>
          <iframe
            width="300"
            height="500"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackbotone&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            scrolling="no"
            frameborder="0"
            allowFullscreen
            allowTransparency="true"
            allow="encrypted-media"
            className={"social-media-iframe"}
          ></iframe>
        </div>
      </div>
    );
  }
}
export default SocialMedia;
