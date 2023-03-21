import { createSlice } from "@reduxjs/toolkit";

const counterInitState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
	name: "counter",
	initialState: counterInitState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increaseBy(state, action) {
			state.counter = state.counter + action.payload;
		},
		reset(state) {
			state.counter = 0;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
