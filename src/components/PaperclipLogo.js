import React from "react";
import styled from "styled-components";

import paperclipSvg from "assets/paperclip.svg";

const Background = styled.div`
	display: flex;
	justify-content: center;
	background: linear-gradient(197.26deg, #43ef44 -1.74%, #ecff0c 102.63%);
	box-shadow: 0px 4px 200px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	padding: ${({ theme }) => theme.spacing.xl};
	width: 100%;
`;

const ImageContainer = styled.img`
	width: 100%;
`;

export default function PaperclipLogo({ size }) {
	return (
		<Background>
			<ImageContainer src={paperclipSvg} />
		</Background>
	);
}
