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
const paperclipSize = { sm: "300px", lg: "500px" };

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 40px;
	width: 100%;
	padding: 0 ${({ theme }) => theme.spacing.sm};
	margin: 130px 0;
	position: relative;

	${({ theme }) =>
		theme.mediaWidth.small`
				flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
				row-gap: ${({ gapSmall, theme }) => gapSmall ?? theme.spacing.xs};
				column-gap: ${({ gapSmall, theme }) => gapSmall ?? theme.spacing.xs};
				margin: 80px 0;
			`};
`;

const StyledMarquee = styled(Marquee)`
	overflow: visible;
	height: ${paperclipSize.lg};

	${({ theme }) =>
		theme.mediaWidth.small`
			height: ${paperclipSize.sm};
			`};
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
	const paperclipSizeForScreen = isSmall ? paperclipSize.sm : paperclipSize.lg;

	console.log(paperclipSizeForScreen);

	return (
		<StyledApp>
			<Row justify="center">
				<Typography.displayM>PAPERCLIP LABS</Typography.displayM>
			</Row>
			<Row justify="center" padding={theme.spacing.xxl + " 0"} overflow="visible" width="100vw">
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
				<PaperclipLogo size={paperclipSizeForScreen} />
			</Row>
			<Column gap={theme.spacing.xxs}>
				<Typography.displayS color={theme.color.text2}>WE DESIGN AND DEVELOP WEB3 TOOLS.</Typography.displayS>
				<Typography.displayS color={theme.color.text2}>WANT TO WORK TOEGETHER?</Typography.displayS>
				<StyledEmail>
					<ExternalLink href={"mailto: " + EMAIL}>CONTACT@PAPERCLIP.XYZ</ExternalLink>
				</StyledEmail>
				<Row justify="center" gap={theme.spacing.lg} padding={theme.spacing.md}>
					<ExternalLink href={URLS.TWITTER} target="_blank">
						<Icon src={twitterSvg} alt="Twitter link" />
					</ExternalLink>
					<ExternalLink href={URLS.GITHUB} target="_blank">
						<Icon src={githubSvg} alt="Github link" />
					</ExternalLink>
				</Row>
			</Column>
		</StyledApp>
	);
}
