import React, { forwardRef } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const WrappedSpline = dynamic(() => import("./WrappedSpline").then((mod: any) => mod.WrappedSpline), {
	ssr: false,
});

const Spline = forwardRef((props: any, ref: any) => {
	return <WrappedSpline {...props} splineRef={ref} />;
});

const Background = styled.div`
	display: flex;
	justify-content: center;
	z-index: 999;
	position: absolute;
	pointer-events: none;
	max-width: 100%;
	overflow: hidden;
`;

export default function PaperclipSpline() {
	return (
		<Background>
			<Spline scene="/paperclip.spline" />
		</Background>
	);
}
