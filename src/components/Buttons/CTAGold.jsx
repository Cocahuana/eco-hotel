import { Stack, Box, Link, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
const IconBox = styled.div`
	display: flex;
	justify: center;
	align: center;
	transition: all 0.3s ease;
	transform: translateX(-10px);
	width: auto;
	opacity: 0;
`;

const ContentBox = styled.div`
	display: flex;
	justify: center;
	align: center;
	font-weight: 400;
	transition: all 0.2s ease;
	transform: translateX(10px);
	&:hover {
		transform: translateX(0);
	}
`;

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	letter-spacing: 2px;
	border: 2px solid ${(props) => props.borderColor};
	color: ${(props) => props.color};
	padding: 0.25em 1em;
	text-transform: uppercase;
	&:hover ${IconBox} {
		transition: all 0.3s ease;
		transform: translateX(0);
		opacity: 100%;
	}
`;
function CTAGold(props) {
	const theme = useContext(themeContext);
	return (
		<Stack direction={"row"} align={"center"}>
			<Button
				as='a'
				// @href is the link for download
				// @download is how the file will be named after being download
				href={props.href}
				target='_blank'
				rel='noopener noreferrer'
				download={props.fileName}
				variant='outline'
				color={theme.accent1}
				borderColor={theme.accent1}
				type='button'
				role={"group"}
			>
				<Box>
					<ContentBox>
						{props.text}
						<IconBox>
							<Icon
								color={theme.accent1}
								w={6}
								h={6}
								as={ChevronRightIcon}
							/>
						</IconBox>
					</ContentBox>
				</Box>
			</Button>
		</Stack>
	);
}

export default CTAGold;
