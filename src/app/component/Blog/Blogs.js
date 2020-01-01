import React, { Component } from "react";
import "../../css/index.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import About from "../About/About";
import Search from "../Search/Search";
import BlogHeader from "./BlogHeader";
import BlogErrorPage from "./BlogErrorPage";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadPreviousPage() {
    if (this.props.blogs && this.props.blogs.docs.length > 0) {
      var activePage = this.props.blogs.page;
      var pageNo;

      if (activePage === 1) {
        pageNo = activePage;
      } else {
        pageNo = activePage - 1;
      }
      var pageUrl = "/page/" + pageNo;
      if (activePage !== 1) {
        return (
          <a href={pageUrl}>
            <button className={"blog-pagination-button"}>PREVIOUS</button>
          </a>
        );
      }
    }
  }

  loadNextPage() {
    if (this.props.blogs && this.props.blogs.docs.length > 0) {
      var totalPages = this.props.blogs.pages;
      var activePage = this.props.blogs.page;
      var pageNo;

      if (activePage === totalPages) {
        pageNo = totalPages;
      } else {
        pageNo = activePage + 1;
      }
      var pageUrl = "/page/" + pageNo;
      if (activePage !== totalPages) {
        return (
          <a href={pageUrl}>
            <button className={"blog-pagination-button"}>NEXT</button>
          </a>
        );
      }
    }
  }

  renderBlogHeader() {
    if (this.props.blogs.docs.length > 0) {
      const blogs = this.props.blogs.docs;
      return (
        <div>
          {blogs &&
            blogs.map(post => (
              <div key={post._id}>
                <BlogHeader
                  id={post._id}
                  title={post.title}
                  short_title={post.short_title}
                  author={"by Anshuman"}
                  date={post.formatted_date}
                  keyword={post.keywords}
                  thumb={post.thumb}
                  isDescription={false}
                  short_description={post.short_description}
                />
              </div>
            ))}
        </div>
      );
    } else {
      return <BlogErrorPage />;
    }
  }

  render() {
    return (
      <div className={"blog-parent-container"}>
        <div className={"blog-left-container"}></div>
        <div className={"blog-middle-container"}>
          {this.renderBlogHeader()}
          <div className={"blog-pagination-container"}>
            <div className={"blog-pagination-previous-container"}>
              {this.loadPreviousPage()}
            </div>
            <div className={"blog-pagination-next-container"}>
              {this.loadNextPage()}
            </div>
          </div>
        </div>
        <div className={"blog-right-container"}>
          <div className={"blog-search-container"}>
            <Search />
          </div>
          <div className={"blog-about-container"}>
            <About />
          </div>
          <div className={"blog-social-media-container"}>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}
export default Blogs;
