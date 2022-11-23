import styled from "@emotion/styled";
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: ${(props) => props.flexDirection};
	height: ${(props) => props.height};
	color: ${(props) => props.color};
	background-color: ${(props) => props.bg};
	padding-right: ${(props) => props.px};
	padding-left: ${(props) => props.px};
	padding-top: ${(props) => props.py};
	padding-bottom: ${(props) => props.py};
`;
function Section(props) {
	return (
		<Wrapper
			flexDirection={props.flexDirection}
			height={props.height}
			color={props.color}
			bg={props.bg}
			px={props.px}
			py={props.py}
		>
			{props.children}
		</Wrapper>
	);
}

export default Section;
