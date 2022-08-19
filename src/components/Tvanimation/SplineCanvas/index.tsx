import React from "react";
import styled, { keyframes } from "styled-components";

import paperclip from "assets/paperclip.svg";
import Column from "@components/Column";

const PEAK_HEIGHT = "200px";

const pulse = keyframes`
    0% { 
        width: 100%;
        height: calc(100% - ${PEAK_HEIGHT});
    }
    100% { 
        display: flex;
        width: 100%;
        height: calc(100% - ${PEAK_HEIGHT});

    }
`;

const CanvasSpline = styled.div`
    // animation: ${pulse} 2000ms ease-in;
    // animation-fill-mode: forwards;

    height: calc(100% - ${PEAK_HEIGHT});
`;

export default CanvasSpline;