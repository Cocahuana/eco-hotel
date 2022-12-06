import { Flex, Image, Box, Button, Text } from "@chakra-ui/react";
import { Parallax, Background } from "react-parallax";
import ecoHotelImg from "../../../../assets/img/ecoHotel.jpg";
import ecoHotel_dia from "./ecoHotel-dia.jpg";
import skyBg from "./skyBg.jpg";
import { useContext } from "react";
import { themeContext } from "../../../../context/themeContext";
import hotelEntero from "../../../../assets/img/pragma4.jpg";
import hotelCieloDia from "./hotelCieloDia.png";
import hotelCieloNoche from "./hotelCieloNoche.png";
import luna from "./luna.png";

const goodParallax = (
	<Parallax
		style={{ height: "100%", width: "100%" }}
		bgImage={ecoHotelImg}
		bgImageAlt='Eco hotel landsadasding'
		strength={500}
	>
		<Box
			h={{ base: "100vh" }}
			w={{ base: "100%" }}
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<Flex
				align='center'
				justifyContent='center'
				w={{ base: "100%", lg: "75%" }}
				h={{ base: "100%", lg: "75vh" }}
				flexDirection='column'
				bg='red.700'
			>
				<Text as='h1' color='white'>
					Soy el nuevo Hero
				</Text>
				<Image h='100px' w='100px' src={ecoHotelImg} />
			</Flex>
		</Box>
	</Parallax>
);

const whatsappLink =
	"https://api.whatsapp.com/send?phone=5491150481966&text=Contacto:%20Eco%20Hotel%20Pragma";

function HeroLanding(props) {
	const theme = useContext(themeContext);
	return (
		<Flex h={props.h} w={props.w}>
			<Parallax
				style={{ height: "100%", width: "100%" }}
				bgImage={hotelCieloDia}
				bgImageAlt='Eco hotel sky'
				strength={-300}
			>
				<Box
					h={{ base: "100vh" }}
					w={{ base: "100%" }}
					display='flex'
					alignItems='center'
					justifyContent='center'
					bg='rgba(0,0,0,0.55)'
				>
					<Flex
						align='center'
						justifyContent='center'
						w={{ base: "100%", xl: "75%" }}
						h={{ base: "100%", lg: "50vh" }}
						px={{ base: "1.5rem", xl: 0 }}
						flexDirection={{ base: "column-reverse", xl: "row" }}
					>
						<Flex
							w='100%'
							borderRight={{
								base: "0px",
								xl: `2px solid ${theme.accent1_active}`,
							}}
							borderTop={{
								base: `2px solid ${theme.accent1_active}`,
								xl: "0px",
							}}
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							color='white'
							py={{ base: "1rem", xl: "0px" }}
							h={{ sm: "40%", xl: "100%" }}
						>
							<Text
								fontSize={{ base: "2rem", md: "3rem" }}
								color='red.500'
								textDecoration='line-through'
								fontWeight='bold'
							>
								U$ 100000
							</Text>
							<Flex>
								<Text
									fontSize={{ base: "4rem", md: "6rem" }}
									fontWeight='bold'
								>
									U$
								</Text>
								<Text
									fontSize={{ base: "5rem", md: "11rem" }}
									fontWeight='bold'
								>
									95k
								</Text>
							</Flex>
							<Button
								bg='#FFDD00'
								w='15rem'
								h='2.7rem'
								color='black'
								fontWeight='bold'
								fontFamily={theme.ff.bold}
								fontSize='1.5rem'
								as='a'
								href={whatsappLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								Quiero contactarlos!
							</Button>
						</Flex>
						<Flex
							w='100%'
							flexDirection='column'
							justifyContent={{
								base: "space-evenly",
								lg: "flex-start",
							}}
							alignItems='center'
							textAlign={{ base: "center", xl: "left" }}
							py='10px'
							px='20px'
							// bg='violet'
							h={{ base: "50vh", md: "auto" }}
						>
							<Text
								color='white'
								fontSize={{ base: "2.5rem", md: "4rem" }}
								w='100%'
								fontWeight='bold'
							>
								INVERSIÓN PREVENTA:
							</Text>

							<Text
								color='#FFDD00'
								fontSize={{ base: "2rem", md: "3rem" }}
								fontFamily={theme.ff.bold}
								w='100%'
							>
								ANTES DEL 15.12.2022
							</Text>
							<Text
								color='white'
								fontSize={{ base: "1.8rem", md: "3rem" }}
								w='100%'
								fontWeight='800'
							>
								3 AMB + Cochera!
							</Text>
							<Flex>
								<Text
									color='#FFDD00'
									fontSize={{ base: "5rem", md: "10rem" }}
									w='100%'
									fontWeight='bold'
									// bg='blue'
									display='flex'
									justifyContent='center'
									alignItems='center'
								>
									16%
								</Text>
								<Text
									color='white'
									fontSize={{ base: "2rem", md: "4rem" }}
									w='100%'
									fontWeight='bold'
									// bg='red'
									display='flex'
									justifyContent='center'
									alignItems='center'
									textAlign='center'
								>
									Rendimiento Anual!
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Parallax>
		</Flex>
	);
}

export default HeroLanding;
