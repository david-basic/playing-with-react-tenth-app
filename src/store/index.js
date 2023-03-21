import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "inc":
			return {
				counter: state.counter + 1,
				showCounter: state.showCounter,
			};
		case "dec":
			return {
				counter: state.counter - 1,
				showCounter: state.showCounter,
			};
		case "increase":
			return {
				counter: state.counter + action.amount,
				showCounter: state.showCounter,
			};
		case "reset":
			return { counter: 0, showCounter: state.showCounter };
		case "toggle":
			return { showCounter: !state.showCounter, counter: state.counter };
		default:
			return state;
	}
	// switch case ili ovako pa ifalice
	// if (action.type === "inc") {
	// 	return {
	// 		counter: state.counter + 1,
	// 		showCounter: state.showCounter,
	// 	};
	// }
	// if (action.type === "dec") {
	// 	return {
	// 		counter: state.counter - 1,
	// 		showCounter: state.showCounter,
	// 	};
	// }
	// if (action.type === "increase") {
	// 	return { counter: state.counter + action.amount };
	// }
	// if (action.type === "reset") {
	// 	return { counter: 0 };
	// }
	// if (action.type === "toggle") {
	// 	return { showCounter: false };
	// }

	// return state;
};

const store = createStore(counterReducer);

export default store;
