import React from "react";
import "./MyList.scss";
import { Link } from "react-router-dom";

const MyList = () => {
  return (
    <div className="myist-container">
      <h1 className="mylist-header">Under Development...</h1>
      <Link to={"/"} className="mylist-link">
        Go back to Home Page
      </Link>
    </div>
  );
};

export default MyList;
