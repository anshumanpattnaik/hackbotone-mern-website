import React, { Component } from "react";

class BlogFooter extends Component {
  render() {
    return (
      <div className={"blog-footer-container"}>
        <div className={"blog-footer-author-container"}>
          <a href={`/about`}>
            <img
              src="https://assets.hackbotone.com/images/icons/anshuman_pattnaik.jpg"
              className={"blog-footer-author-pic"}
            />
          </a>
        </div>
        <div className={"blog-footer-name-twitter-container"}>
          <a href={`/about`}>
            <span className={"blog-footer-name"}>Anshuman Pattnaik</span>
          </a>
          <p className={"blog-footer-bio"}>
            Hi there! I am the creator of HackbotOne website and my Youtube
            channel. I have around 5+ years of experience in the software
            industry and having specialized skills sets on Android, Unity3d,
            Node.js, MongoDB, Go, Reactjs, React-Native and many more and love
            to do bug bounty on my free time.
          </p>
          <p>
            <span className={"blog-footer-bio"}>
              If you want to know more about me then don't forget to follow me
              on twitter{" "}
              <a
                href="https://twitter.com/anspattnaik"
                className={"blog-footer-twitter"}
                target="_blank"
                rel="noopener"
              >
                <span>@anspattnaik</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}
export default BlogFooter;
