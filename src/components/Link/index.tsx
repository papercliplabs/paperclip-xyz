import React from "react";
import styled from "styled-components";

const ExternalLinkWrapper = styled.a<{
	fillParent?: boolean;
}>`
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	width: ${({ fillParent }) => (fillParent ? "100%" : "")};
	height: ${({ fillParent }) => (fillParent ? "100%" : "")};
	background-color: transparent;
	border: none;
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export function ExternalLink({ href, fillParent, children }: { href: string; fillParent?: boolean; children: any }) {
	return (
		<ExternalLinkWrapper target="_blank" href={href} fillParent={fillParent}>
			{children}
		</ExternalLinkWrapper>
	);
}
