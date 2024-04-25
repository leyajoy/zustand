import { useEffect } from "react";
import "./App.css";

import React from "react";
import useCounterStore from "./store.tsx";

const setCount = () => {
	useCounterStore.setState({ count: 1 });
};

const App = () => {
	const count = useCounterStore((state) => state.count);

	return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
	const incrementAsync = useCounterStore((state) => state.incrementAsync);
	const decrement = useCounterStore((state) => state.decrement);

	useEffect(() => {
		setCount();
	}, []);

	return (
		<div className=' block justify-center items-center'>
			<div className=' flex gap-12'>
				<button
					onClick={decrement}
					className=' h-12 w-28 bg-orange-400 rounded-md'
				>
					Decrement
				</button>
				<div className=' w-14 h-14 rounded-full bg-green-300  flex items-center justify-center'>
					{count}
				</div>
				<button
					onClick={incrementAsync}
					className=' h-12 w-28 bg-orange-400 rounded-md'
				>
					Increment
				</button>
			</div>
		</div>
	);
};

export default App;
