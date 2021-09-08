import React from "react";
import styled, { css } from "styled-components";

import { Typography } from "theme";

const StyledButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${({ theme }) => theme.color.bg1};
	padding: 24px;
	height: 56px;
	width: ${({ width }) => width ?? "auto"};
	border-radius: ${({ theme }) => theme.radius.sm};
	background-color: ${({ theme }) => theme.color.bg1};
	color: ${({ theme }) => theme.color.text1};
	border: 1px solid ${({ theme }) => theme.color.bg2};
	flex: ${({ flex }) => flex ?? "none"};
	${({ variant }) =>
		variant === "secondary" &&
		css`
			background-color: ${({ theme }) => theme.color.bg2};
			color: ${({ theme }) => theme.color.text2};
			border: none;
		`}
`;

export default function Button({ variant, onClick, width, flex, children }) {
	return (
		<StyledButton variant={variant} onClick={onClick} width={width} flex={flex}>
			<Typography.displayM color="inherit">{children}</Typography.displayM>
		</StyledButton>
	);
}
