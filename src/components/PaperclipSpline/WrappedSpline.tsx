import { Spline } from "@splinetool/react-spline";
import { Ref } from "react";

export function WrappedSpline({ splineRef, scene }: { splineRef: any; scene: string }) {
	return <Spline ref={splineRef} scene={scene} />;
}
