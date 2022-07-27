import React, { Component } from "react";
import axios from "axios";
import apiKey from "../config";
import NotFound from "./NotFound";
import Photo from "./Photo";

class PhotoContainer extends Component {
  state={
    images:[],
  }
  componentDidMount() {
    //  Data Fetching
    const query = this.props.match.params.query;
    console.log(query)
    axios({
      method: "get",
      url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&user_id=&tags=${query}&per_page=24&format=json&nojsoncallback=1`,
      responseType: "json",
    }).then((response) => {
      let images = response.data.photos.photo;
      this.setState({
        images,
      });
    });
  } 

  render () {
    let photos;
    let images = this.state.images;
    console.log(images)
    if (images.length > 0) {
      photos = images.map((photo) => {
        return <Photo server={photo.server} id={photo.id} secret={photo.secret} key={photo.id} />;
      });
    } else {
      photos = <NotFound />
    }

    return (
      <div className="photo-container">
        <h2>{this.props.query}</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
};

export default PhotoContainer;
