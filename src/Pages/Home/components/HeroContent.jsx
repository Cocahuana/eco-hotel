import { Flex, Text, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { themeContext } from "../../../context/themeContext";
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
				<Heading as='h5' size='md' color={accent1} mb='20px'>
					{title}
				</Heading>
				<Heading as='h2' color={basedOnPosition} mb={5}>
					{subTitle}
				</Heading>
				<Text textAlign='justify' color={basedOnPosition}>
					{description}
				</Text>
			</Flex>
		</Flex>
	);
}

export default HeroContent;
