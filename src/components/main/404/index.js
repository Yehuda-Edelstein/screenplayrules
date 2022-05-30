import React from "react";
import "./style.index.scss";

function PageNotFound(props) {
  return (
    <div className="container">
      <div className="slugline">INT. 404 - NOT FOUND</div>
      <div className="description">This route does not exist. Sorry.</div>
    </div>
  );
}

export default PageNotFound;
