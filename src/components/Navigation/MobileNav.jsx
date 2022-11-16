import {Stack, useColorModeValue} from "@chakra-ui/react";
import {MobileNavItem} from "./MobileNavItem";
import {useContext} from "react";
import {themeContext} from "../../context/themeContext";
export const MobileNav = (props) => {
	const {NAV_ITEMS} = props;
	const myTheme = useContext(themeContext);
	const {background} = myTheme;
	return (
		<Stack
			bg={useColorModeValue(background.secondary, "gray.800")}
			p={4}
			display={{md: "none"}}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};
