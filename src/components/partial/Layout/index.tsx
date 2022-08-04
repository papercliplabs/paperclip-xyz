import React from "react";
import styled from "styled-components";

import Header from "@components/partial/Header";

const headerHeight = "80px";

const StyledBody = styled.div`
	position: fixed;
	flex-direction: column;
	width: 100%;
	top: 0;
	bottom: 0;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
		
`;

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<>
			<Header height={headerHeight} />
			<StyledBody>{children}</StyledBody>
		</>
	);
}
