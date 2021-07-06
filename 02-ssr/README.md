# Server Side Rendering


## SPA
			govforms.gov.il
browser -------------------------> Server

			index.html - empty
browser <-------------------------Server

				js files - 14 sec
browser --------------------------> Server
browser <-------------------------- Server

		browser displays the screen - 16 sec
		
## Server Side Rendering

			govforms.gov.il
browser -------------------------> Server

			index.html - Full HTML (2.04Sec)
browser <-------------------------Server

		browser displays the screen

				js files - 14 sec
browser --------------------------> Server
browser <-------------------------- Server
				Hydration
				
	React takes control of the screen
	
## React can run on Node.js as well

node will output a string

the html representation of our react component.


## H.W

Try to take the playground and place a useEffect and useState  
And modify the state after a time interval  
Examine what is the HTML output of the node server

```bash
> node hello.js
```