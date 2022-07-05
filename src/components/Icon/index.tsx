import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

const Background = styled.div<{
	size?: string;
	padding?: string;
	paddingVertical?: string;
	paddingHorizontal?: string;
	isButton?: boolean;
}>`
	display: flex;
	justify-content: center;
	padding: ${({ padding }) => padding ?? "0"};
	height: ${({ size }) => size ?? "24px"};
	width: ${({ size }) => size ?? "24px"};
	border-radius: ${({ size }) => size ?? "24px"};
	z-index: 999;
	transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;

	${({ isButton, theme }) =>
		isButton &&
		css`
			background-color: ${theme.color.card0};
			:hover {
				background-color: ${theme.color.card1};
				transform: scale(1.05);
			}
			:active {
				background-color: ${theme.color.card2};
				transform: scale(0.95);
			}
		`}
`;

export default function Icon({
	src,
	alt,
	size,
	padding,
	isButton,
}: {
	src: string;
	alt: string;
	size?: string;
	padding?: string;
	isButton?: boolean;
}) {
	return (
		<Background size={size} padding={padding} isButton={isButton}>
			<Image src={src} alt={alt} width="100%" height="100%" />
		</Background>
	);
}
