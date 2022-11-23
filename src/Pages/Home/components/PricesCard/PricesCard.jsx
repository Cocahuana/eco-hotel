import styled from "styled-components";

const Wrapper = styled.div`
	padding: 10px;
	text-align: center;
`;
const Title = styled.h3`
	color: #cccccc;
	font-weight: bold;
	font-size: 1.5rem;
`;
const SubTitle = styled.h3`
	color: #cccccc;
	font-size: 1.5rem;
`;
const Price = styled.h3`
	color: #997e1e;
	font-weight: bold;
	font-size: 1.5rem;
`;

function PricesCard(props) {
	const { title, subTitle, price } = props;
	return (
		<Wrapper>
			<Title>{title}</Title>
			<SubTitle>{subTitle}</SubTitle>
			<Price>{price}</Price>
		</Wrapper>
	);
}

export default PricesCard;
