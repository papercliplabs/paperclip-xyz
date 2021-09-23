import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled, { css } from "styled-components";

// Media queries (px)
const mediaQuerySizes = {
	small: 450,
};

const mediaQueries = Object.keys(mediaQuerySizes).reduce((acc, key) => {
	acc[key] = (...args) => css`
		@media (max-width: ${mediaQuerySizes[key]}px) {
			${css(...args)};
		}
	`;
	return acc;
}, {});

const theme = () => ({
	color: {
		white: "#FFFFFF",
		black: "#000000",

		bg1: "#050505",
		bg2: "rgba(255, 255, 255, 0.1)",

		text1: "#FFFFFF",
		text2: "rgba(255, 255, 255, 0.7)",

		primary1: "#43EF44",
		secondary1: "#ECFF0C",

		externalLink: "#EB00FF",
	},

	mediaWidth: mediaQueries,
	mediaQuerySizes: mediaQuerySizes,

	radius: {
		sm: "8px",
		md: "12px",
		lg: "16px",
	},

	spacing: {
		none: "none",
		xxs: "4px",
		xs: "8px",
		sm: "12px",
		md: "16px",
		lg: "24px",
		xl: "40px",
		xxl: "64px",
	},
});

// Everything that is child of theme, gets theme as its props, so it can be used everywhere
export default function Theme({ children }) {
	return <ThemeProvider theme={theme()}>{children}</ThemeProvider>;
}

// Typography theme
const StyledText = styled.div`
	font-family: ${({ family }) => family};
	color: ${({ color, theme }) => color ?? theme.color["text1"]};
	font-size: ${({ fontSize }) => fontSize}px;
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: ${({ lineHeight, useDefaultLineHeight }) => (useDefaultLineHeight ? "auto" : lineHeight + "px")};
	text-align: ${({ align }) => align ?? "left"};
	opacity: ${({ opacity }) => opacity ?? 1};
	letter-spacing: 0.03em;
`;

export const Typography = {
	displayXL(props) {
		return <StyledText family="Space Grotesk" fontSize={72} fontWeight={600} lineHeight={92} {...props} />;
	},
	displayL(props) {
		return <StyledText family="Space Grotesk" fontSize={56} fontWeight={600} lineHeight={72} {...props} />;
	},
	displayM(props) {
		return <StyledText family="Space Grotesk" fontSize={20} fontWeight={600} lineHeight={24} {...props} />;
	},
	displayS(props) {
		return <StyledText family="Space Grotesk" fontSize={17} fontWeight={400} lineHeight={24} {...props} />;
	},
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
		background-color: ${({ theme }) => theme.color.bg1};
	}

	#root, body {
		overflow-y: scroll;
	}

	* {
		box-sizing: border-box;
	}

	#canvas3d {
		width: 200px;
	}
`;
