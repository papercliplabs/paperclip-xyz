import React from "react";
import styled, { css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import { Colors } from "theme/styled";

// Media queries
export const mediaQuerySizes = {
	small: 640,
};

const mediaQueries: { [width in keyof typeof mediaQuerySizes]: typeof css } = Object.keys(mediaQuerySizes).reduce(
	(accumulator, size) => {
		(accumulator as any)[size] = (a: any, b: any, c: any) => css`
			@media (max-width: ${(mediaQuerySizes as any)[size]}px) {
				${css(a, b, c)}
			}
		`;
		return accumulator;
	},
	{}
) as any;

// General theme
export function theme(): DefaultTheme {
	return {
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

		radius: {
			sm: "8px",
			md: "12px",
			lg: "16px",
		},

		mediaWidth: mediaQueries,
		mediaQuerySizes: mediaQuerySizes,

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
	};
}

// Typography theme
const StyledText = styled.div<{
	family: string;
	color: keyof Colors;
	fontSize: number;
	fontWeight: number;
	lineHeight: number;
	align?: string;
	opacity?: number;
	useDefaultLineHeight?: boolean;
}>`
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
	displayXL(props: any) {
		return <StyledText family="Space Grotesk" fontSize={72} fontWeight={600} lineHeight={92} {...props} />;
	},
	displayL(props: any) {
		return <StyledText family="Space Grotesk" fontSize={56} fontWeight={600} lineHeight={72} {...props} />;
	},
	displayM(props: any) {
		return <StyledText family="Space Grotesk" fontSize={20} fontWeight={400} lineHeight={24} {...props} />;
	},
	displayS(props: any) {
		return <StyledText family="Space Grotesk" fontSize={17} fontWeight={400} lineHeight={24} {...props} />;
	},
};

// Everything that is child of theme, gets theme as its props, so it can be used everywhere
export default function Theme({ children }: { children: any }) {
	return <ThemeProvider theme={theme()}>{children}</ThemeProvider>;
}

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
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.color.primary1};
		background-color: ${({ theme }) => theme.color.bg1};
	}

	#root, body {
		overflow: hidden;
		display: div;
	}

	* {
		box-sizing: border-box;
	}
`;
