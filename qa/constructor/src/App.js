import logo from './logo.svg';
import './App.css';
import { useMemo, useRef } from 'react';


/*

<App />
<App />

*/



function App() {
	
	// gets a new value every render
	const hello = Math.random();
	
	// gets a random value once when the component runs render the first time
	// { current: Math.random() }
	const hello1 = useRef(Math.random());
	
	const headerRef = useRef();
	
	const value = useMemo(() => {
		// this will run once	
		return 'hello world';
	}, [])	
	
	return (
		<div className="App">
		<header ref={headerRef} className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React
			</a>
		</header>
		</div>
	);
}

export default App;
