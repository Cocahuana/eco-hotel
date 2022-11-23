import styled from "styled-components";
const Wrapper = styled.div`
	padding: 10px;
	border: solid 2px #ccc;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 1.5rem;
`;
const Bold = styled.h3`
	font-weight: bold;
`;
const Color = styled.h3`
	color: ${(props) => props.color};
`;
const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${(props) => props.flexDirection};
	margin-left: ${(props) => props.my};
	margin-right: ${(props) => props.my};
`;
function EarlyInvestment(props) {
	// const { title, date, subTitle, price, ROI } = props;
	return (
		<Wrapper>
			{/* <Title>{title}</Title>
			<Date>{date}</Date>
			<SubTitle>{subTitle}</SubTitle>
			<Price>{price}</Price>
			<Roi>{ROI}</Roi> */}
			<Color color='#cccccc'>
				<Bold>INVERSIÓN TEMPRANA</Bold>
			</Color>
			<Color color='#997e1e'>ANTES DEL 15/12/2022</Color>
			<Flex flexDirection='column' my='10px'>
				<Color color='#cccccc'>
					<div>INVERSIÓN</div>
					<div>3 AMB + COCHERA</div>
				</Color>
				<div>
					<Color color='#997e1e'>U$S 75.000</Color>
				</div>
			</Flex>
			<Flex flexDirection='column'>
				<Color color='#997e1e'>
					<Bold>
						<h3>RENDIMIENTO ANUAL</h3>
						<h3>20%</h3>
					</Bold>
				</Color>
			</Flex>
		</Wrapper>
	);
}

export default EarlyInvestment;
// "earlyInvestment": {
// 		"title": "INVERSIÓN TEMPRANA",
// 		"date": "ANTES DEL 15/12/2022",
// 		"subTitle": "INVERSIÓN 3 AMB + COCHERA",
// 		"price": "U$S 75.000",
// 		"ROI": "RENDIMIENTO ANUAL 20%"
// 	}
