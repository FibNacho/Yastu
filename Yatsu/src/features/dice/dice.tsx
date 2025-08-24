import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectDiceValues,
  updateSingleDieSelection,
  updateSingleDieValue,
} from './diceSlice';
import styles from './diceStyle.module.css';

export interface dieValuePayLoad {
  index: 0 | 1 | 2 | 3 | 4;
  value: null | 1 | 2 | 3 | 4 | 5 | 6;
}

export interface dieSelectionPayLoad {
  index: 0 | 1 | 2 | 3 | 4;
  value: 'Selected' | 'Not Selected';
}

function Dice() {
  const dispatch = useAppDispatch();
  const diceHandValues = useAppSelector(selectDiceValues);

  const handleClickDiceRoll = function () {
    for (let i = 0; i < 5; i++) {
      if (diceHandValues.diceValues[i].selected === 'Selected') {
        const payload: dieValuePayLoad = {
          index: i as dieValuePayLoad['index'],
          value: null,
        };
        payload.value = (Math.floor(Math.random() * 6) + 1) as dieValuePayLoad['value'];
        dispatch(updateSingleDieValue(payload));
      }
    }
  };

  const handleDiceSelection = function (index: number) {
    const payload: dieSelectionPayLoad = {
      index: index as dieSelectionPayLoad['index'],
      value: diceHandValues.diceValues[index].selected,
    };

    if (payload.value === 'Selected') {
      payload.value = 'Not Selected';
      dispatch(updateSingleDieSelection(payload));
    } else {
      payload.value = 'Selected';
      dispatch(updateSingleDieSelection(payload));
    }
  };

  const diceSVGPath = function (val: number): string {
    const numToLetter = ['one', 'two', 'three', 'four', 'five', 'six'];
    return `/diceFaces/dice-six-faces-${numToLetter[val - 1]}.svg`;
  };
  return (
    <>
      <span className={styles.diceWrapper}>
        {diceHandValues.diceValues.map((die, index) => (
          <span key={index}>
            <button
              className={
                diceHandValues.diceValues[index].selected === 'Selected'
                  ? styles.dieSelected
                  : styles.dieNotSelected
              }
              onClick={() => handleDiceSelection(index)}
            >
              <img
                src={diceSVGPath(die.value)}
                className={styles.dieIMG}
              />
            </button>
          </span>
        ))}
        <button
          onClick={handleClickDiceRoll}
          className={styles.rollButton}
        >
          Roll Again
        </button>
      </span>
    </>
  );
}

export default Dice;
