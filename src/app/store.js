import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../features/testSlice/testSlice";

export const store = configureStore({
  reducer: {
    counter_store: testReducer,
  },
});
