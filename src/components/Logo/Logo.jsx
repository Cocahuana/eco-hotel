import { Text, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
const Cuadraditos = styled.div`
	background: linear-gradient(
		to right,
		${(props) => props.bg} 0% 50%,
		black 50% 100%
	);
	width: 30px;
	height: 20px;
`;
function Logo(props) {
	const theme = useContext(themeContext);
	const { w, h } = props;
	return (
		<>
			<Flex
				w={w ? w : "226px"}
				h={h ? h : "80px"}
				justifyContent='space-around'
				alignItems='center'
				flexDirection='column'
				my='8px'
			>
				<Flex
					alignItems='center'
					w='100%'
					justifyContent='space-between'
				>
					<Cuadraditos bg='#D3423F' />
					<Cuadraditos bg='#467DB5' />
					<Cuadraditos bg='#812882' />
					<Cuadraditos bg='#E28A1C' />
					<Cuadraditos bg='#D44074' />
					<Cuadraditos bg='#808F4E' />
				</Flex>
				<Flex mt='-2'>
					<Text
						fontSize='32px'
						color='black'
						fontFamily={theme.ff.bold}
					>
						ECO HOTEL
					</Text>
				</Flex>
				<Flex mt='-4'>
					<Text
						fontSize='1.8rem'
						color='black'
						fontFamily={theme.ff.bold}
					>
						PRAGMA
					</Text>
				</Flex>
			</Flex>
		</>
	);
}

export default Logo;
