import styled from "styled-components";

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	width: ${({ width }) => width ?? "100%"};
	height: ${({ height }) => height ?? "auto"};
	max-height: ${({ maxHeight }) => maxHeight ?? "min-content"};
	justify-content: ${({ justify }) => justify ?? "flex-start"};
	align-items: ${({ align }) => align ?? "center"};
	padding: ${({ padding }) => padding ?? "0"};
	border: ${({ border }) => border};
	border-radius: ${({ borderRadius }) => borderRadius};
	margin: ${({ margin }) => margin ?? "0"};
	column-gap: ${({ gap, theme }) => gap ?? theme.spacing.xs};
	row-gap: ${({ gap, theme }) => gap ?? theme.spacing.xs};
	overflow: ${({ overflow }) => overflow ?? "hidden"};
`;

export default Row;
