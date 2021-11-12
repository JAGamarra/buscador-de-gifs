import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  // ~ States
  const [categories, setCategories] = useState([]);

  // ~
  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </div>
  );
};

export default GifExpertApp;
