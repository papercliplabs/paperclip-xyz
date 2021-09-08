import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Theme, { GlobalStyle } from "theme";

function Index() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<Theme darkMode={darkMode}>
			<GlobalStyle />
			<App toggleDarkMode={() => setDarkMode(!darkMode)} />
		</Theme>
	);
}

ReactDOM.render(<Index />, document.getElementById("root"));
