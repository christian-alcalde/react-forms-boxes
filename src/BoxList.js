import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

/** BoxList: manages and renders all the boxes in the list.
 *
 * State: boxes: [{ id, height, width, backgroundColor}, ... ]
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Renders the boxes on the page */
  function renderBoxes() {
    const boxesToRender = boxes.map((box) => (
      <li key={box.id}>
        <Box
          height={box.height}
          width={box.width}
          backgroundColor={box.backgroundColor}
          removeBox={() => removeBox(box.id)}
        />
      </li>
    ));

    return <ul>{boxesToRender}</ul>;
  }

  /** Add new box to the box list */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  }

  /** Remove the new box from the box list */
  function removeBox(id) {
    setBoxes(boxes.filter((box) => box.id !== id));
  }

  /** Renders the NewBoxForm and calls the renderBoxes function  */
  return (
    <div>
      <NewBoxForm addBox={addBox} removeBox={removeBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;

// maurice-baez
