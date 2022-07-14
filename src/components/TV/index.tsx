import React from "react";
import styled, { keyframes } from "styled-components";

import Column from "@components/Column";

const Screen = styled.a<{
	width?: string;
	height?: string;
	maxWidth?: string;
	disableHoverOpacity?: boolean;
}>`
    $color-text: #e1eef6;
    $color-link: #ff5f2e;
    $color-link-hover: #fcbe32;
    $black: #111111;

    body {
    font-family: sans-serif;
    background-color: $black;
    }
    
    background-color: $color-text;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    content: " ";
    overflow: hidden;

    // Fallback for old browsers
    background: #16222A;

    background: -webkit-linear-gradient(to left, #16222A , #3A6073);
    background: linear-gradient(to left, #16222A , #3A6073);

    background-size: cover;

    color: $color-text;
	}
`;

const pulse = keyframes`
    0% { 
        width: 0%;
        height: 0%;
    }
    50% { 
        width: 100%;
        height: 2px;
    }
    100% { 
        width: 100%;
        height: 100%;
    }
`;

const AnimatedImg = styled.div`
    animation: ${pulse} 1000ms ease-in;
    display: block;
    width: 100%;
    height: 100%;
`;

const DumbBox = styled.div`
    display: flex;
    background-color: red;
    width: 100%;
    height: 100%;
`;

export default function Loader({ size }: { size: string }): JSX.Element {
    return (
        <Column width="100%" height="100%" align="center" justify="center">
            <Screen>
            <AnimatedImg>
                <DumbBox />
            </AnimatedImg>
            </Screen>
        </Column>
    );
}