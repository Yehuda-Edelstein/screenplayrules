import React, { useEffect } from "react";
import "./style.index.scss";

function PageNotFound(props) {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);
  return (
    <div className="notFoundContainer">
      <div className="notFoundSlugline">INT. 404 - NOT FOUND</div>
      <div className="notFoundDescription">
        This route does not exist. Sorry.
      </div>
    </div>
  );
}

export default PageNotFound;
