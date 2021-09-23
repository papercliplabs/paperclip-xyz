import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
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
