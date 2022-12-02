import { useContext } from "react";
import { themeContext } from "../../../../context/themeContext";
import GoldHeading from "../../../../components/Heading/GoldHeading";
import {
	Flex,
	Box,
	Text,
	UnorderedList,
	ListItem,
	Heading,
} from "@chakra-ui/react";
import UnidadNegocioBar from "../../../../components/UnidadNegocioBar/UnidadNegocioBar";
function ServiciosContent(props) {
	const myTheme = useContext(themeContext);
	const { accent1, text } = myTheme;
	const { title, subTitle, amenities, description, position } = props;
	let ColorTextBasedOnPosition =
		position === "right"
			? text.base
			: position === "left"
			? text.secondary
			: "red";
	return (
		<Flex
			h='100%'
			w='100%'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			px={{ base: 0, md: "60px" }}
			fontWeight='400'
		>
			<Flex w='100%' flexDir='column' pl={{ base: 0, md: "5%" }}>
				{/* <Box ml='10%'>
					<GoldHeading title={title} letterSpacing='2px' />
				</Box>
				<Box h='2px' bg={accent1} w='25%'></Box> */}
			</Flex>
			<Flex
				w='100%'
				h='100%'
				flexDir='column'
				px={{ base: "2%", md: "15%" }}
			>
				<Flex flexDirection='column' pt='30px'>
					<Heading as='h2' size='2xl' py='10px'>
						{subTitle}
					</Heading>

					<UnidadNegocioBar unidad={props.unidad} />
					<Text size='md' color='#5F5F5F'>
						{description}
					</Text>
				</Flex>
				<Flex flexDirection='column' color='#5F5F5F' pt='30px'>
					<Heading as='h3' size='sm' py='10px'>
						AMENITIES
					</Heading>
					{amenities?.map((amenity) => (
						<UnorderedList spacing={3}>
							<ListItem>{amenity}</ListItem>
						</UnorderedList>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default ServiciosContent;
