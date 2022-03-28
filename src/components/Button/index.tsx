import React from "react";
import { useTheme } from "styled-components";

import { Typography } from "@theme";

import Row from "@components/Row";
import { Link } from "@components/Link";
import Card from "@components/Card";
import Icon from "@components/Icon";

import linkImg from "@images/link.svg";

export function ContactButton({
	img,
	text,
	link,
	backgroundColor,
}: {
	img: string;
	text: string;
	link: string;
	backgroundColor?: string;
}) {
	const theme = useTheme();

	return (
		<Link href={link} width="100%" maxWidth={theme.mediaQuerySizes.small + "px"} disableHoverOpacity>
			<Card backgroundColor={backgroundColor} padding={theme.spacing.sm}>
				<Row justify="space-between">
					<Row>
						<Icon src={img} alt={text} size="48px" padding="12px" isButton={false} />
						<Typography.body>{text}</Typography.body>
					</Row>
					<Icon src={linkImg} alt="Link img" size="48px" padding="12px" isButton={false} />
				</Row>
			</Card>
		</Link>
	);
}
