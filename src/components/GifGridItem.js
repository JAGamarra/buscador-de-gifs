import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="grid__card animate__animated animate__fadeIn">
      <p> {title} </p>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
