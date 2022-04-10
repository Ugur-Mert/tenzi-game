import React from "react";

export default function Die(props) {
  //const [select, setSelect] = React.useState(props.isHeld);

  // function selectDice() {
  //   setSelect((prevSelect) => !prevSelect);
  // }

  return (
    <div>
      <button
        className="btn"
        onClick={props.holdDice}
        style={{ backgroundColor: props.isHeld ? "#59E391" : "" }}
      >
        {props.value}
      </button>
    </div>
  );
}
