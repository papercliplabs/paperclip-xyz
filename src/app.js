import React from "react";
import styled, { useTheme } from "styled-components";

import Button from "components/Button";
import Row from "components/Row";
import Column from "components/Column";
import PaperclipLogo from "components/PaperclipLogo";
import { ExternalLink, ExternalLinkWrapper } from "components/Link";
import { Typography } from "theme";
import { URLS } from "common/constants";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 40px;
	width: 100%;
	padding: ${({ theme }) => theme.spacing.md};
	margin: 100px 0;
	> * {
		max-width: 1200px;
	}
`;

const CenterColumn = styled(Column)`
	max-width: ${({ theme }) => theme.mediaQuerySizes.small};
	overflow: visible;
`;

export default function App() {
	const theme = useTheme();
	return (
		<StyledApp>
			<CenterColumn justify="flex-start" gap={theme.spacing.xl}>
				<PaperclipLogo />
				<Row justify="center" gap={theme.spacing.lg}>
					<ExternalLinkWrapper href={URLS.TWITTER} target="_blank" flex={1}>
						<Button variant="secondary">TWITTER</Button>
					</ExternalLinkWrapper>
					<ExternalLinkWrapper href={URLS.GITHUB} target="_blank" flex={1}>
						<Button>GITHUB</Button>
					</ExternalLinkWrapper>
				</Row>
				<Typography.displayS align="center">
					WE DESIGN AND BUILD TOOLS FOR DEFI AND WEB3. WANT TO WORK TOGETGER?{" "}
					<ExternalLink href={URLS.TWITTER}>CONTACT@PAPERCLIP.XYZ</ExternalLink>
				</Typography.displayS>
			</CenterColumn>
		</StyledApp>
	);
}
