import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Theme, { GlobalStyle } from "theme";

function Index() {
	return (
		<Theme>
			<GlobalStyle />
			<App />
		</Theme>
	);
}

ReactDOM.render(<Index />, document.getElementById("root"));
