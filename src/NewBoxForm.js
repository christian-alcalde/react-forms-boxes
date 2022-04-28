import React, { useState } from "react";

/** Form for creating a new box.
 * Has state for height, width, and backgroundColor of the box.
 * On submission, sends { height, width, and backgroundColor } to
 * addBox function received from the parent.
 */
function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Update local state with current state of input element */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** sends { height, width, and backgroundColor } to parent and
   * clears form after submission
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }

  /** renders the NewBoxForm */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      ></input>

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      ></input>

      <label htmlFor="backgroundColor">background color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      ></input>

      <button>Add a new Box</button>
    </form>
  );
}

export default NewBoxForm;
