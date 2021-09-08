import React from "react";
import styled from "styled-components";

export const ExternalLinkWrapper = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.color.externalLink};
	flex: 1;
	:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

export function ExternalLink({ href, children }) {
	return (
		<ExternalLinkWrapper target="_blank" href={href}>
			{children}
		</ExternalLinkWrapper>
	);
}
