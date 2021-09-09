import React from "react";
import styled, { useTheme } from "styled-components";
import Marquee from "react-fast-marquee";

import Button from "components/Button";
import Row from "components/Row";
import Column from "components/Column";
import PaperclipLogo from "components/PaperclipLogo";
import { ExternalLink, ExternalLinkWrapper } from "components/Link";
import { Typography } from "theme";
import { URLS, EMAIL } from "common/constants";
import { useWindowSize } from "common/hooks";

const appPadding = 20; // px
const marqueeSpeed = 50; // px/sec

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 40px;
	width: 100%;
	padding: 0 ${appPadding}px;
	margin: 100px 0;
	position: relative;

	${({ theme }) =>
		theme.mediaWidth.small`
				flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
				row-gap: ${({ gapSmall, theme }) => gapSmall ?? theme.spacing.xs};
				column-gap: ${({ gapSmall, theme }) => gapSmall ?? theme.spacing.xs};
				margin: 75px 0;
			`};
`;

const CenterColumn = styled(Column)`
	max-width: ${({ theme }) => theme.mediaQuerySizes.small}px;
	overflow: visible;
`;

const StyledMarquee = styled(Marquee)`
	top: ${({ topOffset }) => topOffset}px;
	z-index: 999;
	mix-blend-mode: difference;
	position: absolute;
	transform: translateY(-50%);
	overflow: hidden;
`;

export default function App({ toggleDarkMode }) {
	const theme = useTheme();
	const { windowWidth } = useWindowSize();

	const marqueeTopOffset =
		windowWidth > theme.mediaQuerySizes.small ? theme.mediaQuerySizes.small / 2 : (windowWidth - 2 * appPadding) / 2;

	return (
		<>
			<StyledApp>
				<StyledMarquee gradient={false} topOffset={marqueeTopOffset} speed={marqueeSpeed} direction="left">
					{windowWidth > theme.mediaQuerySizes.small ? (
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
				<CenterColumn justify="flex-start" gap={theme.spacing.xl}>
					<PaperclipLogo onClickCallback={toggleDarkMode} />
					<Row justify="center" gap={theme.spacing.lg} flex="none">
						<ExternalLinkWrapper href={URLS.TWITTER} target="_blank" flex={1}>
							<Button width="100%" variant="secondary">
								TWITTER
							</Button>
						</ExternalLinkWrapper>
						<ExternalLinkWrapper href={URLS.GITHUB} target="_blank" flex={1}>
							<Button width="100%">GITHUB</Button>
						</ExternalLinkWrapper>
					</Row>
					<Typography.displayS align="center" opacity={0.7}>
						WE DESIGN AND BUILD TOOLS FOR DEFI AND WEB3.
						{windowWidth > theme.mediaQuerySizes.small && <br />} WANT TO WORK TOGETGER?
						<ExternalLink href={"mailto: " + EMAIL}> CONTACT@PAPERCLIP.XYZ</ExternalLink>
					</Typography.displayS>
				</CenterColumn>
			</StyledApp>
		</>
	);
}
