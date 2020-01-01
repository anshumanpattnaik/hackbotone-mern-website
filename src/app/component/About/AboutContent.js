import React, { Component } from "react";
import "../../css/index.css";

class AboutContent extends Component {
  render() {
    return (
      <div>
        <div className={"about-author-pic-container"}>
          <img
            src="https://assets.hackbotone.com/images/icons/anshuman_pattnaik.jpg"
            className={"about-author-pic"}
          />
        </div>
        <div className={"about-author-name-container"}>
          <p className={"about-author-name"}>Anshuman Pattnaik</p>
        </div>
        <div className={"about-social-media-container"}>
          <div className={"about-social-media-icon-container"}>
            <a
              href="https://twitter.com/anspattnaik"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://assets.hackbotone.com/images/icons/ic_twitter.png"
                className={"social-media-share-icon-large-size"}
              />
            </a>
            <a
              href="https://www.youtube.com/anshumanpattnaik"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://assets.hackbotone.com/images/icons/ic_youtube.png"
                className={"social-media-share-icon-large-size"}
              />
            </a>
            <a
              href="https://www.facebook.com/hackbotone"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://assets.hackbotone.com/images/icons/ic_facebook.png"
                className={"social-media-share-icon-large-size"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anshuman123/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://assets.hackbotone.com/images/icons/ic_linkedin.png"
                className={"social-media-share-icon-large-size"}
              />
            </a>
            <a
              href="https://github.com/anshumanpattnaik"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://assets.hackbotone.com/images/icons/ic_github.png"
                className={"social-media-share-icon-large-size"}
              />
            </a>
          </div>
        </div>
        <div className="about-message-container">
          <p className={"about-message-label"}>
            I am the creator of HackbotOne website and my{" "}
            <a
              href="https://www.youtube.com/anshumanpattnaik"
              className={"about-message-link"}
              target="_blank"
              rel="noopener"
            >
              Youtube channel
            </a>{" "}
            and both of these platforms produce contents from various domains
            such as Web Hacking, Bug Bounty, Application Development & Game
            Development. This was my plan from quite a long time to make
            contents on these domains which will be helpful for those who are
            beginners and also those who have interest and passion in these
            areas. And now I have the platform to share my knowledge and
            experience to the world.
          </p>
          <p className={"about-message-label"}>
            Just to share my background I have around 5+ years of experience in
            the software industry and worked on many domains both Mobile & Web
            platforms but I would say it's just the beginning of my career lots
            more things to learn and explore in this industry and I always love
            Twitter because whenever I need to find an answer I'll tweet or else
            I'll search through #hashtags and I'll get my answer because I found
            Twitter is a platform where we can join to many communities and
            share ideas and experience.
          </p>
          <p className={"about-message-label"}>
            I love to do bug bounty on my free time and it's quite fun and
            exciting to hack on a live website and earn some bounty and I would
            like to thank all of these companies for running Bug Bounty programs
            because by this I can improve my skills sets in security.
          </p>
          <p className={"about-message-label"}>
            As a hobby, I love to play Playstation 4 games (Watchdog 2 ) is one
            of my favourite game of all the time and also love to watch Movies &
            TV shows on Netflix.
          </p>
          <p className={"about-message-label"}>
            Don't forget to follow me on twitter{" "}
            <a
              href="https://twitter.com/anspattnaik"
              className={"about-message-link"}
              target="_blank"
              rel="noopener"
            >
              @anspattnaik
            </a>
          </p>
          <p className={"about-message-label"}>Thank you</p>
        </div>
      </div>
    );
  }
}
export default AboutContent;
