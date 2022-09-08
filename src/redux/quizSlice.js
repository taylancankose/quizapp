import {createSlice} from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    items: [],
    selectedLevel: '',
    selectedAnswer: '',
    pressed: false,
    score: 0,
    isLoading: false,
    isError: null,
  },
  reducers: {
    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
    selectAnswer: (state, action, id) => {
      if (id === action.payload.id) {
        state.selectedAnswer = action.payload;
      }
    },
    setPressed: (state, action) => {
      state.pressed = !state.pressed;
    },
    increaseScore: (state, action) => {
      state.score = state.score + 10;
    },
    decreaseScore: (state, action) => {
      if (state.score > 0) {
        state.score = state.score - 10;
      } else {
        state.score = 0;
      }
    },
    resetScore: (state, action) => {
      state.score = 0;
    },
  },
});

export const {
  setSelectedLevel,
  setPressed,
  selectAnswer,
  increaseScore,
  decreaseScore,
  resetScore,
} = quizSlice.actions;
export default quizSlice.reducer;
