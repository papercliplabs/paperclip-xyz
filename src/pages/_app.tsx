import React, { useEffect } from "react";
import Head from "next/head";
import OgHead from "@components/Preview/OG";
import TwitterHead from "@components/Preview/Twitter";
import smoothscroll from "smoothscroll-polyfill";
import OgImg from "@images/paperclip-og.png";

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
  				<meta name="description" content="Paperclip Labs is a design, research, and engineering studio building Web3 tools."/>
			
			<OgHead>
				description={"Paperclip Labs is a design, research, and engineering studio building Web3 tools."}
				ogUrl={"https://www.paperclip.xyz/"}
				ogImage={OgImg}
				ogTitle={"Paperclip Labs"}
			</OgHead>

			<TwitterHead>
				description={"Paperclip Labs is a design, research, and engineering studio building Web3 tools."}
				ogUrl: {"https://www.paperclip.xyz/"}
				ogImage={OgImg}
				ogTitle={"Paperclip Labs"}
			</TwitterHead>
			
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
