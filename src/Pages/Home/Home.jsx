import Hero from "../../components/Hero/Hero";
import HeroContent from "./components/HeroContent";
import ValueProposal from "./components/ValueProposal/ValueProposal";
import Paths from "../../data/paths.json";
import Section from "../../components/Section/Section";
import PricesCard from "./components/PricesCard/PricesCard";
import Prices from "./Data/Prices.json";
import EarlyInvestment from "./components/EarlyInvestment";
import styled from "styled-components";
import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import imgActividadDeportiva2 from "./components/Servicios/assets/actividad-deportiva-bajada.jpg";
import imgActividadDeportivaCancha from "./components/Servicios/assets/actividad-deportiva.jpg";
import imgDesayuno from "./components/Servicios/assets/desayuno.jpg";
import imgRestaurant from "./components/Servicios/assets/restaurant.jpg";
import imgCoWorking2 from "./components/Servicios/assets/espacios-trabajo-bajada.jpg";
import imgCoWorking from "./components/Servicios/assets/espacios-trabajo.jpg";
import ServiciosSection from "./components/Servicios/ServiciosSection";
import ServiciosContent from "./components/Servicios/ServiciosContent";
import HeroLanding from "./components/HeroLanding/HeroLanding";
import fondoBlanco from "./components/HeroLanding/fondoBlanco.jpeg";
import Contactanos from "./components/Contactanos";
import { themeContext } from "../../context/themeContext";
import housingImg from "./components/HeroLanding/housing.jpg";
import inversionImg from "./components/HeroLanding/inversionImg.jpg";
import construccionImg from "./components/HeroLanding/construccionImg.jpg";
import ecoHotelImg from "../../assets/img/ecoHotel.jpg";
import { useContext } from "react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

import {
	colorDesarrollo,
	colorEcoHotel,
	colorConstrucciones,
	colorHousing,
} from "../../components/UnidadNegocioBar/ColoresNegocio/Colores";
import ContactForm from "./components/ContactForm/ContactForm";
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
	const theme = useContext(themeContext);
	const { background } = theme;

	const { ourServices, gallery, location, contact } = Paths;
	const { PricesInfo, earlyInvestment } = Prices;
	const restaurantAmenities = [
		"Desayunos",
		"Encuentros empresariales",
		"Eventos",
		"After hours",
	];
	const sportAmenities = [
		"Gimnasio",
		"Máquinas de musculación",
		"Cancha de fútbol con césped sintético",
	];
	const coworkingAmenities = [
		"Equipamiento de avanzada",
		"Espacios privados",
		"WI-FI por fibra óptica",
		"Seguridad",
	];
	const footerUIPragma = (
		<Text
			fontSize={"1.3rem"}
			fontWeight={800}
			color={theme.text.withAccent1}
			textAlign='center'
		>
			ECO HOTEL PRAGMA pertenece al PRAGMA GROUP
		</Text>
	);
	const footerUI = (
		<Flex
			justifyContent='space-around'
			alignItems='center'
			w='100%'
			h='100%'
			flexDirection={{ base: "column", xl: "row" }}
		>
			<Flex
				display={{ md: "none", xl: "flex" }}
				alignItems='center'
				justifyContent={"flex-start"}
			>
				{footerUIPragma}
			</Flex>
			<Flex
				flexDirection={"column"}
				alignItems='center'
				justifyContent={"flex-start"}
			>
				<Text
					fontSize={"1.3rem"}
					fontWeight={800}
					color={theme.text.withAccent1}
				>
					Reservas
				</Text>
				<Text>+54 9 11 5048 1966 </Text>
			</Flex>
			<Flex
				flexDirection={"column"}
				alignItems='center'
				justifyContent={"flex-start"}
			>
				<Text
					fontSize={"1.3rem"}
					fontWeight={800}
					color={theme.text.withAccent1}
				>
					Administración{" "}
				</Text>
				<Text> +54299 4583548</Text>
			</Flex>
			<Flex
				flexDirection={"column"}
				alignItems='center'
				justifyContent={"flex-start"}
			>
				<Text
					fontSize={"1.3rem"}
					fontWeight={800}
					color={theme.text.withAccent1}
				>
					Contacto
				</Text>
				<Text>
					<EmailIcon /> ecohotel@pragmahotel.com.ar
				</Text>
			</Flex>
		</Flex>
	);

	return (
		<>
			<Box overflow={"hidden"}>
				<HeroLanding w='100%' h='100vh' img={fondoBlanco} />

				<ValueProposal>
					{/* <Flex bg='#997e1e' w='100%' h='1px'></Flex>
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
					mb='30px'
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
				</Flex> */}
				</ValueProposal>

				<section id={ourServices.id} style={{ width: "100%" }}>
					<Flex bg='white' w='100%' minH='0vh'></Flex>
				</section>
				<section
					id={ourServices.restaurant.id}
					style={{ width: "100%" }}
				>
					<Flex
						bg='white'
						w='100%'
						minH={{ base: "10vh", lg: "20vh" }}
					></Flex>
				</section>
				<ServiciosSection
					img={ecoHotelImg}
					alt='Eco Hotel restaurant'
					bg='white'
					position='left'
				>
					<ServiciosContent
						title='RESTAURANT'
						subTitle='Eco Hotel'
						description='Instalacions y servicios de primera categoria'
						unidad={colorEcoHotel}
						amenities={sportAmenities}
					></ServiciosContent>
				</ServiciosSection>
				<section id={ourServices.sport.id} style={{ width: "100%" }}>
					<Flex
						bg='white'
						w='100%'
						minH={{ base: "10vh", lg: "20vh" }}
					></Flex>
				</section>
				<ServiciosSection
					img={inversionImg}
					alt='Eco Hotel Actividad Fisica, cancha de 11'
					bg='white'
					position='right'
				>
					<ServiciosContent
						title='ACTIVIDAD DEPORTIVA'
						subTitle='DESARROLLO'
						description='Inversiones sólidas, proyectos y emprendimientos'
						amenities={sportAmenities}
						unidad={colorDesarrollo}
					></ServiciosContent>
				</ServiciosSection>
				<section
					id={ourServices.coworking.id}
					style={{ width: "100%" }}
				>
					<Flex
						bg='white'
						w='100%'
						minH={{ base: "10vh", lg: "20vh" }}
					></Flex>
				</section>
				<ServiciosSection
					img={construccionImg}
					alt='Eco Hotel espacios de co-working'
					bg='white'
					position='left'
				>
					<ServiciosContent
						title='CO-WORKING'
						subTitle='CONSTRUCCIÓN'
						description='Servicio eficiente, confiable.'
						amenities={coworkingAmenities}
						unidad={colorConstrucciones}
					></ServiciosContent>
				</ServiciosSection>
				<section style={{ width: "100%" }}>
					<Flex
						bg='white'
						w='100%'
						minH={{ base: "10vh", lg: "20vh" }}
					></Flex>
				</section>
				<ServiciosSection
					img={housingImg}
					alt='Eco Hotel espacios de co-working'
					bg='white'
					position='right'
				>
					<ServiciosContent
						title='CO-WORKING'
						subTitle='HOUSING'
						description='Contamos con un espacio de Coworking, sala de reuniones y salas de capacitación para el personal de las empresas que nos eligen.'
						amenities={coworkingAmenities}
						unidad={colorHousing}
					></ServiciosContent>
				</ServiciosSection>

				{/* <section id={ourServices.id} style={{ width: "100%" }}>
				<Flex bg='white' w='100%' minH='0vh'></Flex>
			</section>
			<section id={ourServices.restaurant.id} style={{ width: "100%" }}>
				<Flex
					bg='white'
					w='100%'
					minH={{ base: "10vh", lg: "20vh" }}
				></Flex>
			</section>
			<ServiciosSection
				img={imgRestaurant}
				alt='Eco Hotel restaurant'
				bg='white'
				position='left'
			>
				<ServiciosContent
					title='RESTAURANT'
					subTitle='GASTRONOMÍA'
					description='En nuestra cafetería y restaurant podés disfrutar de deliciosos desayunos, almuerzos y cenas. Además de relajar después de la jornada de trabajo.'
					amenities={restaurantAmenities}
					unidad={colorDesarrollo}
				></ServiciosContent>
			</ServiciosSection>
			<section id={ourServices.sport.id} style={{ width: "100%" }}>
				<Flex
					bg='white'
					w='100%'
					minH={{ base: "10vh", lg: "20vh" }}
				></Flex>
			</section>
			<ServiciosSection
				img={imgActividadDeportivaCancha}
				alt='Eco Hotel Actividad Fisica, cancha de 11'
				bg='white'
				position='right'
			>
				<ServiciosContent
					title='ACTIVIDAD DEPORTIVA'
					subTitle='SALUD'
					description='Nuestras instalaciones cuentan con espacios equipados para realizar actividades deportivas individuales y grupales.'
					amenities={sportAmenities}
					unidad={colorEcoHotel}
				></ServiciosContent>
			</ServiciosSection>
			<section id={ourServices.coworking.id} style={{ width: "100%" }}>
				<Flex
					bg='white'
					w='100%'
					minH={{ base: "10vh", lg: "20vh" }}
				></Flex>
			</section>
			<ServiciosSection
				img={imgCoWorking}
				alt='Eco Hotel espacios de co-working'
				bg='white'
				position='left'
			>
				<ServiciosContent
					title='CO-WORKING'
					subTitle='TRABAJO'
					description='Contamos con un espacio de Coworking, sala de reuniones y salas de capacitación para el personal de las empresas que nos eligen.'
					amenities={coworkingAmenities}
					unidad={colorConstrucciones}
				></ServiciosContent>
			</ServiciosSection> */}
				<Flex
					mt='2rem'
					bg='black'
					w='100%'
					minH={{ base: "10vh", lg: "10vh" }}
					alignItems='center'
					justifyContent='center'
				>
					<Text fontSize={{ base: "2rem", lg: "4rem" }} color='#ccc'>
						Ubicación
					</Text>
				</Flex>
				<section id={location.id} style={{ width: "100%" }}>
					<Flex w='100%' h='60vh'>
						<iframe
							width='100%'
							height='100%'
							title='Eco hotel Location'
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50067.52262107152!2d-68.800222!3d-38.343886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b353272bfec21cf!2sEcotel%20Pragma%20A%C3%B1elo!5e0!3m2!1ses!2sar!4v1669908824019!5m2!1ses!2sar'
							style={{ border: "0" }}
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
					</Flex>
				</section>
				{/* <section id={contact.id} style={{ width: "100%" }}>
				<Flex w='100%' h='60vh'>
					<Contactanos />
				</Flex>
			</section> */}
				<section id={contact.id} style={{ width: "100%" }}>
					<Flex
						bg='black'
						h={{ base: "auto", xl: "70vh" }}
						w='full'
						px={{ base: "2rem", xl: "10rem" }}
						py='5rem'
						flexDirection='column'
					>
						<Box
							display='flex'
							alignItems='center'
							mb='3rem'
							flexDirection={{ base: "column", xl: "row" }}
						>
							<Flex w={{ base: "100%", xl: "50%" }} h='100%'>
								<Flex
									flexDirection='column'
									maxW={{ base: "100%", xl: "60%" }}
									px={{ base: "2rem", xl: "0px" }}
									alignItems={{ base: "center", xl: "left" }}
									justifyContent={{
										base: "center",
										xl: "left",
									}}
								>
									<Heading
										as='h2'
										fontSize='5rem'
										color='white'
									>
										Contacto
									</Heading>
									<Text
										fontSize='1.4rem'
										color='#ccc'
										mt={{ base: "1rem", xl: "3rem" }}
										textAlign='justify'
									>
										Envie sus datos mediante el formulario y
										nos pondremos en contacto con usted en
										la brevedad.
									</Text>
									<Text
										fontSize='1.4rem'
										color='#ccc'
										textAlign='justify'
									>
										Es un gusto para nosotros ayudarle con
										cualquier consulta que disponga.
									</Text>
								</Flex>
							</Flex>
							<Flex
								w={{ base: "100%", xl: "50%" }}
								h='100%'
								pl={{ base: "2rem", xl: "5rem" }}
								pr={{ base: "2rem", xl: "0px" }}
							>
								<ContactForm w='100%' />
							</Flex>
						</Box>
						<Box
							borderTop='2px solid #997e1e'
							w='100%'
							h='100%'
							pt='1rem'
						>
							<Flex
								w='100%'
								h='100%'
								justifyContent='space-around'
								alignItems='center'
								color={theme.text.secondary}
							>
								<Flex
									w='100%'
									h='100%'
									display={{
										base: "flex",
										md: "none",
										xl: "flex",
									}}
								>
									{footerUI}
								</Flex>
								<Flex
									w='100%'
									h='100%'
									display={{
										base: "none",
										sm: "none",
										md: "flex",
										xl: "none",
									}}
									justifyContent='space-evenly'
									alignItems='center'
									flexDirection='column'
								>
									<Box my='1rem'>{footerUIPragma}</Box>
									{footerUI}
								</Flex>
							</Flex>
						</Box>
					</Flex>
				</section>
			</Box>
		</>
	);
}

export default Home;
