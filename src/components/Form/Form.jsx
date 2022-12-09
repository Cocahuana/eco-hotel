import React, { useState } from "react";
import Send from "../Buttons/Send";
import styled from "styled-components";
const FormStyle = styled.form`
	width: 100%;
`;
export const FormContext = React.createContext({
	form: {},
});

function Form(props) {
	const { children, submit = () => {}, initialValues, ref } = props;

	const [form, setForm] = useState(initialValues);

	const handleFormChange = (event) => {
		// Get the name of the field that caused this change event
		// Get the new value of this field
		const { name, value } = event.target;

		// Update state
		// Assign new value to the appropriate form field
		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<FormStyle ref={props.myref} className='Form'>
			<FormContext.Provider
				value={{
					form,
					handleFormChange,
				}}
			>
				{children}
			</FormContext.Provider>
			<Send onClick={() => submit(form)} float='right'>
				Enviar
			</Send>
		</FormStyle>
	);
}

export default Form;
