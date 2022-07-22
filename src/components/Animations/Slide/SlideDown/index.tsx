import React from "react";
import styled, { keyframes } from "styled-components";

import paperclip from "assets/paperclip.svg";
import Column from "@components/Column";

const slidedown = keyframes`
    0% {margin-top:-300px;}
    5% {margin-top:-200px;}
    33% {margin-top:-200px;}
    38% {margin-top:-100px;}
    66% {margin-top:-100px;}
    71% {margin-top:0px;}
    100% {margin-top:0px;}
`;

const SlideDown = styled.div`
    animation: ${slidedown} 5000ms ease-in infinite;
    display: block;
    width: 100%;
    height: 100%;
    
    position: fixed;
    content: " ";
    overflow: hidden;

    background-size: cover;

    color: $color-text;
	}
`;

export default SlideDown;



