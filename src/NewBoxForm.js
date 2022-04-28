import React, { useState } from "react";

function NewBoxForm({ addBox, removeBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("getting in here");
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height-input">Height:</label>
      <input
        id="height-input"
        name="height"
        value={formData.height}
        onChange={handleChange}
      ></input>

      <label htmlFor="width-input">Width:</label>
      <input
        id="width-input"
        name="width"
        value={formData.width}
        onChange={handleChange}
      ></input>

      <label htmlFor="backgroundColor-input">background color:</label>
      <input
        id="backgroundColor-input"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      ></input>

      <button>Add a new Box</button>
    </form>
  );
}

export default NewBoxForm;
