import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";


const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);

	const incHandler = () => {
		dispatch(counterActions.increment());
	};
	const decHandler = () => {
		dispatch(counterActions.decrement());
	};
	const increaseByHandler = () => {
		dispatch(counterActions.increaseBy(5));
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};
	const resetHandler = () => {
		dispatch(counterActions.reset());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incHandler}>INC</button>
				<button onClick={increaseByHandler}>+5 INC</button>
				<button onClick={decHandler}>DEC</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
			<button onClick={resetHandler}>Reset</button>
		</main>
	);
};

export default Counter;
