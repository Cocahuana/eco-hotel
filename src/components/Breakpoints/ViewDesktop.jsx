import { Box } from "@chakra-ui/react";
function ViewDesktop(props) {
	return (
		<Box
			display={{
				base: "none",
				sm: "none",
				md: "none",
				lg: "flex",
			}}
			justifyContent='center'
		>
			{props.children}
		</Box>
	);
}

export default ViewDesktop;
