import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "app";
import Theme, { GlobalStyle } from "theme";

function Index() {
	return (
		<StrictMode>
			<Theme>
				<GlobalStyle />
				<App />
			</Theme>
		</StrictMode>
	);
}

ReactDOM.render(<Index />, document.getElementById("root"));
