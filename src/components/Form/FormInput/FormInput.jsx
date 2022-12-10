import { useContext } from "react";
import { FormContext } from "../Form";
import {
	Box,
	InputGroup,
	InputLeftElement,
	Input,
	Heading,
} from "@chakra-ui/react";
function FormInput(props) {
	const { label, type = "text", name, leftIcon } = props;

	const formContext = useContext(FormContext);
	const { form, handleFormChange } = formContext;

	return (
		<InputGroup my='2rem' w='100%'>
			<InputLeftElement
				pointerEvents='none'
				children={leftIcon}
				h='4rem'
				color='#bb9f3f'
				fontSize='1.1rem'
			/>
			<Input
				type={type}
				name={name}
				value={form[name]}
				onChange={handleFormChange}
				placeholder={label}
				borderColor='transparent'
				borderBottom='2px solid white'
				borderRadius='0px'
				h='4rem'
				color='white'
				fontSize='1.1rem'
			/>
		</InputGroup>
	);
}

export default FormInput;
