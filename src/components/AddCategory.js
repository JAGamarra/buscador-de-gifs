import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  // ~ States
  const [inputValue, setInputValue] = useState("");
  const [emptyField, setEmptyField] = useState(false);

  // ~Manejadores de eventos
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setEmptyField(true);
      return;
    }
    setCategories((catg) => [inputValue, ...catg]);
    setEmptyField(false);
    setInputValue("");
  };

  //
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} />
      <button type="submit">Agregar categoría</button>
      {emptyField ? <p>Escriba una categoria</p> : !emptyField ? <></> : <></>}
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
