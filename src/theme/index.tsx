import React from "react";
import styled, { css, createGlobalStyle, ThemeProvider, DefaultTheme } from "styled-components";

import { Colors } from "theme/styled";

// Media queries
export const mediaQuerySizes = {
	small: 640,
	large: 1800,
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

			bg0: "#060606",
			bg1: "#1C1C1E",
			bg2: "#282828",

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
			xl: "32px",
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

		shadow: {
			none: "none",
			card: "0px 10px 10px rgba(0, 0, 0, 0.1), inset 0px 1px 6px rgba(255, 255, 255, 0.05);",
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
	heading(props: any) {
		return <StyledText family="Space Grotesk" fontSize={24} fontWeight={600} lineHeight={32} {...props} />;
	},
	subHeader(props: any) {
		return <StyledText family="Space Grotesk" fontSize={18} fontWeight={600} lineHeight={24} {...props} />;
	},
	body(props: any) {
		return <StyledText family="Space Grotesk" fontSize={17} fontWeight={400} lineHeight={22} {...props} />;
	},
};

// Everything that is child of theme, gets theme as its props, so it can be used everywhere
export default function Theme({ children }: { children: any }) {
	return <ThemeProvider theme={theme()}>{children}</ThemeProvider>;
}

// Import fonts in public/index.html
export const GlobalStyle = createGlobalStyle`
	html, body, #root, #__next {
		font-family: 'Inter', sans-serif;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
		background-repeat: no-repeat;
		color: ${({ theme }) => theme.color.primary1};
		color-scheme: dark;
		scroll-behavior: smooth;
		background: radial-gradient(68.02% 58.73% at 59.49% 48.53%, #1D1D1D 0%, #060606 100%)
	}

	div {
		scrollbar-color: ${({ theme }) => theme.color.bg2} transparent;
		scrollbar-width: thin;

		::-webkit-scrollbar {
			width: 8px;
			background-color: transparent;
		}
	
		::-webkit-scrollbar-track {
			background-color: transparent;
		}
	
		::-webkit-scrollbar-thumb {
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
			background-color: ${({ theme }) => theme.color.bg2};
		}
	}

	* {
		box-sizing: border-box;
	}
`;
