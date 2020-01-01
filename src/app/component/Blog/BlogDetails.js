import React, { Component } from "react";
import BlogHeader from "./BlogHeader";
import NavBar from "../NavBar/NavBar";
import BlogErrorPage from "./BlogErrorPage";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Utils/Footer";
import About from "../About/About";
import Search from "../Search/Search";
import BlogFooter from "./BlogFooter";
import * as baseUrl from "../Utils/Constants";

class BlogDetails extends Component {
  constructor(props) {
    super(props);

    let initialData;
    initialData = props.staticContext.initialData;

    this.state = {
      posts: initialData
    };
  }

  componentDidMount() {
    if (!this.state.posts) {
      this.loadPage(1);
    }
  }

  loadPage(data) {
    BlogDetails.requestInitialData(data).then(items =>
      this.setState({
        posts: items
      })
    );
  }

  static requestInitialData(data) {
    data = data.replace("/", "");
    data = data.replace("/", "");
    data = data.replace("blog", "");
    const url = `${baseUrl.BASE_URL}/blogs/blog/${data}`;
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  renderBlogDetails() {
    var blogUrl;
    var blogId;
    var blogThumb;
    var blogTitle;
    var blogDate;
    var blogKeyword;
    var blogDescription;

    if (this.state.posts) {
      blogUrl =
        `${baseUrl.DOMAIN_URL}/blogs/blog/` + this.props.match.params.id;

      blogId = this.props.match.params.id;
      blogThumb = this.state.posts.thumb;
      blogTitle = this.state.posts.title;
      blogDate = this.state.posts.formatted_date;
      blogKeyword = this.state.posts.keywords;
      blogShortDescription = this.state.posts.short_description;
      blogDescription = this.state.posts.description;
    }

    return (
      <div>
        <NavBar />
        <div className={"blog-parent-container"}>
          <div className={"blog-left-container"}></div>
          <div className={"blog-middle-container"}>
            {this.state.posts ? (
              <div>
                <div className={"blog-post-container"}>
                  <BlogHeader
                    id={blogId}
                    title={blogTitle}
                    author={"by Anshuman"}
                    date={blogDate}
                    keyword={blogKeyword}
                    thumb={blogThumb}
                    isDescription={true}
                    description={blogDescription}
                  />
                </div>
                <BlogFooter
                  title={this.state.posts.title}
                  thumb={this.state.posts.thumb}
                />
              </div>
            ) : (
              <BlogErrorPage />
            )}
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
        <Footer />
      </div>
    );
  }

  render() {
    return <div>{this.renderBlogDetails()}</div>;
  }
}
export default BlogDetails;
