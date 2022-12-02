import { Flex, Box } from "@chakra-ui/react";

function UnidadNegocioBar(props) {
	// Segun la unidad tiene un conjunto de colores distintos definidos por la empresa
	// Unidad es un arreglo de colores
	const { unidad } = props;
	return (
		<Flex
			h='0.6rem'
			w='100%'
			alignItems='center'
			justifyContent='flex-start'
		>
			{unidad.map((unidad) => (
				<Box bg={unidad.color} h='100%' w='15%' mr='10px'></Box>
			))}
		</Flex>
	);
}

export default UnidadNegocioBar;
