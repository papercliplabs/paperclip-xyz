import React from "react";
import styled, { keyframes } from "styled-components";

import paperclip from "assets/paperclip.svg";
import Column from "@components/Column";

const slideup = keyframes`
    0% {margin-bottom:-300px;}
    5% {margin-bottom:-200px;}
    33% {margin-bottom:-200px;}
    38% {margin-bottom:-100px;}
    66% {margin-bottom:-100px;}
    71% {margin-bottom:0px;}
    100% {margin-bottom:0px;}
`;

const SlideUp = styled.div`
    animation: ${slideup} 5000ms ease-in infinite;
    display: block;
    width: 100%;
    height: 100%;
    
    position: fixed;
    content: " ";
    overflow: hidden;
    z-index: -1;

    background-size: cover;

    color: $color-text;
	}
`;

export default SlideUp;



