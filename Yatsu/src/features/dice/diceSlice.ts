import {
  createSlice,
  //   createAsyncThunk,
  //   nanoid,
  type PayloadAction,
} from '@reduxjs/toolkit';
// import { type RootState } from '../../app/store';

export interface diceSingle {
  selected: 'Selected' | 'Not Selected';
  value: number;
}

export interface diceHands {
  rollTotal: number;
  diceValues: diceSingle[];
}

export interface initialState {
  allDiceHands: diceHands[];
}

const initialState: initialState = {
  allDiceHands: [
    {
      rollTotal: 0,
      diceValues: [
        { selected: 'Selected', value: 6 },
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
    rollDice: (state, action: PayloadAction<diceHands>) => {
      state.allDiceHands[0].diceValues = action.payload.diceValues;
    },
  },
  selectors: {
    selectDiceValues: (diceState) => {
      return diceState.allDiceHands[0].diceValues;
    },
  },
});
