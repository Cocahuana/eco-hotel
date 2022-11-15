import { Box } from "@chakra-ui/react";
function ViewMobile(props) {
	return (
		<Box
			display={{
				base: "flex",
				sm: "flex",
				md: "none",
				lg: "none",
			}}
		>
			{props.children}
		</Box>
	);
}

export default ViewMobile;
