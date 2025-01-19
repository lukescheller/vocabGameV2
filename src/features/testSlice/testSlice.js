import { createSlice } from "@reduxjs/toolkit";
import words from "../../Words/Words";

const initialState = {
  dictionary: words,
};

export const testSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    remove: (state, action) => {
      return {
        ...state,
        dictionary: [...state.dictionary].filter(
          (word) => word.word !== action.payload
        ),
      };
    },
  },
});

export const { remove } = testSlice.actions;

export default testSlice.reducer;
