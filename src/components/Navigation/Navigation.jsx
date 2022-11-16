import {
	Box,
	Flex,
	Text,
	IconButton,
	Collapse,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
// My Theme
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";
function Navigation() {
	const { isOpen, onToggle } = useDisclosure();
	const myTheme = useContext(themeContext);
	const { background, text } = myTheme;
	// Styling:
	return (
		<Box>
			<Flex
				bg={useColorModeValue(background.base, background.secondary)}
				color={useColorModeValue(text.secondary, text.base)}
				minH={"8vh"}
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
				<Flex
					flex={{ base: 1 }}
					justify={{ base: "center", md: "start" }}
				>
					<Text
						textAlign={useBreakpointValue({
							base: "center",
							md: "left",
						})}
						fontFamily={"heading"}
						fontWeight={"bold"}
						color={useColorModeValue(text.base, text.secondary)}
					>
						<Link to='/'>Infocrip S.R.L</Link>
					</Text>

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
const NAV_ITEMS = [
	{
		label: "Inicio",
		href: "/",
	},
	{
		label: "Servicios",
		children: [
			{
				label: "Servicio Técnico",
				subLabel: "Mantenimiento, reparacion de PC, Armado de equipos",
				href: "#",
			},
			{
				label: "Soporte Técnico Remoto",
				subLabel: "Instalación de software de forma remota",
				href: "#",
			},
			{
				label: "Laboratorio de Electronica",
				subLabel: "Reparacion de mothers, fuentes...",
				href: "#",
			},
		],
	},
	{
		label: "Find Work",
		children: [
			{
				label: "Job Board",
				subLabel: "Find your dream design job",
				href: "#",
			},
			{
				label: "Freelance Projects",
				subLabel: "An exclusive list for contract work",
				href: "#",
			},
		],
	},
	{
		label: "Learn Design",
		href: "#",
	},
	{
		label: "Hire Designers",
		href: "#",
	},
];
export default Navigation;
