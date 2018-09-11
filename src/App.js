import React, { Component } from "react"; //Importing react and component for the app.
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"; //Importing all the necessary routing tools from react-router-dom.
import axios from "axios"; //Importing axios to get data.
import "./index.css"; //Importing css.
import apiKey from "./.config.js"; //Importing api key in order to access data from flickr.

//Importing all the necessary components for App.js.
//3 Standard categories, 1 Search category, navigation bar, and a page not found for any routes that don't exist.
import Dogs from "./components/dogs.js";
import Batman from "./components/batman.js";
import Daredevil from "./components/daredevil.js";
import Search from "./components/search.js";
import Nav from "./components/nav.js";
import PageNotFound from "./components/pageNotFound.js";

//App class to render all components.
class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: false
    };
  }

  //Conducting search before unmounting in order to avoid it rendering on refreshing the browser on other category.
  componentWillUnmount() {
    this.search();
  }

  //Search function that uses axios in order to acquire the data necessary from Flickr and setting the data in an array in state.
  //Catches error if something is wrong with response.
  //Search defaults to Spiderman for the query.
  search = (query = "spiderman") => {
    this.setState({
      loading: true
    });
    return axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&in_gallery=&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        let picArr = [...response.data.photos.photo];
        this.setState({
          pictures: picArr,
          category: query,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error with fetching data", error);
      });
  };

  //Rendering all components necessary for the app.
  //Rendering a catch all PageNotFound for a route that doesn't exist.
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search" />} />
            <Route
              path="/batman"
              render={() => (
                <Batman
                  search={this.search}
                  pictures={this.state.pictures}
                  category={this.state.category}
                />
              )}
            />
            <Route
              path="/dogs"
              render={() => (
                <Dogs
                  search={this.search}
                  pictures={this.state.pictures}
                  category={this.state.category}
                />
              )}
            />
            <Route
              path="/daredevil"
              render={() => (
                <Daredevil
                  search={this.search}
                  pictures={this.state.pictures}
                  category={this.state.category}
                />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <Search
                  search={this.search}
                  pictures={this.state.pictures}
                  category={this.state.category}
                  loading={this.state.loading}
                />
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
