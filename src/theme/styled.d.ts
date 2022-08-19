import "styled-components";
import { ThemedCssFunction } from "styled-components";
import { StringLiteralLike } from "typescript";

export interface Colors {
	white: string;
	black: string;

	bg0: string;
	bg1: string;

	card0: string;
	card1: string;
	card2: string;

	text1: string;
	text2: string;
	text3: string;
	text5: string,

	paperclipGradient: string;
	twitter: string;
}

// Extend the default theme to include my custom fields
declare module "styled-components" {
	export interface DefaultTheme {
		color: Colors;
		
		radius: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};


		mediaWidth: {
			small: ThemedCssFunction<DefaultTheme>;
			large: ThemedCssFunction<DefaultTheme>;
		};

		mediaQuerySizes: {
			small: number;
			large: number;
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

		shadow: {
			none: string;
			card: string;
		};
	}
}
