import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Head from "next/head";
import { polyfill } from "smoothscroll-polyfill";

import Theme, { GlobalStyle } from "theme";
import Header from "components/partial/Header";
import Layout from "components/partial/Layout";

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
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Theme>
		</>
	);
}
