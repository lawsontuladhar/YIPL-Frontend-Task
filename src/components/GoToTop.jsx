import React from "react";

function GoToTop() {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <img
      src="../../assets/icons/arrow-up-solid.png"
      alt=""
      className="go-to-top-btn"
      onClick={top}
    />
  );
}

export default GoToTop;
