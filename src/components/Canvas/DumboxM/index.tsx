import React from "react";
import styled, { keyframes } from "styled-components";

import paperclip from "assets/paperclip.svg";
import Column from "@components/Column";

const PEAK_HEIGHT = "100px";

const DumbBox = styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - ${PEAK_HEIGHT});
`;

export default DumbBox;