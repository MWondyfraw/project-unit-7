import React from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {
  const images = props.images;
  let photos;

  if (images.length > 0) {
    photos = images.map((photo) => {
      return <Photo id={photo.server} secret={photo.secret} key={photo.id} />;
    });
  }

  return (
    <div className="photo-container">
      <h2>{props.query}</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoContainer;
