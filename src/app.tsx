import React from "react";
import styled, { useTheme } from "styled-components";
import Marquee from "react-fast-marquee";

import Row from "components/Row";
import Column from "components/Column";
import PaperclipLogo from "components/PaperclipLogo";
import Icon from "components/Icon";
import { ExternalLink } from "components/Link";
import { Typography } from "theme";
import { URLS, EMAIL } from "common/constants";
import { useWindowSize } from "common/hooks";

import twitterSvg from "assets/twitter.svg";
import githubSvg from "assets/github.svg";

const marqueeSpeed = 50; // px/sec

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
	justify-content: space-between;
	overflow: visible;
`;

const StyledMarquee = styled(Marquee)`
	overflow: visible;
	width: 110vw;
`;

const StyledEmail = styled(Typography.displayS)`
	background: ${({ theme }) => `linear-gradient(180deg, ${theme.color.primary1} 0%, ${theme.color.secondary1} 100%)`};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
`;

export default function App() {
	const theme = useTheme();
	const { windowWidth } = useWindowSize();

	const isSmall = windowWidth < theme.mediaQuerySizes.small;

	return (
		<StyledApp>
			<Row justify="center">
				<Typography.displayM>PAPERCLIP LABS</Typography.displayM>
			</Row>
			<Column justify="center" align="center" overflow="visible" width="100vw">
				<StyledMarquee gradient={false} speed={marqueeSpeed} direction="left">
					{isSmall ? (
						<Typography.displayXL color={theme.color.white}>
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
						</Typography.displayXL>
					) : (
						<Typography.displayL color={theme.color.white}>
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
						</Typography.displayL>
					)}
				</StyledMarquee>
				<PaperclipLogo />
			</Column>
			<Column gap={theme.spacing.xxs}>
				<Typography.displayS color={theme.color.text1}>WE DESIGN AND DEVELOP WEB3 TOOLS.</Typography.displayS>
				<ExternalLink href={"mailto: " + EMAIL}>
					<StyledEmail>CONTACT@PAPERCLIP.XYZ</StyledEmail>
				</ExternalLink>
				<Row justify="center" gap={theme.spacing.lg} padding={theme.spacing.md}>
					<ExternalLink href={URLS.TWITTER}>
						<Icon src={twitterSvg} alt="Twitter link" />
					</ExternalLink>
					<ExternalLink href={URLS.GITHUB}>
						<Icon src={githubSvg} alt="Github link" />
					</ExternalLink>
				</Row>
			</Column>
		</StyledApp>
	);
}
