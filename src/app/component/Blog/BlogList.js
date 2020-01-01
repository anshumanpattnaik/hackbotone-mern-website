import React, { Component } from "react";
import Blogs from "./Blogs";
import NavBar from "../NavBar/NavBar";
import Footer from "../Utils/Footer";
import * as baseUrl from "../Utils/Constants";
import "isomorphic-fetch";

class BlogList extends Component {
  constructor(props) {
    super(props);

    let initialData;
    if (__isBrowser__) {
      initialData = window.__initialData__;
      delete window.__initialData__;
    } else {
      initialData = props.staticContext.initialData;
    }

    this.state = {
      blogs: initialData
    };
  }

  componentDidMount() {
    if (!this.state.blogs) {
      this.loadPage(1);
    }
  }

  loadPage(data) {
    BlogList.requestInitialData(data).then(items =>
      this.setState({
        blogs: items
      })
    );
  }

  static requestInitialData(data) {
    data = data.replace("/", "");
    data = data.replace("/", "");
    data = data.replace("page", "");

    var url = `${baseUrl.BASE_URL}/blogs/getAllBlogs?page=${data}`;
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  static requestSearchData(data) {
    data = data.replace("/", "");
    data = data.replace("/", "");
    data = data.replace("?", "");
    data = data.replace("=", "");
    data = data.replace("search", "");
    var url = `${baseUrl.BASE_URL}/blogs/searchblog?search=${data}`;
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    const { blogs } = this.state;
    return (
      <div>
        <NavBar />
        <Blogs blogs={blogs} />
        <Footer />
      </div>
    );
  }
}

export default BlogList;
