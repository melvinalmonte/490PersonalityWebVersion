import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "user_selection",
  initialState: {
    answers: [],
  },
  reducers: {
    addToAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    clearAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { addToAnswer, clearAnswers } = answerSlice.actions;

export default answerSlice.reducer;
