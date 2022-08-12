import React from "react";
import styled,{ useTheme } from "styled-components";

import { Typography } from "@theme";

import Row from "@components/Row";
import { Link } from "@components/Link";
import Card from "@components/Card";
import Icon from "@components/Icon";

import linkImg from "@images/link.svg";


const ConctactDiv = styled.div<{
	column?: boolean;
	noShadow?: boolean;
	height?: string;
	width?: string;
	padding?: string;
	paddingHorizontal?: string;
	backgroundColor?: string;
	maxHeight?: string;
	maxWidth?: string;
}>`

	background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.color.card0};
	overflow: hidden;
	transition: transform 200ms cubic-bezier(0.33, 1, 0.68, 1) 0s;
	
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 16px 24px;
	gap: 8px;

	width: 225px;
	height: 56px;

	border-radius: 1000px;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;

	:hover {
		background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.color.card1};
		opacity: ${({ backgroundColor }) => (backgroundColor ? 0.8 : 1.0)};
		transform: scale(1.01);
	}

	:active {
		transform: scale(0.98);
		background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.color.card2};
		opacity: ${({ backgroundColor }) => (backgroundColor ? 0.8 : 1.0)};
	}
`;


export function ContactButton({
	img,
	text,
	link,
	backgroundColor,
}: {
	img: string;
	text: string;
	link: string;
	backgroundColor?: string;
}) {
	const theme = useTheme();

	return (
		<Link href={link} width="100%" maxWidth={theme.mediaQuerySizes.small + "px"} disableHoverOpacity>
			<ConctactDiv backgroundColor={backgroundColor} padding={theme.spacing.sm}>
				<Row justify="space-between">
					<Row>
						<Icon src={img} alt={text} size="48px" padding="12px" isButton={false} />
						<Typography.body>{text}</Typography.body>
					</Row>
					{/* <Icon src={linkImg} alt="Link img" size="48px" padding="12px" isButton={false} /> */}
				</Row>
			</ConctactDiv>
		</Link>
	);
}