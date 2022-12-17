import React from "react";
import styled, { keyframes } from "styled-components";

import paperclip from "assets/paperclip.svg";
import Column from "@components/Column";

const PEAK_HEIGHT = "100px";

const CanvasSpline = styled.div`

    height: calc(100% - ${PEAK_HEIGHT});
`;

export default CanvasSpline;