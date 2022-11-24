import { Flex, Img } from "@chakra-ui/react";
import { ViewDesktop, ViewTablet } from "../../../../components/Breakpoints";
function ServiciosSection(props) {
	const imgSide = (
		<Flex w={{ base: "100%", lg: "47.5%" }} h='100%' bg={props.bg}>
			<Img
				w='100%'
				h={{ lg: "100%" }}
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
			<ViewDesktop>
				{props.position === "left" ? (
					<>
						{/* <ViewDesktop> */}
						<Flex
							minH={{ base: "100%", lg: "50vh" }}
							w='full'
							flexDirection={{ base: "column", lg: "row" }}
							p={{ base: "20px", lg: 0 }}
						>
							{imgSide}
							<Flex
								w={{ base: "100%", lg: "52.5%" }}
								flexDirection='column'
								bg={props.bg}
								pt={{ base: "100px", lg: 0 }}
							>
								{content}
							</Flex>
						</Flex>
						{/* </ViewDesktop> */}
					</>
				) : props.position === "right" ? (
					<>
						{/* <ViewDesktop> */}
						<Flex
							minH={{ base: "100%", lg: "50vh" }}
							w='full'
							flexDirection={{ base: "column", lg: "row" }}
						>
							<Flex
								w={{ base: "100%", lg: "52.5%" }}
								bg={props.bg}
								pb={{ base: "100px", lg: 0 }}
							>
								{content}
							</Flex>
							{imgSide}
						</Flex>
						{/* </ViewDesktop> */}
					</>
				) : (
					<>{console.log("No position assigned")}</>
				)}
			</ViewDesktop>
			<ViewTablet>
				<>
					{/* <ViewDesktop> */}
					<Flex
						minH={{ base: "100%", lg: "100vh" }}
						w='full'
						flexDirection={{ base: "column", lg: "row" }}
						p={{ base: "20px", lg: 0 }}
					>
						{imgSide}
						<Flex
							w={{ base: "100%", lg: "52.5%" }}
							flexDirection='column'
							bg={props.bg}
							pt={{ base: "100px", lg: 0 }}
						>
							{content}
						</Flex>
					</Flex>
					{/* </ViewDesktop> */}
				</>
			</ViewTablet>
		</>
	);
}

export default ServiciosSection;
