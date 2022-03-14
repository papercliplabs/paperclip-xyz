import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Background = styled.div`
	display: flex;
	justify-content: center;
	padding: 12px;
	height: 48px;
	width: 48px;
	border-radius: 48px;
	z-index: 999;
	:hover {
		background-color: ${({ theme }) => theme.color.bg2};
	}
`;

export default function Icon({ src, alt }: { src: string; alt: string }) {
	return (
		<Background>
			<Image src={src} alt={alt} width="100%" height="100%" />
		</Background>
	);
}
