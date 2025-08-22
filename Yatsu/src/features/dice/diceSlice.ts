import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

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
    updateDiceValues: (state, action: PayloadAction<DiceState[]>) => {
      state.allDiceHands[0].diceValues = action.payload;
    },
  },
  selectors: {
    selectDiceValues: (diceState) => {
      return diceState.allDiceHands[0].diceValues;
    },
  },
});

export const { updateDiceValues } = diceSlice.actions;

export const { selectDiceValues } = diceSlice.selectors;

export default diceSlice.reducer;
