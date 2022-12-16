import {
	Box,
	Flex,
	Text,
	IconButton,
	Collapse,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
// My Theme
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";
import { Paths } from "..";
import { useState } from "react";
import logoEcoHotel from "../../assets/img/logoEcohotel.jpeg";
import Logo from "../Logo/Logo";
function Navigation() {
	const { isOpen, onToggle } = useDisclosure();
	const myTheme = useContext(themeContext);
	const { background, text } = myTheme;

	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.pageYOffset > window.innerHeight * 0.1) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);

	// Styling:
	return (
		<Box
			zIndex='200020'
			position='sticky'
			top='0'
			h={colorChange ? "10vh" : "0px"}
			transition='all 0.3s ease-out'
			bg={colorChange ? background.secondary : "transparent"}
		>
			<Flex
				transition='all 1s ease-out'
				borderBottom={colorChange ? "solid 1px #ccc" : "0px"}
				boxShadow={colorChange ? "0 1px 0 #ccc" : "0px"}
				color={useColorModeValue(text.withAccent1, text.secondary)}
				h={"10vh"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				align={"center"}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? (
								<CloseIcon w={3} h={3} />
							) : (
								<HamburgerIcon w={5} h={5} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Text
					textAlign={useBreakpointValue({
						base: "center",
						md: "left",
					})}
					fontFamily={"heading"}
					fontWeight={"bold"}
					color={useColorModeValue(text.withAccent1, text.base)}
				>
					<Link to='/'>
						{/* <Image
							src={logoEcoHotel}
							transition='all 1s ease-out'
							filter={
								colorChange ? "opacity(100%)" : "opacity(0%)"
							}
						/> */}
						<Logo />
					</Link>
				</Text>
				<Flex
					flex={{ base: 1 }}
					justify={{ base: "center", md: "end" }}
				>
					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav NAV_ITEMS={NAV_ITEMS} />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav NAV_ITEMS={NAV_ITEMS} />
			</Collapse>
		</Box>
	);
}
const { home, ourServices, gallery, location, contact } = Paths;
const NAV_ITEMS = [
	{
		label: home.text,
		href: home.link,
	},
	{
		label: ourServices.text,
		href: ourServices.link,
		children: [
			{
				label: ourServices.restaurant.text,
				subLabel:
					"La experiencia del Restaurant se basa en la calidad de su cocina, en el amplio salón y -especialmente- en la buena atención.",
				href: ourServices.restaurant.link,
			},
			{
				label: ourServices.sport.text,
				subLabel:
					"Cancha de Fútbol con césped sintético, Gimnasio y máquinas de musculación.",
				href: ourServices.sport.link,
			},
			{
				label: ourServices.coworking.text,
				subLabel:
					"Equipamiento de avanzada, espacios privados y de coworking, WI-FI por fibra óptica y Seguridad.",
				href: ourServices.coworking.link,
			},
		],
	},
	{
		label: gallery.text,
		href: gallery.link,
	},
	{
		label: location.text,
		href: location.link,
	},
	{
		label: contact.text,
		href: contact.link,
	},
];
export default Navigation;
