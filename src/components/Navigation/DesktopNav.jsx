import {
	Box,
	Stack,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
} from "@chakra-ui/react";
import { DesktopSubNav } from "./DesktopSubNab";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const DesktopNav = (props) => {
	const { NAV_ITEMS } = props;
	const myTheme = useContext(themeContext);
	const { text, background } = myTheme;
	const linkColor = useColorModeValue(text.navItems, text.secondary);
	const linkHoverColor = useColorModeValue(text.navItems_active, text.base);
	const popoverContentBgColor = useColorModeValue(
		background.popoverBgColor,
		text.secondary
	);

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								as={RouterLink}
								p={2}
								fontSize={"md"}
								fontWeight={600}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								<HashLink
									smooth
									to={navItem.href ?? "#No defined href"}
								>
									{navItem.label}
								</HashLink>
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav
											key={child.label}
											{...child}
										/>
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};
