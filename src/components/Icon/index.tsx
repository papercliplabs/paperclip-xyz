import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Background = styled.div<{
	size?: string;
	paddingVertical?: string;
	paddingHorizontal?: string;
}>`
	display: flex;
	justify-content: center;
	padding: 0;
	height: ${({ size }) => size ?? "24px"};
	width: ${({ size }) => size ?? "24px"};
	border-radius: ${({ size }) => size ?? "24px"};
	z-index: 999;
`;

export default function Icon({ src, alt, size }: { src: string; alt: string; size?: string }) {
	return (
		<Background size={size}>
			<Image src={src} alt={alt} width="100%" height="100%" />
		</Background>
	);
}
