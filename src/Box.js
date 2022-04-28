/** Component that displays an individual box with given props
 * from the NewBoxForm. Takes removeBox function as a callback.
 *
 * State: none
 */

function Box({ height, width, backgroundColor, removeBox }) {
  const boxStyle = {
    height: height,
    width: width,
    backgroundColor: backgroundColor,
  };

  /** Renders the box with remove button */
  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={removeBox}>Remove The Box!</button>
    </div>
  );
}

export default Box;
