import React from "react";
import styled, { keyframes } from "styled-components";
import { TIME, URLS } from "@common/constants";
import paperclip from "assets/paperclip.svg";
import Column from "@components/Column";

const pulse = keyframes`
    0% { 
        width: 0%;
        height: 0%;
        background-color: white;
    }
    50% { 
        width: 100%;
        height: 2px;
        background-color: white;
    }
    100% { 
        width: 100%;
        height: 100%
    }
`;

const TvOpen = styled.div`
    animation: ${pulse} calc(${TIME}*1ms-1000ms) ease-in;
    animation-fill-mode: forwards;
    width: 100%;
    height: 100%;
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: " ";
    overflow: hidden;
    z-index: -1;

    background-size: cover;

    color: $color-text;
	}
`;

export default TvOpen;
