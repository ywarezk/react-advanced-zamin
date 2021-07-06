# Constructor

do i need to create a class component  
if i want some logic to run once (constructor)

NO

```js

class App extends React.Component {
	constructor() {
		// ...
		
		this.hello = Math.random();
	}
}


```