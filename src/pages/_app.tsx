import React, { useEffect } from "react";
import Head from "next/head";
import OgHead from "@components/Preview/OG";
import TwitterHead from "@components/Preview/Twitter";
import smoothscroll from "smoothscroll-polyfill";
import Script from 'next/script';
import Router from 'next/router';
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
			
				<meta property="og:url" content="https://www.paperclip.xyz/"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Paperclip Labs"/>
				<meta property="og:description" content="Paperclip Labs is a design, research, and engineering studio building Web3 tools."/>
				<meta property="og:image" content="https://github.com/papercliplabs/paperclip-xyz/blob/main/public/static/images/paperclip-og.png?raw=true"/>

				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:domain" content="paperclip.xyz"/>
				<meta property="twitter:url" content="https://www.paperclip.xyz/"/>
				<meta name="twitter:title" content="Paperclip Labs"/>
				<meta name="twitter:description" content="Paperclip Labs is a design, research, and engineering studio building Web3 tools."/>
				<meta name="twitter:image" content="https://github.com/papercliplabs/paperclip-xyz/blob/main/public/static/images/paperclip-og.png?raw=true"/>

			{/* <OgHead>
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
			</TwitterHead> */}
			
			</Head>
			<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script id="google-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
			<Theme>
				<GlobalStyle />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Theme>
		</>
	);
}
