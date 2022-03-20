import React, { forwardRef, useRef } from "react";
import styled, { useTheme } from "styled-components";
import dynamic from "next/dynamic";

import Row from "components/Row";
import Header from "components/partial/Header";

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
			<Header height={headerHeight} />
			<StyledBody>{children}</StyledBody>
		</>
	);
}
