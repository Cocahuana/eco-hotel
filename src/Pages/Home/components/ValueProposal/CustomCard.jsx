import {
	Card,
	CardHeader,
	CardBody,
	Text,
	Image,
	Heading,
	Flex,
	Container,
} from "@chakra-ui/react";
function CustomCard(props) {
	const { icon, title, description, textColor, width, heigth } = props;
	return (
		<>
			{/* We use ?? to say that when textColor is null, then use black as text color, otherwise, receive the textColor value by props */}
			<Card
				color={textColor ?? "black"}
				w={width ?? "full"}
				h={heigth ?? "100%"}
				py={{ base: "10%", md: "0" }}
			>
				<Flex
					flexDirection={"column"}
					align='center'
					justifyContent='center'
				>
					<Image
						src={icon ?? console.log("Not Image")}
						alt={title + "icon"}
						h='85px'
						w='85px'
					/>
					<Heading as='h4' mt='5px'>
						{title ?? "Not title Assigned"}
					</Heading>
					<Container
						textAlign='center'
						lineHeight={"1.8em"}
						overflowWrap='break-word'
						mx='1em'
						mt='1rem'
					>
						{description ?? "Not Description Assigned"}
					</Container>
				</Flex>
			</Card>
		</>
	);
}

export default CustomCard;
