import React, { Component } from "react"; //Importing react and component for the app.
import Gallery from "./gallery.js"; //Importing gallery to render all the pictures for this component.

//Class for Batman that mounts component upon routing.
class Batman extends Component {
  componentDidMount() {
    this.props.search("batman");
  }

  render() {
    return (
      <Gallery
        pictures={this.props.pictures}
        categoryHandler={this.props.category}
      />
    );
  }
}

export default Batman;
