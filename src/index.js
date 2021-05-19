import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Theme, { GlobalStyle } from 'theme'

ReactDOM.render(
	<Theme darkMode={true}>
		<GlobalStyle />
		<App />
	</Theme>,
	document.getElementById('root')
);
