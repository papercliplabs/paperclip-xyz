import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Background = styled.div<{
	size?: string;
	padding?: string;
	paddingVertical?: string;
	paddingHorizontal?: string;
}>`
	display: flex;
	justify-content: center;
	padding: ${({ padding }) => padding ?? "0"};
	height: ${({ size }) => size ?? "24px"};
	width: ${({ size }) => size ?? "24px"};
	border-radius: ${({ size }) => size ?? "24px"};
	z-index: 999;
`;

export default function Icon({
	src,
	alt,
	size,
	padding,
}: {
	src: string;
	alt: string;
	size?: string;
	padding?: string;
}) {
	return (
		<Background size={size} padding={padding}>
			<Image src={src} alt={alt} width="100%" height="100%" />
		</Background>
	);
}
