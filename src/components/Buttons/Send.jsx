import React from "react";
import styled from "styled-components";

const Button = styled.button`
	background-color: ${(props) => props.bg};
	border-radius: 3px;
	letter-spacing: 2px;
	border: 2px solid ${(props) => props.borderColor};
	color: ${(props) => props.color};
	padding: 0.25em 1em;
	text-transform: uppercase;
	transition: all 0.5s ease;
	&:hover {
		transition: all 0.5s ease;
		background-color: black;
		color: white;
	}
	float: ${(props) => props.float};
`;

function Send(props) {
	const { children, onClick } = props;
	return (
		<Button
			onClick={onClick}
			bg='trasparent'
			color='#997e1e'
			borderColor='#997e1e'
			type='button'
			float={props.float ? props.float : "left"}
		>
			{children}
		</Button>
	);
}

export default Send;
