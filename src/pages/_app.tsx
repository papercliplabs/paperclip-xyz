import React, { useEffect } from "react";
import Head from "next/head";
import smoothscroll from "smoothscroll-polyfill";

import Theme, { GlobalStyle } from "@theme";
import Layout from "@components/partial/Layout";

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
	// Kick off smooth scrolling since safari doesn't support nativly
	useEffect(() => {
		smoothscroll.polyfill();
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
