
// import React from 'react';
const { useEffect } = require('react');
const React = require('react');
// import { renderToString } from 'react-dom/server';
const {renderToString} = require('react-dom/server');

function Hello() {
	/**
	try to use useState
	useEffect
	How will it effect the generated HTML
	 */
	
	// return <h1>Hello world</h1>
	return React.createElement("h1", null, "Hello world");
}

// const html = renderToString(<Hello />);
const html = renderToString(React.createElement(Hello, null));

console.log(html);


