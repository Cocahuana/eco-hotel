import {
	Heading,
	Container,
	Flex,
	Button,
	Text,
	Box,
	Stack,
	Icon,
} from "@chakra-ui/react";
import buildingIcon from "../../../../assets/svg/building-icon.png";
import qualityIcon from "../../../../assets/svg/quality-icon.png";
import GoldHeading from "../../../../components/Heading/GoldHeading";
import Card from "./Card";
import CTAGold from "../../../../components/Buttons/CTAGold";
function ValueProposal() {
	const proposal = {
		title: "Vivir en un 5 estrellas",
		subTitle: "EL UNICO CONSTRUIDO",
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc lacus. Suspendisse semper diam nec porta ornare. Morbi id interdum risus. Maecenas laoreet magna tellus, in varius tellus congue sit amet. Vivamus condimentum quis magna id egestas. Morbi posuere quam urna, nec porta sem ultrices sed. Integer in hendrerit quam, vel iaculis nunc. Morbi ac diam sed lectus aliquam dictum. Nulla mauris tortor, condimentum eu augue quis, finibus pellentesque ante. In hac habitasse platea dictumst. Cras in eros venenatis, volutpat turpis nec, vestibulum nulla.`,
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
							<Heading as='h2' color='white' p='1%'>
								{proposal.subTitle}
							</Heading>
							<Text p='2%' color='white' textAlign='center'>
								{proposal.description}
							</Text>
						</Box>
						{/*  */}
						<CTAGold text='Descargar' />
						{/*  */}
						<Flex>
							<Card />
							<Card />
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}

export default ValueProposal;
