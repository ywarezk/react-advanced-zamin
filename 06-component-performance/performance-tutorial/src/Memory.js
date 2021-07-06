import { useEffect, useState, useMemo, memo } from "react";



// const hello = 'world';

export default function Memory() {
	const [counter, setCounter] = useState(0);
	
	useEffect(() => {
		const intervalId = setInterval(() => {
			
			setCounter((currentCounter) => {
				return currentCounter + 1;
			})
			
		}, 1000);
		
		return () => {
			clearInterval(intervalId);
		}
	}, [])
	
	return (
		<h1>{ counter }</h1>
	)
}

// export default memo(Child);