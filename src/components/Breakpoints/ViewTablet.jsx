import { Box } from "@chakra-ui/react";
function ViewTablet(props) {
	return (
		<Box
			display={{
				base: "none",
				sm: "none",
				md: "flex",
				lg: "none",
			}}
		>
			{props.children}
		</Box>
	);
}

export default ViewTablet;
