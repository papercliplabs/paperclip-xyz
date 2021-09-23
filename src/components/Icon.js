import React from "react";
import styled from "styled-components";

const Background = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.color.bg2};
	padding: 12px;
	height: 48px;
	width: 48px;
	border-radius: 48px;
	z-index: 999;
`;

export default function Icon({ src, alt }) {
	return (
		<Background>
			<img src={src} alt={alt} />
		</Background>
	);
}
