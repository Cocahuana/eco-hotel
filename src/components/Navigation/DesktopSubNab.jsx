import {
	Box,
	Flex,
	Text,
	Stack,
	Icon,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
export const DesktopSubNav = ({ label, href, subLabel }) => {
	const myTheme = useContext(themeContext);
	const { background, text } = myTheme;
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{
				bg: useColorModeValue(
					background.popoverChildrenBgColor,
					"red.200"
				),
			}}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<HashLink smooth to={href ?? "#No defined href"}>
						<Text
							transition={"all .3s ease"}
							_groupHover={{ color: text.navItems }}
							fontWeight={500}
						>
							{label}
						</Text>
						<Text fontSize={"sm"} color={text.navItems}>
							{subLabel}
						</Text>
					</HashLink>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{
						opacity: "100%",
						transform: "translateX(0)",
					}}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon
						color={text.navItems}
						w={5}
						h={5}
						as={ChevronRightIcon}
					/>
				</Flex>
			</Stack>
		</Link>
	);
};
