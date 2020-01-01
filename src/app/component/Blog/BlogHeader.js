import React, { Component } from "react";
import Markup from "react-html-markup";
import * as baseUrl from "../Utils/Constants";
import twiiter from "../../icons/ic_twitter_black.png";
import reddit from "../../icons/ic_reddit_black.png";
import facebook from "../../icons/ic_facebook_black.png";
import whatsapp from "../../icons/ic_whatsapp_black.png";

class BlogHeader extends Component {
  renderDescription() {
    if (this.props.isDescription) {
      return <Markup htmlString={this.props.description} />;
    } else {
      return (
        <p className={"blog-header-short-description"}>
          {this.props.short_description}
        </p>
      );
    }
  }

  renderblogThumb() {
    const blogUrl = "/blog/" + this.props.short_title;
    if (this.props.short_title) {
      return (
        <a href={blogUrl}>
          <img src={this.props.thumb} className={"blog-header-thumb"} />
        </a>
      );
    } else {
      return <img src={this.props.thumb} className={"blog-header-thumb"} />;
    }
  }

  renderblogTitle() {
    const blogUrl = "/blog/" + this.props.short_title;
    if (this.props.short_title) {
      return (
        <a href={blogUrl}>
          <p className={"blog-header-title"}>{this.props.title}</p>
        </a>
      );
    } else {
      return <p className={"blog-header-no-link-title"}>{this.props.title}</p>;
    }
  }

  renderblogShare() {
    if (this.props.isDescription) {
      const blogUrl = "/blog/" + this.props.id;
      const blogTitle = this.props.title;
      return (
        <div className={"blog-header-share-icon-container"}>
          <div className={"blog-header-icon-container"} align="center">
            <a
              href={`http://twitter.com/share?text=${blogTitle}&url=${baseUrl.DOMAIN_URL +
                blogUrl}`}
              target="_blank"
              rel="noopener"
            >
              <img src={twiiter} className={"blog-header-share-icon"} />
            </a>
          </div>
          <div className={"blog-header-icon-container"} align="center">
            <a
              href={`https://www.reddit.com/submit?url=${baseUrl.DOMAIN_URL +
                blogUrl}`}
              target="_blank"
              rel="noopener"
            >
              <img src={reddit} className={"blog-header-share-icon"} />
            </a>
          </div>
          <div className={"blog-header-icon-container"} align="center">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl.DOMAIN_URL +
                blogUrl}`}
              target="_blank"
              rel="noopener"
            >
              <img src={facebook} className={"blog-header-share-icon"} />
            </a>
          </div>
          <div className={"blog-header-icon-container"} align="center">
            <a
              href={`https://api.whatsapp.com/send?text=${baseUrl.DOMAIN_URL +
                blogUrl}`}
              target="_blank"
              rel="noopener"
            >
              <img src={whatsapp} className={"blog-header-share-icon"} />
            </a>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"blog-header-container"}>
        <div className={"blog-header-thumb-container"}>
          {this.renderblogThumb()}
        </div>
        {this.renderblogTitle()}
        <div className={"blog-header-child-section"}>
          <div>
            <a href={"/about"}>
              <span className={"blog-header-author"}>{this.props.author}</span>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className={"blog-header-date"}>{this.props.date}</span>
          </div>
          {this.renderblogShare()}
        </div>
        <div className={"blog-header-short-description-container"}>
          {this.renderDescription()}
        </div>
        <div className={"blog-header-keyword-container"}>
          <span className={"blog-header-keyword"}>{this.props.keyword}</span>
        </div>
        <div className={"blog-header-divider"}></div>
      </div>
    );
  }
}
export default BlogHeader;
