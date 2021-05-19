import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

const theme = (darkMode)  => ({
	color: {
		primary1: darkMode ? "#FFFFFF" : "#000000",
		bg0: darkMode ? '#000000' : '#FFFFFF',
	},
});


// Everything that is child of theme, gets theme as its props, so it can be used everywhere
export default function Theme({ darkMode, children }) {
	return <ThemeProvider theme={theme(darkMode)}>{children}</ThemeProvider>;
};


// Import fonts in public/index.html
export const GlobalStyle = createGlobalStyle`
	html, div {
		font-family: 'Inter', sans-serif;
	}

	html, body, #root {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-weight: 400;
		overflow-x: none;
		color: ${({ theme }) => theme.color.primary1};
		background-color: ${({ theme }) => theme.color.bg0};
	}

	* {
		box-sizing: border-box;
	}
`;
