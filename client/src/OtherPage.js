import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1>I'm in someother page</h1>
      <Link to="/">
        <strong>Go back home</strong>
      </Link>
    </div>
  );
};
