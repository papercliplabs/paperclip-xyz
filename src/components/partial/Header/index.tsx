import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";
import dynamic from "next/dynamic";

import Row from "components/Row";
import { Typography } from "theme";
import { ExternalLink } from "components/Link";
import Icon from "components/Icon";
import { URLS } from "common/constants";
import Card from "components/Card";
import { useWindowSize } from "common/hooks";
import { getTextOfJSDocComment } from "typescript";
import { WindowSize } from "common/enums";

const twitterSvg = "/images/twitter.svg";
const githubSvg = "/images/github.svg";

const StyledHeader = styled(Row)<{
	height: string;
}>`
	position: fixed;
	width: 100%;
	top: 0;
	height: ${({ height }) => height};
	padding: ${({ theme }) => theme.spacing.xl};
	justify-content: space-between;
	z-index: 999;

	${({ theme }) => theme.mediaWidth.small`
		padding: ${({ theme }) => theme.spacing.md};
	`}
`;

export default function Header({ height }: { height: string }) {
	const theme = useTheme();
	const windowSize = useWindowSize();

	return (
		<StyledHeader height={height}>
			{windowSize != WindowSize.SMALL && <Row></Row>}
			<Row justify={windowSize == WindowSize.SMALL ? "flex-start" : "center"}>
				<Typography.subHeader align="center">PAPERCLIP LABS</Typography.subHeader>
			</Row>
			<Row
				justify="flex-end"
				gap={windowSize == WindowSize.SMALL ? theme.spacing.lg : theme.spacing.xl}
				widthMaxContent={windowSize == WindowSize.SMALL}
			>
				<ExternalLink href={URLS.GITHUB}>
					<Icon src={githubSvg} alt="Github link" size="24px" />
				</ExternalLink>
				<ExternalLink href={URLS.TWITTER}>
					<Icon src={twitterSvg} alt="Twitter link" size="24px" />
				</ExternalLink>
			</Row>
		</StyledHeader>
	);
}
