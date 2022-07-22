import React from "react";
import styled from "styled-components";

import Header from "@components/partial/Header";

import SlideDown from "@components/Animations/Slide/SlideDown";

const headerHeight = "80px";

const StyledBody = styled.div`
	position: fixed;
	flex-direction: column;
	width: 100%;
	top: ${headerHeight};
	bottom: 0;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
`;

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<>
		<SlideDown>
			<Header height={headerHeight} />
		</SlideDown>
			<StyledBody>{children}</StyledBody>
		</>
	);
}
