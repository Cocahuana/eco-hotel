import Hero from "../../components/Hero/Hero";
import ecoHotelImg from "../../assets/img/ecoHotel.jpg";
import HeroContent from "./components/HeroContent";
import ValueProposal from "./components/ValueProposal/ValueProposal";
import Paths from "../../data/paths.json";
import Section from "../../components/Section/Section";
import PricesCard from "./components/PricesCard/PricesCard";
import Prices from "./Data/Prices.json";
import EarlyInvestment from "./components/EarlyInvestment";
import styled from "styled-components";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
const ecoHotel = {
	title: "ECO HOTEL",
	subTitle: "Tu mejor experiencia en Vaca Muerta",
	description: `Añelo es la ciudad neuquina sobre la que están puestos los ojos del mundo. Es considerada la capital de Vaca Muerta, la reserva de gas y petróleo no convencional más grande la Argentina y la segunda a nivel mundial.`,
};

const PromotionText = styled.h3`
	color: #cccccc;
	font-weight: bold;
	font-size: 1.5rem;
`;

function Home() {
	const { ourServices, gallery, location, contact } = Paths;
	const { PricesInfo, earlyInvestment } = Prices;
	return (
		<>
			<Hero img={ecoHotelImg} alt='Eco Hotel' bg='white' position='right'>
				<HeroContent
					title={ecoHotel.title}
					subTitle={ecoHotel.subTitle}
					description={ecoHotel.description}
					position='right'
				/>
			</Hero>
			{/* <Hero img={ecoHotelImg} alt='Eco Hotel' bg='white' position='left'>
				<HeroContent
					title={ecoHotel.title}
					subTitle={ecoHotel.subTitle}
					description={ecoHotel.description}
					position='left'
				/>
			</Hero> */}
			<section id={ourServices.id} style={{ width: "100%" }}>
				<ValueProposal>
					<Flex bg='#997e1e' w='100%' h='1px'></Flex>
					<Heading
						as='h2'
						m={5}
						color='#cccccc'
						size={{ base: "md", md: "xl" }}
						w='100%'
						textAlign='center'
					>
						EN SOLO 6 MESES EMPIEZA EL RETORNO DE TU INVERSION
					</Heading>
					<Flex
						w='100%'
						align='center'
						justifyContent='space-evenly'
						flexDirection={{ base: "column", md: "row" }}
						p={4}
					>
						{PricesInfo.map((card) => (
							<PricesCard
								title={card.title}
								subTitle={card.subTitle}
								price={card.price}
							/>
						))}

						<EarlyInvestment
							title={earlyInvestment.title}
							date={earlyInvestment.date}
							subTitle={earlyInvestment.subTitle}
							price={earlyInvestment.price}
							ROI={earlyInvestment.ROI}
						/>
					</Flex>
					<Flex
						w='95%'
						alignContent='center'
						justifyContent='flex-start'
						flexDirection='column'
					>
						<PromotionText>Distribución:</PromotionText>
						<Text color='#cccccc' fontSize='1.5rem'>
							2 habitaciones - 2 baños - living comedor - Cocina -
							Balcón terraza con parrilla
						</Text>
						<Box pt='10px'>
							<PromotionText>
								DEPARTAMENTO TOTALMENTE EQUIPADO
							</PromotionText>
						</Box>
					</Flex>
				</ValueProposal>
			</section>
			<Section px={"2%"} py={"2%"} flexDirection='column'></Section>
			<Section px={5} py={5} bg='black'>
				<Heading as='h2'>Dummy Section</Heading>
			</Section>
		</>
	);
}

export default Home;
