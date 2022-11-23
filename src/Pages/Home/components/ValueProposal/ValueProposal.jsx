import { Heading, Flex, Text, Box, Image } from "@chakra-ui/react";
import buildingIcon from "./building-icon.svg";
import qualityIcon from "./quality-icon.svg";
import GoldHeading from "../../../../components/Heading/GoldHeading";
import CustomCard from "./CustomCard";
import CTAGold from "../../../../components/Buttons/CTAGold";
import {
	ViewDesktop,
	ViewTablet,
	ViewMobile,
} from "../../../../components/Breakpoints";
import brochure from "../../../../assets/PRESENTACION 6.pdf";
// import rentabilidadImg from "./rentabilidad.jpeg";
import planoDelComplejo from "./plano-del-complejo.jpeg";
import styled from "@emotion/styled";
const CardsWrapper = styled.div`
	display: flex;
	width: ${(props) => props.width};
	margin-top: ${(props) => props.py};
	margin-bottom: ${(props) => props.py};
	align-items: center;
	justify-content: space-between;
`;
function ValueProposal(props) {
	const proposal = {
		title: "VIVIR EN UN 5 ESTRELLAS",
		subTitle: "ECO HOTEL PRAGMA",
		description: `PRAGMA HOTEL es pionero en la región. Nuestra experiencia y reputación nos convirtieron en el hotel con mayor crecimiento en la zona. El proyecto de renovación de Pragma Hotel está a cargo de la arquitecta y diseñadora Claudia Faena, especialista en wellness y bienestar. Sus diseños tienen una impronta elegante y espectacular.`,
	};
	const cardQuality = {
		icon: qualityIcon,
		title: "CALIDAD Y DISEÑO",
		description:
			"Integramos la naturaleza en espacios armónicos y agradables. Utilizamos materiales y colores con vibraciones positivas para que nuestros huéspedes se sientan como en su casa.",
	};
	const cardBuilding = {
		icon: buildingIcon,
		title: "UBICADO EN AÑELO",
		description:
			"Añelo es la ciudad neuquina sobre la que están puestos los ojos del mundo. Es considerada la capital de Vaca Muerta, la reserva de gas y petróleo no convencional más grande la Argentina y la segunda a nivel mundial.",
	};
	const planoImg = (
		<Flex
			my={{ base: "30px", md: "70px", lg: "100px" }}
			px={{ md: "2%" }}
			w={{ base: "100%" }}
		>
			<Image src={planoDelComplejo} />
		</Flex>
	);
	return (
		<>
			<Box bg='black'>
				<ViewDesktop>
					<Flex alignItems='center' justifyContent='center'>
						<Flex
							flexDirection='column'
							alignItems='center'
							justifyContent='center'
							minH='50vh'
							w='67.5rem'
						>
							<Box
								display='flex'
								flexDirection='column'
								py='2%'
								alignItems='center'
								justifyContent='center'
							>
								<GoldHeading title={proposal.title} />
								<Heading as='h2' color='#cccccc' p='1%'>
									{proposal.subTitle}
								</Heading>
								<Text p='2%' color='#cccccc' textAlign='center'>
									{proposal.description}
								</Text>
							</Box>
							{/*  */}
							<CTAGold
								text='DESCARGAR BROCHURE'
								href={brochure}
								fileName='PRAGMA ECO HOTEL'
							/>
							{/*  */}
							<CardsWrapper width='67.5rem' py='30px'>
								<CustomCard
									width={"45%"}
									heigth={"30vh"}
									textColor={"#cccccc"}
									icon={cardQuality.icon}
									title={cardQuality.title}
									description={cardQuality.description}
								/>
								<CustomCard
									width={"45%"}
									heigth={"30vh"}
									textColor={"#cccccc"}
									icon={cardBuilding.icon}
									title={cardBuilding.title}
									description={cardBuilding.description}
								/>
							</CardsWrapper>
							{planoImg}
							{props.children}
						</Flex>
					</Flex>
				</ViewDesktop>
				<ViewTablet>
					<Flex
						alignItems='center'
						justifyContent='center'
						px={{ base: "5%", md: "0" }}
					>
						<Flex
							flexDirection='column'
							alignItems='center'
							justifyContent='center'
							minH='50vh'
							w='100%'
						>
							<Box
								display='flex'
								flexDirection='column'
								py='2%'
								alignItems='center'
								justifyContent='center'
							>
								<Box pt='10%'>
									<GoldHeading title={proposal.title} />
								</Box>
								<Heading
									as='h2'
									size='2xl'
									color='#cccccc'
									p='1%'
								>
									{proposal.subTitle}
								</Heading>
								<Text p='2%' color='#cccccc' textAlign='center'>
									{proposal.description}
								</Text>
							</Box>
							{/*  */}
							<Box pt={{ base: "5%", md: "0" }}>
								<CTAGold
									text='DESCARGAR BROCHURE'
									href={brochure}
									fileName='PRAGMA ECO HOTEL'
								/>{" "}
							</Box>
							{/*  */}
							<Flex
								w='100%'
								py='30px'
								flexDirection='column'
								align='center'
								justifyContent='center'
							>
								<CustomCard
									width='100%'
									heigth='auto'
									textColor={"#cccccc"}
									icon={cardQuality.icon}
									title={cardQuality.title}
									description={cardQuality.description}
								/>
								<CustomCard
									width='100%'
									heigth='auto'
									textColor={"#cccccc"}
									icon={cardBuilding.icon}
									title={cardBuilding.title}
									description={cardBuilding.description}
								/>
							</Flex>

							{planoImg}
							{props.children}
						</Flex>
					</Flex>
				</ViewTablet>
				<ViewMobile>
					<Flex
						maxW='100%'
						alignItems='center'
						justifyContent='center'
						px={{ base: "5%", md: "0" }}
					>
						<Flex
							flexDirection='column'
							alignItems='center'
							justifyContent='center'
							minH='50vh'
							w='100%'
						>
							<Box
								display='flex'
								flexDirection='column'
								py='2%'
								alignItems='center'
								justifyContent='center'
							>
								<Box pt='10%'>
									<GoldHeading title={proposal.title} />
								</Box>
								<Heading
									as='h2'
									size='2xl'
									color='#cccccc'
									p='1%'
								>
									{proposal.subTitle}
								</Heading>
								<Text p='2%' color='#cccccc' textAlign='center'>
									{proposal.description}
								</Text>
							</Box>
							{/*  */}
							<Box pt={{ base: "5%", md: "0" }}>
								<CTAGold
									text='DESCARGAR BROCHURE'
									href={brochure}
									fileName='PRAGMA ECO HOTEL'
								/>
							</Box>
							{/*  */}
							<Flex
								w={{ base: "100%", md: "67.5rem" }}
								py='30px'
								flexDirection={{ base: "column", md: "row" }}
								align={{ base: "space-between", md: "center" }}
								justifyContent='center'
							>
								<CustomCard
									width={{ base: "100%", md: "45%" }}
									heigth={{ base: "auto", md: "30vh" }}
									textColor={"#cccccc"}
									icon={cardQuality.icon}
									title={cardQuality.title}
									description={cardQuality.description}
								/>
								<CustomCard
									width={{ base: "100%", md: "45%" }}
									heigth={{ base: "auto", md: "30vh" }}
									textColor={"#cccccc"}
									icon={cardBuilding.icon}
									title={cardBuilding.title}
									description={cardBuilding.description}
								/>
							</Flex>
							{planoImg}
							{props.children}
						</Flex>
					</Flex>
				</ViewMobile>
			</Box>
		</>
	);
}

export default ValueProposal;
