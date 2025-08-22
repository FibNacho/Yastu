import { useAppSelector } from '../../app/hooks';
import { selectDiceValues, type DiceState } from './diceSlice';

function Dice() {

  const diceHandValues = useAppSelector(selectDiceValues).map(
    (die: DiceState) => die.value
  );

  // Generates random numbers for the dice and sends them back to state
  const handleClickDiceRoll = function () {

  //Generate new state objects

  const newDiceValues =function(): DiceState[]{

    const randomDiceValues = []

    for(let i=0;i<5;i++){
      randomDiceValues.push( Math.floor(Math.random() * 5) + 1)
    }

    return(
      
    )



  }

  const updatedDiceValues: DiceState[] = newDiceValues




  };

  return (
    <>
      <span>{diceHandValues.join(', ')}</span>
      <button onClick={handleClickDiceRoll}>Roll Dice</button>
    </>
  );
}

export default Dice;
