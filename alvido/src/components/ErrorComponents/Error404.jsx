import React from "react";

import "../../style/components_style/ErrorNotFound/error404.css";

function Error404() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for doesn’t exist.</p>
        <a href="/" className="go-home">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default Error404;
