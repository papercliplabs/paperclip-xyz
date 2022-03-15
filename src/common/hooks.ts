import { useState, useEffect } from "react";
import { WindowSize } from "common/enums";
import { mediaQuerySizes } from "theme";

export function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState(WindowSize.MEDIUM);

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			const width = window.innerWidth;
			setWindowSize(
				width < mediaQuerySizes.small
					? WindowSize.SMALL
					: width < mediaQuerySizes.large
					? WindowSize.MEDIUM
					: WindowSize.LARGE
			);
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
