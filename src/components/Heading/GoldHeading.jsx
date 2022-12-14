import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
function GoldHeading(props) {
	const myTheme = useContext(themeContext);
	const { title, letterSpacing } = props;
	return (
		<Heading
			as='h5'
			size='md'
			letterSpacing={letterSpacing}
			color={myTheme.accent1}
			mb='20px'
		>
			{title}
		</Heading>
	);
}

export default GoldHeading;
