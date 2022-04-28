import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
      <ul>
        {boxes.map((box) => (
          <li key={box.id}>
            <Box
              height={box.height}
              width={box.width}
              backgroundColor={box.backgroundColor}
              removeBox={() => removeBox(box.id)}
            />
          </li>
        ))}
      </ul>
    );
  }

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  }

  function removeBox(id) {
    setBoxes(boxes.filter((box) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} removeBox={removeBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;

// maurice-baez
