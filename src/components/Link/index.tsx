import React from "react";
import styled from "styled-components";

const LinkWrapper = styled.a<{
	width?: string;
	height?: string;
	maxWidth?: string;
	disableHoverOpacity?: boolean;
}>`
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	width: ${({ width }) => width ?? "auto"};
	height: ${({ height }) => height ?? "auto"};
	max-width: ${({ maxWidth }) => maxWidth ?? "auto"};
	background-color: transparent;
	border: none;
	
	:hover {
		cursor: pointer;
		opacity: ${({ disableHoverOpacity }) => (disableHoverOpacity ? 1.0 : 0.8)};
	}
`;

export function Link({
	href,
	width,
	height,
	maxWidth,
	disableHoverOpacity,
	openInSameTab,
	children,
}: {
	href: string;
	width?: string;
	height?: string;
	maxWidth?: string;
	disableHoverOpacity?: boolean;
	openInSameTab?: boolean;
	children: any;
}) {
	return (
		<LinkWrapper
			target={openInSameTab ? "" : "_blank"}
			href={href}
			width={width}
			height={height}
			maxWidth={maxWidth}
			disableHoverOpacity={disableHoverOpacity}
		>
			{children}
		</LinkWrapper>
	);
}
