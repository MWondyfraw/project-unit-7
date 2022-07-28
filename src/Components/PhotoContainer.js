import React, { Component } from "react";
// import axios from "axios";
// import apiKey from "../config";
import NotFound from "./NotFound";
import Photo from "./Photo";

class PhotoContainer extends Component {
  render() {
    let photos;
    let images = this.props.images;
    if (images.length > 0) {
      photos = images.map((photo) => {
        return (
          <Photo
            server={photo.server}
            id={photo.id}
            secret={photo.secret}
            key={photo.id}
          />
        );
      });
    } else {
      photos = <NotFound />;
    }

    return (
      <div className="photo-container">
        <h2>{this.props.query}</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default PhotoContainer;
