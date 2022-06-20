import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TeamState {
  name: string;
  score: number;
}

const initialState: TeamState = {
  name: "Team #1",
  score: 0,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
  },
});

export const { increment } = teamSlice.actions;
export default teamSlice.reducer;
