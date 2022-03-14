import React from "react";
import styled, { useTheme } from "styled-components";
import Head from "next/head";

import { useWindowSize } from "common/hooks";
import Theme, { GlobalStyle } from "theme";

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
	return (
		<>
			<Head>
				<title>Paperclip Labs</title>
			</Head>
			<Theme>
				<GlobalStyle />
				<Component {...pageProps} />
			</Theme>
		</>
	);
}
