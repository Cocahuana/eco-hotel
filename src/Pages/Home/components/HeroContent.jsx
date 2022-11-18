import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { themeContext } from "../../../context/themeContext";
import GoldHeading from "../../../components/Heading/GoldHeading";
import CTAGold from "../../../components/Buttons/CTAGold";
function HeroContent(props) {
	const myTheme = useContext(themeContext);
	const { accent1, text } = myTheme;
	const { title, subTitle, description, position } = props;
	let basedOnPosition =
		position === "right"
			? text.base
			: position === "left"
			? text.secondary
			: "red";

	return (
		<Flex h='100%' alignItems='center' justifyContent='center'>
			<Flex
				flexDirection='column'
				alignItems='flex-start'
				justifyContent='center'
				w={{ base: "100%", md: "80%" }}
				h='100%'
				px={{ base: "10%" }}
				py={{ base: "80px" }}
			>
				<GoldHeading title={title} />
				<Heading as='h2' color={basedOnPosition} mb={5}>
					{subTitle}
				</Heading>
				<Text textAlign='justify' color={"#5E5E5E"}>
					{description}
				</Text>
				<Flex mt={10} align='center' justifyContent='flex-start'>
					<CTAGold text='SOLICITAR RESERVA' />
				</Flex>
			</Flex>
		</Flex>
	);
}

export default HeroContent;
