import React from "react"; //Importing react for the app.

//Stateless component that returns a single image element.
const GalleryItem = props => {
  return (
    <li>
      <img src={props.url} alt={props.title} />
    </li>
  );
};

export default GalleryItem;
