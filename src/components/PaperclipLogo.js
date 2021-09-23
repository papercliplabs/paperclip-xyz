import React from "react";
import styled from "styled-components";

import paperclipSvg from "assets/paperclip.svg";

const Background = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 8px;
	position: absolute;
	z-index: 999;
	width: ${({ size }) => size};
	height: ${({ size }) => size};
`;

const ImageContainer = styled.img`
	width: 100%;
`;

export default function PaperclipLogo({ size }) {
	return (
		<Background size={size}>
			{/* <canvas id="canvas3d"></canvas> */}
			<ImageContainer src={paperclipSvg} alt="Paperclip logo" />
		</Background>
	);
}

// Showing image until we get the paperclip web content sorted
