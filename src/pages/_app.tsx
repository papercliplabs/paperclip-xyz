import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Head from "next/head";
import { polyfill } from "smoothscroll-polyfill";

import Theme, { GlobalStyle } from "theme";
import Header from "components/partial/Header";

const headerHeight = "80px";

const StyledBody = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: ${headerHeight};
	justify-content: space-between;
`;

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
	// Kick off smooth scrolling since safari doesn't support nativly
	useEffect(() => {
		polyfill();
	}, []);

	return (
		<>
			<Head>
				<title>Paperclip Labs</title>
			</Head>
			<Theme>
				<GlobalStyle />
				<Header height={headerHeight} />
				<StyledBody>
					<Component {...pageProps} />
				</StyledBody>
			</Theme>
		</>
	);
}
