import React from 'react'
import styled from 'styled-components'

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 40px;

	> * {
		max-width: 1200px;
	}
`;

const WelcomeMessage = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 200px;	
`;

export default function App() {
	return (
		<StyledApp>
			<WelcomeMessage>Welcome to Paperclip labs</WelcomeMessage>
		</StyledApp>
	);
}
