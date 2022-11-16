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
import { Paths } from "..";
function Navigation() {
	const { isOpen, onToggle } = useDisclosure();
	const myTheme = useContext(themeContext);
	const { background, text } = myTheme;

	// Styling:
	return (
		<Box>
			<Flex
				//popover container:
				bg={useColorModeValue(background.base, background.secondary)}
				color={useColorModeValue(text.withAccent1, text.secondary)}
				minH={"10vh"}
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
						color={useColorModeValue(text.withAccent1, text.base)}
					>
						<Link to='/'>ECO HOTEL PRAGMA</Link>
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
const { home, ourServices, gallery, location, contact } = Paths;
const NAV_ITEMS = [
	{
		label: home.text,
		href: home.link,
	},
	{
		label: ourServices.text,
		children: [
			{
				label: "Servicio housing",
				subLabel: "Mantenimiento, limpieza, comedor..",
				href: ourServices.link,
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
		label: gallery.text,
		children: [
			{
				label: "Habitaciones",
				subLabel: "El mejor lugar para vivir",
				href: gallery.link,
			},
			{
				label: "Edificio",
				subLabel: "Un lugar increible en Neuquen",
				href: gallery.link,
			},
		],
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
