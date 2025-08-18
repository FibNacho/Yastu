import { useState } from 'react';

function Dice() {
  //Temporary Dice Value array
  const [diceValues, setDiceValues] = useState([6, 6, 6, 6, 6]);

  //Function that takes in n and produced n random number in an array

  const diceNumGenerator = function (numDice: number) {
    const containerArr: number[] = [];

    for (let i = 0; i < numDice; i++) {
      containerArr.push(Math.floor(Math.random() * 6 + 1));
    }

    setDiceValues(() => {
      return containerArr.map((val, index) => {
        return <span key={index}>{` ${val} `}</span>;
      });
    });
  };

  const handleClickNumGenerator = function () {
    diceNumGenerator(5);
  };

  return (
    <>
      <span>{diceValues}</span>
      <button onClick={handleClickNumGenerator}>Roll Dice</button>
    </>
  );
}

export default Dice;
