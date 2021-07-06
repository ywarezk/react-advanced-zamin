import './App.css';
// import Child from './Child';
import { useState, lazy, Suspense, useEffect, useMemo } from 'react';
import page from 'page';
// import Home from './pages/Home';
// import About from './pages/About';

const LazyChild = lazy(
	/**
	 * @returns {Promise}
	 */
	async () => {
		// { default: Child, hello: 'world' }
		const module = await import('./Child');
		return module;
	}
)

const LazyHome = lazy(
	/**
	 * @returns {Promise}
	 */
	async () => {
		// { default: Child, hello: 'world' }
		const module = await import('./pages/Home');
		return module;
	}
)

const LazyAbout = lazy(
	/**
	 * @returns {Promise}
	 */
	async () => {
		// { default: Child, hello: 'world' }
		const module = await import('./pages/About');
		return module;
	}
)

page.start({ hashbang: true });


/**
 * 
 * @returns 
 
 
 class MyComponent extends Component {
	 render() {
		 
		//  this.setState(...)
	 }
 }
 
 */

function App() {
	const [isChildShowing, setIsChildShowing] = useState(false);
	
	// route
	const [myCurrentRoute, setMyCurrentRoute] = useState('/');
	
	useMemo(() => {
		// this runs sync
		// this.state = {
			
		// }
		
		// do not set the state in the memo
		// setIsChildShowing()
	}, [])
	
	// the homepage is running
	// componentDidMount, componentDidUpdate, "componentWillUnmount+"
	useEffect(() => {
		page('*', ({pathname}) => {
			setMyCurrentRoute(pathname)		
		})	
		
		return () => {
			
		}
	}, [])
	
	
	const navigateToPage = (path) => {
		page(path);
	}
	
	// setState
	// you cannot call setState on render
	// setIsChildShowing(true)
	
	/**
	
	page('*', ({pathname}) => {
		setMyCurrentRoute(pathname)		
	})
	
	 */
	
	return (
		<div className="App">
			<nav>
				<ul>
					<li>
						<a onClick={() => navigateToPage('/')}>
							Home
						</a>
					</li>
					<li>
						<a onClick={() => navigateToPage('/about')}>
							About
						</a>
					</li>
				</ul>
			</nav>
		
			<h1>im the parent</h1>
			<button onClick={() => setIsChildShowing(true)}>
				Display Map
			</button>
			
			<Suspense fallback={<h1>Loading...</h1>}>
				{
					isChildShowing && <LazyChild />
				}
			</Suspense>
			
			
			<Suspense fallback={<h1>Loading Page...</h1>}>
				{ (myCurrentRoute === "" || myCurrentRoute === "/") && <LazyHome /> }
				{ (myCurrentRoute === "/about") && <LazyAbout /> }
			</Suspense>
			
			
			
		</div>
	);
}

export default App;
