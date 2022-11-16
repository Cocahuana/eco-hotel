import { Parallax } from "react-parallax";
import { ViewDesktop, ViewTablet, ViewMobile } from "../Breakpoints";
import { Stack, Flex, Img } from "@chakra-ui/react";
function Hero(props) {
	// position acepta 2 valores: "left" y "right". El primero indica la imagen a la izq y el 2do la img a la derecha
	// El componente acepta 5 props: bg, img, alt, children y position
	return (
		<>
			{props.position === "left" ? (
				<Flex h='90vh' w='full'>
					<Flex w='50%' bg={props.bg}>
						<Img src={props.img} alt={props.alt} />
					</Flex>
					<Flex w='50%' flexDirection='column' bg={props.bg}>
						<Flex
							height={"90vh"}
							alignItems={"center"}
							justifyContent='center'
							width='100%'
						>
							{props.children}
						</Flex>
					</Flex>
				</Flex>
			) : props.position === "right" ? (
				<Flex h='90vh' w='full'>
					<Flex w='50%' flexDirection='column' bg={props.bg}>
						<Flex
							height={"90vh"}
							alignItems={"center"}
							justifyContent='center'
							width='100%'
						>
							{props.children}
						</Flex>
					</Flex>
					<Flex w='50%' bg={props.bg}>
						<Img src={props.img} alt={props.alt} />
					</Flex>
				</Flex>
			) : (
				<>{console.log("No position assigned")}</>
			)}
		</>
	);
}

export default Hero;
// <Flex h='90vh' w='full'>
// 	<Flex w='50%' flexDirection='column' bg={props.bg}>
// 		<Flex
// 			height={"90vh"}
// 			alignItems={"center"}
// 			justifyContent='center'
// 			width='100%'
// 		>
// 			{props.children}
// 		</Flex>
// 	</Flex>
// 	<Flex w='50%' bg={props.bg}>
// 		<Img src={props.img} alt={props.alt} />
// 	</Flex>
// </Flex>
