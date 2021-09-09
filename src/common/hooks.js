import { useState, useEffect } from "react";

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		windowWidth: undefined,
		windowHeight: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}
