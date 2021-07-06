import { useEffect, useState, useMemo, memo } from "react";



// const hello = 'world';

export default function Child({
	value1,
	value2
}) {
	console.log('Child is rendering');
	
	const [counter, setCounter] = useState(0);
	
	/*
	const [myData, setMyData] = useState({
		hello1: 'hello world',
		hello2: 'hello world2',
		hello3: 'hello world3'
	})
	
	useEffect(() => {
		
		setTimeout(() => {
			setMyData((myDataCurrent) => {
				return {
					...myDataCurrent,
					hello1: 'new value'	
				}
			})
		}, 1000)
		
	}, [])
	*/
	
	/*
	const valueRunOnce = useMemo(() => {
		let calc = 0;
		for (let i = 0; i < 100000; i++) {
			for (let j = 0; j<1000; j++) {
				calc+=value1;	
			}
		}
		return calc;
	}, [])
	*/
	
	const calcValue1 = useMemo(() => {
		let calcValue1 = 0;
		for (let i = 0; i < 100000; i++) {
			for (let j = 0; j<1000; j++) {
				calcValue1+=value1;	
			}
		}
		return calcValue1	
	}, [value1])
	
	const calcValue2 = useMemo(() => {
		let calcValue2 = 0;
		for (let i = 0; i < 100000; i++) {
			for (let j = 0; j<1000; j++) {
				calcValue2+=value2;	
			}
		}
		return calcValue2
	}, [value2])
	
	
	return (
		<div>
			<h1>
				im the child {counter} {calcValue1} {calcValue2}
			</h1>
			<button onClick={() => setCounter(counter + 1)}>
				increment
			</button>
		</div>
		
	)
}

// export default memo(Child);