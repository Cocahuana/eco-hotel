import {
	Box,
	Stack,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
} from "@chakra-ui/react";
import {DesktopSubNav} from "./DesktopSubNab";
import {useContext} from "react";
import {themeContext} from "../../context/themeContext";
import {Link as RouterLink} from "react-router-dom";
export const DesktopNav = (props) => {
	const {NAV_ITEMS} = props;
	const myTheme = useContext(themeContext);
	const {text} = myTheme;
	const linkColor = useColorModeValue(text.base, text.secondary);
	const linkHoverColor = useColorModeValue(text.secondary, text.base);
	const popoverContentBgColor = useColorModeValue(text.base, text.secondary);

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								as={RouterLink}
								to={
									navItem.href ??
									"#Router-dom-btn-not-working"
								}
								p={2}
								fontSize={"md"}
								fontWeight={600}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								minW={"sm"}>
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
