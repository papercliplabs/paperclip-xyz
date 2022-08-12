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
		<Link href={link} width ="225px" height ="56px" disableHoverOpacity>
			<Card backgroundColor={backgroundColor} padding={theme.spacing.md} line-height = "225px" max-width ="225px">
				<Row justify="space-between" align-items="center">
				<Icon src={img} alt={text} size="45px" padding="6px 3px" isButton={false} />
					<Row align-items="center" white-space="nowrap" text-align ="center" justify="space-between" padding="12px">
						<Typography.body>{text}</Typography.body>
					</Row>
					{/* <Icon src={linkImg} alt="Link img" size="48px" isButton={false} /> */}
				</Row>
			</Card>
		</Link>
	);
}
