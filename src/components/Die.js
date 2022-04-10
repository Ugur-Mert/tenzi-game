import React from "react";

export default function Die(props) {
  return (
    <div>
      <button className="btn">{props.value}</button>
    </div>
  );
}
