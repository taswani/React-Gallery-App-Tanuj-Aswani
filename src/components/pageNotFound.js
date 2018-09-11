import React from "react"; //Importing react for the app.

//Simple 404 page for non-existant routes.
const PageNotFound = props => {
  return (
    <div className="error">
      <h1>This page was not found.</h1>
    </div>
  );
};

export default PageNotFound;
