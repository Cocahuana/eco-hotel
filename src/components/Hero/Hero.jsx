import { ViewDesktop, ViewTablet, ViewMobile } from "../Breakpoints";
import { Flex, Img } from "@chakra-ui/react";
function Hero(props) {
	// position acepta 2 valores: "left" y "right". El primero indica la imagen a la izq y el 2do la img a la derecha
	// El componente acepta 5 props: bg, img, alt, children y position
	const imgSide = (
		<Flex w='50%' bg={props.bg}>
			<Img src={props.img} alt={props.alt} />
		</Flex>
	);
	const content = (
		<Flex
			height='90%'
			alignItems={"center"}
			justifyContent='center'
			width='100%'
		>
			{props.children}
		</Flex>
	);
	const tabletHero = (
		<ViewTablet>
			<Flex h='65vh' w='full'>
				<Flex w='100%' flexDirection='column' bg={props.bg}>
					{content}
				</Flex>
			</Flex>
		</ViewTablet>
	);
	const mobileHero = (
		<ViewMobile>
			<Flex h='80vh' w='full'>
				<Flex w='100%' flexDirection='column' bg={props.bg}>
					{content}
				</Flex>
			</Flex>
		</ViewMobile>
	);

	return (
		<>
			{props.position === "left" ? (
				<>
					<ViewDesktop>
						<Flex h='90vh' w='full'>
							{imgSide}
							<Flex w='50%' flexDirection='column' bg={props.bg}>
								{content}
							</Flex>
						</Flex>
					</ViewDesktop>
					{tabletHero}
					{mobileHero}
				</>
			) : props.position === "right" ? (
				<>
					<ViewDesktop>
						<Flex h='90vh' w='full'>
							<Flex w='50%' flexDirection='column' bg={props.bg}>
								{content}
							</Flex>
							{imgSide}
						</Flex>
					</ViewDesktop>
					{tabletHero}
					{mobileHero}
				</>
			) : (
				<>{console.log("No position assigned")}</>
			)}
		</>
	);
}

export default Hero;
