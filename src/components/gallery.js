import React from "react"; //Importing react and component for the app.
import GalleryItem from "./galleryItem.js"; //Importing galleryItem to render all the pictures for this component.
import NotFound from "./notFound.js"; //Importing NotFound to render all the null result for searches for.

//Stateless component that takes the data from the axios call and arranges it into the image url to display via galleryItem.
//Image returns not found if there are no results.
const Gallery = props => {
  const results = props.pictures;
  let images;
  if (results.length > 0) {
    images = results.map(image => (
      <GalleryItem
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${
          image.id
        }_${image.secret}_m.jpg`}
        key={image.id}
      />
    ));
  } else {
    images = <NotFound />;
  }
  return (
    <div className="photo-container">
      <h2>Results for {props.categoryHandler}</h2>
      <ul>{images}</ul>
    </div>
  );
};

export default Gallery;
