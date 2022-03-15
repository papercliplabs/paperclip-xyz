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
	padding: ${({ theme }) => theme.spacing.md};
	justifycontent: space-between;
	z-index: 999;
	background-color: ${({ theme }) => theme.color.bg0};
`;

export default function Header({ height }: { height: string }) {
	const theme = useTheme();
	const windowSize = useWindowSize();

	return (
		<StyledHeader height={height}>
			{windowSize != WindowSize.SMALL && <Row></Row>}
			<Row justify="center">
				<Typography.subHeader align="center">PAPERCLIP LABS</Typography.subHeader>
			</Row>
			<Row justify="flex-end" gap={theme.spacing.sm} padding="0">
				<ExternalLink href={URLS.TWITTER}>
					<Card padding={theme.spacing.sm} paddingHorizontal={theme.spacing.md}>
						<Icon src={twitterSvg} alt="Twitter link" size="24px" />
					</Card>
				</ExternalLink>
				<ExternalLink href={URLS.GITHUB}>
					<Card padding={theme.spacing.sm} paddingHorizontal={theme.spacing.md}>
						<Icon src={githubSvg} alt="Github link" size="24px" />
					</Card>
				</ExternalLink>
			</Row>
		</StyledHeader>
	);
}
