import Hero from "../components/Hero/Hero";
import ecoHotel from "../assets/img/ecoHotel.jpg";
import helicopter from "../assets/img/ecoHotelOutside-helicopter.jpg";
import { Flex, Text, Img } from "@chakra-ui/react";

function Home() {
	return (
		<>
			<Hero
				img={ecoHotel}
				alt='Eco Hotel'
				bg='white'
				position='right'
			></Hero>
			{/*  */}
			<Hero
				img={helicopter}
				alt='Eco Hotel'
				bg='white'
				position='left'
			></Hero>
		</>
	);
}

export default Home;

// Look after: how to make it with Parallax
{
	/* <Flex h='90vh' w='full'>
				<Flex w='50%' flexDirection='column' bg='red.100'>
					<Flex
						height={"90vh"}
						alignItems={"center"}
						justifyContent='center'
						width='100%'
					>
						<Text color='white'>HOLISS</Text>
					</Flex>
				</Flex>
				<Flex w='50%'>
					<Parallax
						style={{
							heigth: "50vh",
							position: "relative",
							width: "100%",
						}}
						strength={800}
						bgImage={ecoHotel}
					>
						<Flex
							height={"50vh"}
							alignItems={"center"}
							justifyContent='center'
							width='100%'
						>
							<Text color='white'>HOLISS</Text>
						</Flex>
					</Parallax>
				</Flex>
			</Flex> */
}
