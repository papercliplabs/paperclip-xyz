import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";

import Row from "@components/Row";
import { Link } from "@components/Link";
import Icon from "@components/Icon";

import { URLS } from "@common/constants";
import { useWindowSize } from "@common/hooks";
import { WindowSize } from "@common/enums";

import twitterImg from "@images/twitter.svg";
import githubImg from "@images/github.svg";
import figmaImg from "@images/figma.svg";
import paperclipImg from "@images/paperclip.png";
import SlideDown from "@components/Animations/Slide/SlideDown";

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
		<SlideDown>
		<StyledHeader height={height}>
			<Link href="/" disableHoverOpacity openInSameTab>
				<Icon src={paperclipImg} alt="Paperclip Labs logo" size="48px" padding="4px" isButton={true} />
			</Link>
			<Row
				justify="flex-end"
				gap={windowSize == WindowSize.SMALL ? theme.spacing.lg : theme.spacing.xl}
				widthMaxContent={windowSize == WindowSize.SMALL}
			>
				<Link href={URLS.FIGMA} disableHoverOpacity>
					<Icon src={figmaImg} alt="Figma link" size="48px" padding="12px" isButton={true} />
				</Link>
				<Link href={URLS.GITHUB} disableHoverOpacity>
					<Icon src={githubImg} alt="Github link" size="48px" padding="12px" isButton={true} />
				</Link>
				<Link href={URLS.TWITTER} disableHoverOpacity>
					<Icon src={twitterImg} alt="Twitter link" size="48px" padding="12px" isButton={true} />
				</Link>
			</Row>
		</StyledHeader>
		</SlideDown>
	);
}
