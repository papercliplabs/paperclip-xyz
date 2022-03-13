import React from "react";
import styled from "styled-components";

const ExternalLinkWrapper = styled.a`
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	background-color: transparent;
	border: none;
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export function ExternalLink({ href, children }: { href: string; children: any }) {
	return (
		<ExternalLinkWrapper target="_blank" href={href}>
			{children}
		</ExternalLinkWrapper>
	);
}
