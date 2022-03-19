import React, { forwardRef, useEffect, useMemo, useRef } from "react";
import styled, { useTheme } from "styled-components";
import Marquee from "react-fast-marquee";

import Header from "components/partial/Header";
import Row from "components/Row";
import Column from "components/Column";
import PaperclipSpline from "components/PaperclipSpline";
import Icon from "components/Icon";
import { ExternalLink } from "components/Link";
import { Typography } from "theme";
import { URLS, EMAIL } from "common/constants";
import { useWindowSize } from "common/hooks";
import { ProjectCard } from "components/Card";
import { ProjectInfo } from "common/types";
import { ProjectTag, WindowSize } from "common/enums";
import { HighlightSpanKind } from "typescript";

const MARQUEE_SPEED_PX_PER_SECS = 50;
const NUM_PROJECT_PER_ROW_FOR_SIZE = [1, 2, 3]; // small, medium, large
const PEAK_HEIGHT = "100px";

const Sticky = styled(Column)`
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	height: calc(100% - ${PEAK_HEIGHT});
	justify-content: center;
	align-items: center;
	width: 100%;
	max-height: none;
	z-index: -1;
`;

const Overlay = styled(Column)`
	background-color: pink;
	width: 100%;
	max-height: none;
	z-index: 999;
	padding: ${({ theme }) => theme.spacing.xl};
	padding-top: ${({ theme }) => theme.spacing.sm};
	background-color: ${({ theme }) => theme.color.bg1};
	border-radius: ${({ theme }) => theme.radius.xl};
	box-shadow: 0px 4px 200px rgba(0, 0, 0, 0.25);

	${({ theme }) => theme.mediaWidth.small`
		padding: ${({ theme }) => theme.spacing.sm};
		padding-bottom: 120px;
	`}
`;

const DragDash = styled.div`
	width: 32px;
	height: 6px;
	margin-bottom: ${({ theme }) => theme.spacing.sm};

	background-color: ${({ theme }) => theme.color.bg2};
	border-radius: 100px;

	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

const StyledEmail = styled(Typography.displayS)`
	background: ${({ theme }) => `linear-gradient(180deg, ${theme.color.primary1} 0%, ${theme.color.secondary1} 100%)`};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
`;

const projectInfoList: ProjectInfo[] = [
	{
		title: "Defi Education Fund",
		img: "/images/defi-education.png",
		link: "https://www.defieducationfund.org",
		tags: [ProjectTag.BRAND_IDENTITY],
	},
	{
		title: "Compound Grants",
		img: "/images/compound-grants-branding.png",
		link: "https://compoundgrants.org",
		tags: [ProjectTag.BRAND_IDENTITY],
	},
	{
		title: "Compound Info Dashboard",
		img: "/images/compound-info.png",
		link: "https://compoundfinance.info",
		tags: [ProjectTag.PRODUCT_DESIGN, ProjectTag.ENGINEERING],
	},
	{
		title: "Compound Info Subgraph",
		img: "/images/compound-info-subgraph.png",
		link: "https://thegraph.com/hosted-service/subgraph/papercliplabs/compound-info",
		tags: [ProjectTag.ENGINEERING],
	},
];

export default function Index() {
	const theme = useTheme();
	const stickyRef = useRef<HTMLInputElement>(null);
	const windowSize = useWindowSize();

	// Scroll to inital position on load after short delay
	useEffect(() => {
		const timer = setTimeout(() => {
			if (stickyRef.current && stickyRef.current.parentElement) {
				stickyRef.current.parentElement.scrollTo({ top: window.innerHeight / 4, left: 0, behavior: "smooth" });
			}
		}, 2000);

		return () => clearTimeout(timer);
	});

	const projectTable = useMemo(() => {
		const gap = theme.spacing.lg;
		const numPerRow = NUM_PROJECT_PER_ROW_FOR_SIZE[windowSize];
		const projectCards = projectInfoList.map((projectInfo, i) => {
			return (
				<ProjectCard
					key={i}
					projectInfo={projectInfo}
					width={`calc((100% - ${gap} * (${numPerRow - 1}))/${numPerRow})`}
				/>
			);
		});

		return (
			<Row padding={theme.spacing.md + " 0"} gap={gap} wrapEnabled={true} justify="center" align="streach">
				{projectCards}
			</Row>
		);
	}, [windowSize]);

	function scrollProjects() {
		if (stickyRef.current && stickyRef.current.parentElement) {
			const currentScrollPosition = stickyRef.current.offsetTop;
			const hitHeaderScrollPosition = stickyRef.current.scrollHeight;
			console.log(stickyRef);
			stickyRef.current.parentElement.scrollTo({ top: hitHeaderScrollPosition, left: 0, behavior: "smooth" });
		}
	}

	return (
		<>
			<Sticky ref={stickyRef}>
				<Marquee gradient={false} speed={MARQUEE_SPEED_PX_PER_SECS} direction="left">
					{windowSize == WindowSize.SMALL ? (
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
				</Marquee>
				<PaperclipSpline />
			</Sticky>

			<Overlay gap={theme.spacing.lg}>
				<Column onClick={scrollProjects} isClickable={true}>
					<DragDash />
					<Typography.subHeader color={theme.color.text1}>WE MAKE WEB3 TOOLS</Typography.subHeader>
				</Column>
				{projectTable}
				<ExternalLink href={"mailto: " + EMAIL}>
					<StyledEmail>contact@paperclip.xyz</StyledEmail>
				</ExternalLink>
			</Overlay>
		</>
	);
}
