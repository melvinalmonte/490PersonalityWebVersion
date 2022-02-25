import { configureStore } from "@reduxjs/toolkit";
import answerReducer from "./answerSlice";
const store = configureStore({
  reducer: {
    user_answers: answerReducer,
  },
});

export default store;
