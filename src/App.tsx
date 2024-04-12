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
		<div>
			{count}
			<div className=' flex w-28 justify-between items-center bg-orange-500'>
				<button onClick={decrement}>Decrement</button>
				<button onClick={incrementAsync}>IncrementAsync</button>
			</div>
		</div>
	);
};

export default App;
