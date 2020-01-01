import React, { Component } from "react";
import SearchIcon from "../../icons/ic_search.png";

class Search extends Component {
  render() {
    return (
      <form action="/">
        <div className={"search-container"}>
          <div className={"search-input-div"}>
            <input
              type="text"
              className={"search-input"}
              placeholder="Search here..."
              autoComplete="off"
              name="search"
              required
            />
          </div>
          <button className={"search-btn-div"}>
            <img src={SearchIcon} className={"search-icon"} />
          </button>
        </div>
      </form>
    );
  }
}
export default Search;
