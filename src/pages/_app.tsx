import React, { useEffect } from "react";
import Head from "next/head";
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
