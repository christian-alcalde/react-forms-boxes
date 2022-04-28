function Box({ height, width, backgroundColor, removeBox }) {
  const boxStyle = {
    height: height,
    width: width,
    backgroundColor: backgroundColor,
  };

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={removeBox}>Remove The Box!</button>
    </div>
  );
}

export default Box;
