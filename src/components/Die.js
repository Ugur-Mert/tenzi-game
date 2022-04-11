import React from "react";
import Dice1 from "../dices/zar-1.png";
import Dice2 from "../dices/zar-2.png";
import Dice3 from "../dices/zar-3.png";
import Dice4 from "../dices/zar-4.png";
import Dice5 from "../dices/zar-5.png";
import Dice6 from "../dices/zar-6.png";
export default function Die(props) {
  const dices = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  return (
    <div>
      <button
        className="btn"
        onClick={props.holdDice}
        style={{ backgroundColor: props.isHeld ? "#59E391" : "" }}
      >
        <img src={dices[props.value]} />
      </button>
    </div>
  );
}
