// Building App Components

import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-dom";
import apiKey from "./config";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";
import PhotoContainer from "./Components/PhotoContainer";

// Stateful Components

export default class App extends React.Component {
  state = {
    loading: true,
    images: [],
    query: "",
  };

  componentDidMount() {
    //  Data Fetching
    const searchTerm = "cat";
    console.log(apiKey);

    axios({
      method: "get",
      url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`,
      responseType: "json",
    }).then(function(response) {
        console.log(response);
    });
    //  
  }
  // Routing

  render() {
    return (
      <div className="container">
        {/* <SearchForm />
            <Nav /> */}
        <PhotoContainer images={this.state.images} />
      </div>
    );
  }
}
