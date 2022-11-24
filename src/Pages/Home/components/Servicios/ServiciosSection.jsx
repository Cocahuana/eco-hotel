import { Flex, Img } from "@chakra-ui/react";
import { ViewDesktop } from "../../../../components/Breakpoints";
function ServiciosSection(props) {
	const imgSide = (
		<Flex w='47.5%' h='100%' bg={props.bg}>
			<Img
				w='100%'
				h='75%'
				src={props.img}
				alt={props.alt}
				filter='drop-shadow(0 0 0.75rem #aaa);'
			/>
		</Flex>
	);
	const content = (
		<Flex height='100%' width='100%'>
			{props.children}
		</Flex>
	);
	return (
		<>
			{props.position === "left" ? (
				<>
					<ViewDesktop>
						<Flex minH='100vh' w='full'>
							{imgSide}
							<Flex
								w='52.5%'
								flexDirection='column'
								bg={props.bg}
							>
								{content}
							</Flex>
						</Flex>
					</ViewDesktop>
				</>
			) : props.position === "right" ? (
				<>
					<ViewDesktop>
						<Flex h='90vh' w='full'>
							<Flex w='45%' bg={props.bg}>
								{content}
							</Flex>
							{imgSide}
						</Flex>
					</ViewDesktop>
				</>
			) : (
				<>{console.log("No position assigned")}</>
			)}
		</>
	);
}

export default ServiciosSection;
