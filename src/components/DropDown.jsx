import React from "react";

function DropDown() {
  return (
    <div className="drop-down-menu">
      <div className="drop-down-menu-component">
        <img
          src="../../assets/icons/book-blue.png"
          alt=""
          className="dropdown-icons"
        />
        <div className="drop-down-menu-content">
          <h1>Blog</h1>
          <p>The latest industry news, updates and info.</p>
        </div>
      </div>
      <div className="drop-down-menu-component">
        <img
          src="../../assets/icons/bolt-blue.png"
          alt=""
          className="dropdown-icons"
        />

        <div className="drop-down-menu-content">
          <h1>Customer stories</h1>
          <p>Learn how our customers are making big changes.</p>{" "}
        </div>
      </div>
      <div className="drop-down-menu-component">
        <img
          src="../../assets/icons/video-circle-blue.png"
          alt=""
          className="dropdown-icons"
        />
        <div className="drop-down-menu-content">
          <h1>Video tutorials</h1>
          <p>Get up and running on new features and techniques.</p>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
