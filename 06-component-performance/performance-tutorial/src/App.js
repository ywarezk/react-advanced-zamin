import './App.css';
import { useMemo, useState } from 'react';
import Child from './Child';

/**
 * 
 * @returns 
 
 
     ReactElement1
	 
	ReactElement2   ReactElement3
	
	
ReactElement3   ReactElement4
 
 
 */


function App() {
	console.log('App is rendering');
	
	const [rand, setRand] = useState(Math.random());
	
	const [hello, setHello] = useState('hello');
	
	const ChildOptimized = useMemo(() => {
		return (
			<Child value1={rand} value2={10} />
		)
	}, [rand])
	
	return (
		<div className="App">
			<h1>
				{rand}
			</h1>
			
			<button onClick={() => setRand(Math.random())}>
				change rand
			</button>
			
			<button onClick={() => setHello('hello ' +Math.random())}>
				change message
			</button>
			
			{
				ChildOptimized
			}
		</div>
	);
}

export default App;
