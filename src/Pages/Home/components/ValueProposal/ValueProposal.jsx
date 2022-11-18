import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import buildingIcon from "./building-icon.svg";
import qualityIcon from "./quality-icon.svg";
import GoldHeading from "../../../../components/Heading/GoldHeading";
import CustomCard from "./CustomCard";
import CTAGold from "../../../../components/Buttons/CTAGold";
function ValueProposal() {
	const proposal = {
		title: "Vivir en un 5 estrellas",
		subTitle: "EL UNICO CONSTRUIDO",
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc lacus. Suspendisse semper diam nec porta ornare. Morbi id interdum risus. Maecenas laoreet magna tellus, in varius tellus congue sit amet. Vivamus condimentum quis magna id egestas. Morbi posuere quam urna, nec porta sem ultrices sed. Integer in hendrerit quam, vel iaculis nunc. Morbi ac diam sed lectus aliquam dictum. Nulla mauris tortor, condimentum eu augue quis, finibus pellentesque ante. In hac habitasse platea dictumst. Cras in eros venenatis, volutpat turpis nec, vestibulum nulla.`,
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
	return (
		<>
			<Box bg='black'>
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
						<CTAGold text='DESCARGAR BROCHURE' />
						{/*  */}
						<Flex
							w='67.5rem'
							py='30px'
							align='center'
							justifyContent='space-between'
						>
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
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}

export default ValueProposal;
