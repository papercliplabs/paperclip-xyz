import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

import { Typography } from "@theme";
import { ProjectInfo } from "@common/types";

import Column from "@components/Column";
import { Link } from "@components/Link";

const ProjectImageContainer = styled.div`
	display: block;
	border-radius: ${({ theme }) => theme.radius.md};
	width: 100%;
	overflow: hidden;
	perspective: 1px;
	// filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.3));
	overflow: visable;
`;

const Card = styled.div<{
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
	display: flex;
	flex-direction: ${({ column }) => (column ? "column" : "row")};
	border-radius: ${({ theme }) => theme.radius.lg};
	background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.color.card0};
	height: ${({ height }) => height ?? "100%"};
	width: ${({ width }) => width ?? "100%"};
	padding: ${({ padding, paddingHorizontal, theme }) =>
		padding ? padding + (paddingHorizontal ? " " + paddingHorizontal : "") : theme.spacing.md};
	margin: 0;
	box-shadow: ${({ theme, noShadow }) => (noShadow ? "" : theme.shadow.card)};
	row-gap: 8px;
	${({ theme }) => theme.mediaWidth.small`
		padding: ${theme.spacing.sm};
	`}
	max-height: ${({ maxHeight }) => maxHeight ?? ""};
	max-width: ${({ maxWidth }) => maxWidth ?? ""};
	overflow: hidden;

	:hover {
		background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.color.card1};
		opacity: ${({ backgroundColor }) => (backgroundColor ? 0.8 : 1.0)};
	}

	:active {
		transform: scale(0.95);
		background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.color.card2};
		opacity: ${({ backgroundColor }) => (backgroundColor ? 0.8 : 1.0)};
	}
`;

export function ProjectCard({ projectInfo, width }: { projectInfo: ProjectInfo; width: string }) {
	const theme = useTheme();

	let tagString = "";
	for (let i = 0; i < projectInfo.tags.length; i++) {
		tagString += projectInfo.tags[i];
		if (i != projectInfo.tags.length - 1) {
			tagString += ", ";
		}
	}

	return (
		<Link href={projectInfo.link} width={width} height="auto" disableHoverOpacity>
			<Card noShadow={true}>
				<Column align="flex-start" overflow="visable">
					<ProjectImageContainer>
						<Image
							src={projectInfo.img}
							alt={projectInfo.title}
							layout="responsive"
							width="100%"
							height="54%"
							objectFit="contain"
							placeholder="blur"
						/>
					</ProjectImageContainer>
					<Typography.h3 align="left">{projectInfo.title}</Typography.h3>
					<Typography.body align="left" color={theme.color.text2}>
						{tagString}
					</Typography.body>
				</Column>
			</Card>
		</Link>
	);
}

export default Card;
