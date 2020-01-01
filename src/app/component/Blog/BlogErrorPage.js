import React, { Component } from "react";

class BlogErrorPage extends Component {
  render() {
    return (
      <div className={"blog-error-page-container"}>
        <div className={"blog-404-container"}>
          <p className={"blog-404-label"}>404</p>
        </div>
        <div className={"blog-oops-container"}>
          <p className={"blog-oops-label"}>
            Oops! We can't seem to find the page you're looking for.
          </p>
        </div>
      </div>
    );
  }
}
export default BlogErrorPage;
