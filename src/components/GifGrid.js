import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <section>
      <h3 className="titleCategory "> {category} </h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className="grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </section>
  );
};

export default GifGrid;
