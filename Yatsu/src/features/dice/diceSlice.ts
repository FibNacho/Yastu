import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { dieValuePayLoad } from './dice';
import type { dieSelectionPayLoad } from './dice';

export interface DiceState {
  selected: 'Selected' | 'Not Selected';
  value: number;
}

export interface DiceHand {
  rollTotal: number;
  diceValues: DiceState[]; // Uses the renamed DiceState
}

export interface DiceSliceState {
  allDiceHands: DiceHand[];
}

const initialState: DiceSliceState = {
  allDiceHands: [
    {
      rollTotal: 0,
      diceValues: [
        { selected: 'Selected', value: 6 },
        { selected: 'Selected', value: 6 },
        { selected: 'Selected', value: 6 },
        { selected: 'Selected', value: 6 },
        { selected: 'Selected', value: 6 },
      ],
    },
  ],
};

export const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    updateSingleDieValue: (state, action: PayloadAction<dieValuePayLoad>) => {
      state.allDiceHands[0].diceValues[action.payload.index].value = action.payload
        .value as number;
    },
    updateSingleDieSelection: (state, action: PayloadAction<dieSelectionPayLoad>) => {
      state.allDiceHands[0].diceValues[action.payload.index].selected =
        action.payload.value;
    },
  },
  selectors: {
    selectDiceValues: (diceState) => {
      return diceState.allDiceHands[0];
    },
  },
});

export const { updateSingleDieValue, updateSingleDieSelection } = diceSlice.actions;

export const { selectDiceValues } = diceSlice.selectors;

export default diceSlice.reducer;
