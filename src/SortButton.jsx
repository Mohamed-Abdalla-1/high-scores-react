import React from "react";

const SortButton = (props) => {
  return (
    <button onClick={props.handleClick} className="btn btn-dark">
      {props.text}
    </button>
  );
};

export default SortButton;
