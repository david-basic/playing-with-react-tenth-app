import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const show = useSelector(state => state.showCounter)

	const incHandler = () => {
		dispatch({ type: "inc" });
	};
	const decHandler = () => {
		dispatch({ type: "dec" });
	};
	const increaseByHandler = () => {
		dispatch({ type: "increase", amount: 5 });
	};

	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" });
	};
	const resetHandler = () => {
		dispatch({ type: "reset" });
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
