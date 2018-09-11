import React, { Component } from "react"; //Importing react and component for the app.
import Gallery from "./gallery.js"; //Importing gallery to render all the pictures for this component.

//Class for Search that mounts component upon routing.
class Search extends Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.search(this.props.query);
  }

  //Grabs input upon change and updates state accordingly.
  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  //Handles submit by sending the search text to the function search from app.js.
  submit = e => {
    e.preventDefault();
    this.props.search(this.state.search);
    e.currentTarget.reset();
  };

  //Renders a page loading or gallery depending on the boolean flag set up from app.js
  render() {
    return (
      <div>
        <div>
          <form className="search-form" onSubmit={this.submit}>
            <input
              type="search"
              name="search"
              placeholder="Search"
              required
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="search-button"
              onClick={this.handleClick}
            >
              <svg
                fill="#fff"
                height="24"
                viewBox="0 0 23 23"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </form>
        </div>
        {this.props.loading ? (
          <h1 className="loading">Pictures loading...</h1>
        ) : (
          <Gallery
            pictures={this.props.pictures}
            categoryHandler={this.props.category}
          />
        )}
      </div>
    );
  }
}

export default Search;
