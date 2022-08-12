import React, { useEffect, useMemo, useRef } from "react";
import styled, { useTheme } from "styled-components";
import Marquee from "react-fast-marquee";

import Row from "@components/Row";
import Column from "@components/Column";
import PaperclipSpline from "@components/PaperclipSpline";
import { ProjectCard } from "@components/Card";
import { ContactButton } from "@components/Button";

import { Typography } from "@theme";
import { EMAIL, URLS } from "@common/constants";
import { useWindowSize } from "@common/hooks";
import { ProjectInfo } from "@common/types";
import { ProjectTag, WindowSize } from "@common/enums";

import defiEducationFundImg from "@images/defi-education.png";
import compoundGrantsBrandingImg from "@images/compound-grants-branding.png";
import mapleFinanceSubgraphImg from "@images/maple-finance-subgraph.png";
import compoundInfoDashboardImg from "@images/compound-info.png";
import dydxGrantsImg from "@images/dydx-grants.png";
import reverieImg from "@images/reverie.png";
import compoundInfoSubgraphImg from "@images/compound-info-subgraph.png";
import iPledgeAllegianceImg from "@images/i-pledge-allegiance.png";
import twitterImg from "@images/twitter.svg";
import emailImg from "@images/email.svg";

const MARQUEE_SPEED_PX_PER_SECS = 50;
const NUM_PROJECT_PER_ROW_FOR_SIZE = [1, 2, 3]; // small, medium, large
const PEAK_HEIGHT = "100px";

const Sticky = styled(Column)`
	position: sticky;
	// position: -webkit-sticky;
	top: 0;
	height: calc(100% - ${PEAK_HEIGHT});
	justify-content: center;
	align-items: center;
	width: 100%;
	max-height: none;
	z-index: -1;
	-webkit-transform: translate3d(0, 0, 0);
`;

const Overlay = styled(Column)`
	background-color: pink;
	width: 100%;
	max-height: none;
	z-index: 999;
	padding: ${({ theme }) => theme.spacing.xl};
	padding-top: ${({ theme }) => theme.spacing.sm};
	background-color: ${({ theme }) => theme.color.bg1};
	border-radius: ${({ theme }) => theme.radius.xl} ${({ theme }) => theme.radius.xl} 0 0;
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

	background-color: ${({ theme }) => theme.color.text1};
	border-radius: 100px;
	opacity: 0.1;

	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

const PaperclipGradientText = styled(Typography.h4)`
	background: ${({ theme }) => theme.color.paperclipGradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
`;

const BottomButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 24px;
	margin-bottom: 42px;
	gap: 32px;
`;

const Trademark = styled(Typography.h5)`
	background: ${({ theme }) => theme.color.text5};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
`;

const projectInfoList: ProjectInfo[] = [
	{
		title: "dYdX Grants",
		img: dydxGrantsImg,
		link: "https://www.dydxgrants.com/",
		tags: [ProjectTag.BRAND_IDENTITY],
	},
	{
		title: "Defi Education Fund",
		img: defiEducationFundImg,
		link: "https://www.defieducationfund.org",
		tags: [ProjectTag.BRAND_IDENTITY],
	},
	{
		title: "Compound Grants",
		img: compoundGrantsBrandingImg,
		link: "https://compoundgrants.org/branding-compound-grants",
		tags: [ProjectTag.BRAND_IDENTITY],
	},
	{
		title: "Reverie",
		img: reverieImg,
		link: "https://www.reverie.ooo/",
		tags: [ProjectTag.BRAND_IDENTITY],
	},
	{
		title: "I Pledge Allegiance ",
		img: iPledgeAllegianceImg,
		link: "https://open.spotify.com/show/4mTiWTYpcHcX5ZU6cRng9B?si=1788f38c17134d79",
		tags: [ProjectTag.BRAND_IDENTITY],
	},
	{
		title: "Compound Info Dashboard",
		img: compoundInfoDashboardImg,
		link: "https://compoundfinance.info",
		tags: [ProjectTag.PRODUCT_DESIGN, ProjectTag.ENGINEERING],
	},
	{
		title: "Compound Info Subgraph",
		img: compoundInfoSubgraphImg,
		link: "https://thegraph.com/hosted-service/subgraph/papercliplabs/compound-info",
		tags: [ProjectTag.SUBGRAPH_ENGINEERING],
	},
	{
		title: "Maple Finance Subgraph",
		img: mapleFinanceSubgraphImg,
		link: "https://thegraph.com/hosted-service/subgraph/messari/maple-finance-ethereum ",
		tags: [ProjectTag.SUBGRAPH_ENGINEERING],
	},
];

export default function Index() {
	const theme = useTheme();
	const stickyRef = useRef<HTMLInputElement>(null);
	const windowSize = useWindowSize();

	// Scroll to inital position on load after short delay
	useEffect(() => {
		// Scroll to top on load/refresh
		window.scrollTo(0, 0);
		if (stickyRef.current && stickyRef.current.parentElement) {
			stickyRef.current.parentElement.scrollTo({ top: 0, left: 0, behavior: "auto" });
		}

		const timer = setTimeout(() => {
			// If still at the top of page after short time, pop up the project cards so user knows they can scroll
			if (stickyRef.current && stickyRef.current.parentElement && stickyRef.current.parentElement.scrollTop == 0) {
				stickyRef.current.parentElement.scrollTo({ top: window.innerHeight / 8, left: 0, behavior: "smooth" });
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

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
	}, [windowSize, theme.spacing]);

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
						<Typography.hero color={theme.color.white}>
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
						</Typography.hero>
					) : (
						<Typography.hero color={theme.color.white}>
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
							PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS • PAPERCLIP LABS •
						</Typography.hero>
					)}
				</Marquee>
				<PaperclipSpline />
			</Sticky>

			<Overlay gap={theme.spacing.lg}>
				<Column onClick={scrollProjects} isClickable={true}>
					<DragDash />
					<Typography.h4 color={theme.color.text1}>WE MAKE WEB3 TOOLS</Typography.h4>
				</Column>
				{projectTable}
				<Column gap={theme.spacing.sm} padding={theme.spacing.xl + " 0"}>
					<PaperclipGradientText>CONTACT US</PaperclipGradientText>
					<Typography.h2>
						Want to work together?
						{windowSize == WindowSize.SMALL ? <br /> : " "}
					</Typography.h2>
					<Typography.h2>
						Send us a message.
						{windowSize == WindowSize.SMALL ? <br /> : " "}
					</Typography.h2>
					<BottomButton>
					<ContactButton
						img={twitterImg}
						text="DM us on Twitter"
						link={URLS.TWITTER}
						backgroundColor={theme.color.twitter}
					/>
					<ContactButton
						img={emailImg}
						text="Email us "
						link={"mailto: " + EMAIL}
					/>
					</BottomButton>
					<Trademark>
						
						Paperclip Labs a Web3 company
						{windowSize == WindowSize.SMALL ? <br /> : " "}
					</Trademark>
				</Column>
			</Overlay>
		</>
	);
}
