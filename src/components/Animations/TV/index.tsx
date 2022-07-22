import React from "react";
import styled, { keyframes } from "styled-components";

import paperclip from "assets/paperclip.svg";
import Column from "@components/Column";

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
        height: 100%
    }
`;

const TvOpen = styled.div`
    animation: ${pulse} 1000ms ease-in infinite;
    display: block;
    width: 100%;
    height: 100%;
    $color-text: #e1eef6;
    $color-link: #ff5f2e;
    $color-link-hover: #fcbe32;
    
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



