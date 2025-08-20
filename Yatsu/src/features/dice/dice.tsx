import { useAppSelector } from '../../app/hooks';
import { diceSlice } from './diceSlice';

function Dice() {
  // function that gets state and stores it
  const diceHandValues = useAppSelector(diceSlice.selectors.selectDiceValues).map(
    (val) => {
      return val.value;
    }
  );

  // function to roll dice and then update state
  const handleClickDiceRoll = function () {};

  return (
    <>
      <span>{diceHandValues}</span>
      <button onClick={handleClickDiceRoll}>Roll Dice</button>
    </>
  );
}

export default Dice;
