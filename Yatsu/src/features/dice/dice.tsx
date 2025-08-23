import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectDiceValues, updateSingleDieValue } from './diceSlice';
import style from './diceStyle.module.css';

export interface diePayLoad {
  index: 0 | 1 | 2 | 3 | 4;
  value: null | 1 | 2 | 3 | 4 | 5 | 6;
}

function Dice() {
  const dispatch = useAppDispatch();
  const diceHandValues = useAppSelector(selectDiceValues);

  const handleClickDiceRoll = function () {
    for (let i = 0; i < 5; i++) {
      const payload: diePayLoad = {
        index: i as diePayLoad['index'],
        value: null,
      };
      payload.value = (Math.floor(Math.random() * 6) + 1) as diePayLoad['value'];
      dispatch(updateSingleDieValue(payload));
    }
  };

  return (
    <>
      <span>
        {diceHandValues.diceValues.map((die, index) => (
          <span
            key={index}
            className={style.diceValues}
          >{` ${die.value}`}</span>
        ))}
      </span>
      <button onClick={handleClickDiceRoll}>Roll Dice</button>
    </>
  );
}

export default Dice;
