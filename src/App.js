import React from "react";
import "./App.css";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      newDice.push(randomNumber);
    }

    return newDice;
  }
  console.log(allNewDice());

  const diceElement = dice.map((die) => <Die value={die} />);

  function randomDice() {
    setDice(allNewDice());
  }

  return (
    <main>
      <div className="buttons">{diceElement}</div>
      {
        <button className="roll-button" onClick={randomDice}>
          Roll
        </button>
      }
    </main>
  );
}
