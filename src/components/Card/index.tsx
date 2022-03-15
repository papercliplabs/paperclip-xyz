import React from "react";
import styled, { useTheme } from "styled-components";

import { Typography } from "theme";
import Row from "components/Row";
import Column from "components/Column";
import Image from "next/image";
import { ProjectInfo } from "common/types";
import { ExternalLink } from "components/Link";

const ProjectImageContainer = styled.div`
	display: block;
	border-radius: ${({ theme }) => theme.radius.md};
	width: 100%;
	overflow: hidden;
`;

const Card = styled.div<{
	column?: boolean;
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
	background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.color.bg1};
	height: ${({ height }) => height ?? "100%"};
	width: ${({ width }) => width ?? "100%"};
	padding: ${({ padding, paddingHorizontal, theme }) =>
		padding ? padding + (paddingHorizontal ? " " + paddingHorizontal : "") : theme.spacing.md};
	margin: 0;
	box-shadow: ${({ theme }) => theme.shadow.card};
	row-gap: 8px;
	${({ theme }) => theme.mediaWidth.small`
		padding: ${theme.spacing.md};
	`}
	max-height: ${({ maxHeight }) => maxHeight ?? ""};
	max-width: ${({ maxWidth }) => maxWidth ?? ""};
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
		<Card backgroundColor={theme.color.bg2} padding={theme.spacing.sm} width={width} height="auto" maxWidth="600px">
			<ExternalLink href={projectInfo.link} fillParent={true}>
				<Column align="flex-start">
					<ProjectImageContainer>
						<Image
							src={projectInfo.img}
							alt={projectInfo.title}
							layout="responsive"
							width="100%"
							height="54%"
							objectFit="contain"
						/>
					</ProjectImageContainer>
					<Typography.heading align="left">{projectInfo.title.toUpperCase()}</Typography.heading>
					<Typography.body align="left" color={theme.color.text2}>
						{tagString}
					</Typography.body>
				</Column>
			</ExternalLink>
		</Card>
	);
}

export default Card;
