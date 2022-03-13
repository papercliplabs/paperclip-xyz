import "styled-components";
import { ThemedCssFunction } from "styled-components";
import { StringLiteralLike } from "typescript";

export interface Colors {
	white: string;
	black: string;

	bg1: string;
	bg2: string;

	text1: string;
	text2: string;

	primary1: string;
	secondary1: string;

	externalLink: string;
}

// Extend the default theme to include my custom fields
declare module "styled-components" {
	export interface DefaultTheme {
		color: Colors;

		radius: {
			sm: string;
			md: string;
			lg: string;
		};

		mediaWidth: {
			small: ThemedCssFunction<DefaultTheme>;
		};

		mediaQuerySizes: {
			small: number;
		};

		spacing: {
			none: string;
			xxs: string;
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};
	}
}
